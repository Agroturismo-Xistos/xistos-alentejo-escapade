import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import BookingSearchForm from "@/components/site/BookingSearchForm";
import { trackMetaEvent, trackBookingIntent } from "@/lib/metaPixel";
import { DEFAULT_BOOKING_URL } from "@/lib/amenitiz";

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
  useEffect(() => {
    trackMetaEvent("ViewContent", {
      content_name: "Página de reservas",
      content_category: "Alojamento",
      content_type: "destination"
    });
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col pt-32">
      <Navbar alwaysDark />

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl text-olive-deep mb-4">
            Reserve a sua estadia
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha as suas datas e clique em "Ver disponibilidade" para ser encaminhado diretamente para o nosso sistema seguro de reservas.
          </p>
        </div>

        {/* Formulário — abre a URL da Amenitiz directamente numa nova aba */}
        <div className="mb-12">
          <BookingSearchForm />
        </div>

        {/* Acesso direto sem datas */}
        <div className="text-center bg-sand/30 p-8 rounded-2xl border border-border">
          <p className="text-olive-deep mb-4 font-medium">Prefere explorar sem seleccionar datas?</p>
          <a
            href={DEFAULT_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingIntent("/reservas")}
            className="inline-flex items-center justify-center rounded-full bg-olive-deep px-6 py-3 text-sm font-medium text-cream hover:bg-ochre transition-colors"
          >
            Ver todas as disponibilidades
          </a>
        </div>
      </div>
    </main>
  );
}
