import { createContext, useContext, ReactNode } from "react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { trackBookingIntent } from "@/lib/metaPixel";
import { buildAmenitizBookingUrl, DEFAULT_BOOKING_URL } from "@/lib/amenitiz";

interface BookingModalContextType {
  isOpen: boolean;
  openModal: (params?: { range?: DateRange; adults?: number; children?: number; promo?: string }) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  /**
   * Abre o sistema de reservas da Amenitiz directamente numa nova aba,
   * com os parâmetros de data, adultos e crianças já preenchidos na URL.
   *
   * URL esperada:
   * https://agroturismo-xistos.amenitiz.io/pt/booking/room
   *   ?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD&adults=2&children=0
   *   #RoomSelection-BE
   */
  const openModal = (params?: { range?: DateRange; adults?: number; children?: number; promo?: string }) => {
    trackBookingIntent();

    let url: string;

    if (params?.range?.from && params?.range?.to) {
      // Constrói a URL com os parâmetros correctos usando a função partilhada
      url = buildAmenitizBookingUrl({
        startDate: format(params.range.from, "yyyy-MM-dd"),
        endDate: format(params.range.to, "yyyy-MM-dd"),
        adults: params.adults ?? 2,
        children: params.children ?? 0,
      });
    } else {
      // Sem datas: abre a página de reservas sem parâmetros
      url = DEFAULT_BOOKING_URL;
    }

    console.log("[Xistos] Abrindo Amenitiz:", url);

    // Abre sempre directamente no Amenitiz — sem iframe, sem modal
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // closeModal mantido por compatibilidade (não faz nada agora que não há modal)
  const closeModal = () => {};

  return (
    <BookingModalContext.Provider value={{ isOpen: false, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) throw new Error("useBookingModal must be used within BookingModalProvider");
  return context;
};
