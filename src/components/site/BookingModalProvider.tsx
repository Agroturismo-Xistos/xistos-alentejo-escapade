import { createContext, useContext, useState, ReactNode } from "react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { X } from "lucide-react";
import { trackBookingIntent } from "@/lib/metaPixel";

interface BookingModalContextType {
  isOpen: boolean;
  openModal: (params?: { range?: DateRange; adults?: number; children?: number; promo?: string }) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("https://agroturismo-xistos.amenitiz.io/pt/booking/room#DatesGuests-BE");

  const openModal = (params?: { range?: DateRange; adults?: number; children?: number; promo?: string }) => {
    trackBookingIntent();

    let url = "https://agroturismo-xistos.amenitiz.io/pt/booking/room";

    const query = new URLSearchParams();
    if (params?.range?.from) {
      query.append("arrival", format(params.range.from, "yyyy-MM-dd"));
    }
    if (params?.range?.to) {
      query.append("departure", format(params.range.to, "yyyy-MM-dd"));
    }
    if (params?.adults !== undefined) {
      query.append("adults", params.adults.toString());
    }
    if (params?.children !== undefined) {
      query.append("children", params.children.toString());
    }
    if (params?.promo) {
      query.append("promocode", params.promo);
    }

    const queryString = query.toString();
    if (queryString) {
      url += "?" + queryString;
    }
    url += "#DatesGuests-BE";

    // No mobile, abre directamente no Amenitiz; no desktop abre o modal.
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    setIframeUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8">
          <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button 
                onClick={closeModal} 
                className="grid place-items-center w-10 h-10 bg-white/90 hover:bg-white backdrop-blur shadow-md rounded-full transition-all text-bark hover:text-ochre"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 w-full h-full relative overflow-hidden bg-white/50">
              <iframe
                src={iframeUrl}
                title="Sistema de reservas"
                className="absolute inset-0 w-full h-full border-0 bg-transparent"
                allow="payment"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) throw new Error("useBookingModal must be used within BookingModalProvider");
  return context;
};
