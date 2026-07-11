import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";

export const Route = createFileRoute("/reservas")({
  head: () => ({
    meta: [
      { title: "Reservas | Xistos Authentic Alentejo" },
      {
        name: "description",
        content: "Consulte a disponibilidade e reserve a sua estadia no Xistos Authentic Alentejo através do nosso sistema seguro de reservas.",
      },
      { property: "og:title", content: "Reserve a sua estadia | Xistos Authentic Alentejo" },
      {
        property: "og:description",
        content: "Consulte datas, disponibilidade e opções de alojamento no Xistos Authentic Alentejo.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.xistos.pt/reservas" }
    ],
  }),
  component: ReservasPage,
});

function ReservasPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col pt-32">
      <Navbar />
      
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-olive-deep mb-4">
            Reserve a sua estadia
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Consulte a disponibilidade, escolha as suas datas e conclua a reserva através do nosso sistema seguro de reservas.
          </p>
        </div>

        <div className="w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
          <iframe
            src="https://agroturismo-xistos.amenitiz.io/pt/booking/room#DatesGuests-BE"
            title="Sistema de reservas Xistos Authentic Alentejo"
            loading="lazy"
            allow="payment"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full border-0 bg-white min-h-[1200px] md:min-h-[1000px]"
          />
        </div>

        <div className="mt-12 text-center bg-sand/30 p-8 rounded-2xl border border-border">
          <p className="text-olive-deep mb-4 font-medium">Problemas para visualizar o sistema de reservas?</p>
          <a
            href="https://agroturismo-xistos.amenitiz.io/pt/booking/room#DatesGuests-BE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-olive-deep px-6 py-3 text-sm font-medium text-cream hover:bg-ochre transition-colors"
          >
            Abrir reservas numa nova janela
          </a>
        </div>
      </div>
    </main>
  );
}
