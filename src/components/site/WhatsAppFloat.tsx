import { MessageCircle } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export default function WhatsAppFloat() {
  const t = useT();
  const href = `https://wa.me/351964814928?text=${encodeURIComponent(t.whatsapp.defaultMsg)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsapp.aria}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-whatsapp text-cream shadow-card grid place-items-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-whatsapp/40 -z-10" />
    </a>
  );
}
