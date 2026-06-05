import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/351964814928?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Agroturismo%20Xistos."
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar via WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-whatsapp text-cream shadow-card grid place-items-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-whatsapp/40 -z-10" />
    </a>
  );
}
