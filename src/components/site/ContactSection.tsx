import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Send } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const WHATSAPP_NUMBER = "351964814928";

export default function ContactSection() {
  const t = useT();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    // Construct the WhatsApp message
    const text = subject ? `${t.contact.whatsappGreeting} ${name}. ${t.contact.whatsappSubject} ${subject}. ${message}` : `${t.contact.whatsappGreeting} ${name}. ${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contactos" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-olive-deep mb-2">
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ochre/50 transition-shadow"
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-olive-deep mb-2">
                {t.contact.subjectLabel}
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ochre/50 transition-shadow"
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-olive-deep mb-2">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ochre/50 transition-shadow resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-olive-deep text-cream px-6 py-3 text-sm font-medium hover:bg-ochre transition-colors"
            >
              <Send className="h-4 w-4" />
              {t.contact.sendButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
