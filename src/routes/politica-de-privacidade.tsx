import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade · Agroturismo Xistos" },
      {
        name: "description",
        content: "Política de privacidade do Agroturismo Xistos. Saiba como protegemos os seus dados pessoais.",
      },
    ],
  }),
  component: PoliticaPrivacidadePage,
});

function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-36 md:pt-44 pb-20 px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-olive-deep mb-10">
          Política de Privacidade
        </h1>
        <div className="prose prose-lg max-w-none space-y-6 text-bark/80 leading-relaxed">
          <p>
            A Agroturismo Xistos está empenhada em proteger a privacidade e os dados pessoais dos seus clientes e visitantes. Esta política de privacidade descreve como recolhemos, utilizamos e protegemos as suas informações.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Recolha de Dados
          </h2>
          <p>
            Recolhemos dados pessoais apenas quando necessário para prestar os nossos serviços, como nome, contacto e informações de reserva. Estes dados são fornecidos voluntariamente pelo utilizador.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Utilização da Informação
          </h2>
          <p>
            Os dados recolhidos são utilizados exclusivamente para gerir reservas, comunicar com os clientes e melhorar a experiência de estadia. Não vendemos, alugamos ou partilhamos os seus dados com terceiros para fins comerciais.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Segurança
          </h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Os Seus Direitos
          </h2>
          <p>
            Tem o direito de aceder, retificar, eliminar ou limitar o tratamento dos seus dados pessoais. Para exercer estes direitos, contacte-nos através dos meios disponíveis no nosso website.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Alterações à Política
          </h2>
          <p>
            Reservamo-nos o direito de atualizar esta política de privacidade a qualquer momento. As alterações serão publicadas nesta página.
          </p>
        </div>
      </main>
    </div>
  );
}
