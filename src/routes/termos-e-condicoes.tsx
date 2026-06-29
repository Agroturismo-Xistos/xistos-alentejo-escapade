import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";

export const Route = createFileRoute("/termos-e-condicoes")({
  head: () => ({
    meta: [
      { title: "Termos e Condições · Agroturismo Xistos" },
      {
        name: "description",
        content: "Termos e condições de utilização e reserva do Agroturismo Xistos.",
      },
    ],
  }),
  component: TermosCondicoesPage,
});

function TermosCondicoesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-36 md:pt-44 pb-20 px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-olive-deep mb-10">
          Termos e Condições
        </h1>
        <div className="prose prose-lg max-w-none space-y-6 text-bark/80 leading-relaxed">
          <p>
            O Agro Turismo Xistos utiliza a informação recolhida única e exclusivamente para facilitar o processo de resposta a pedidos de informação submetidos pelos seus clientes.
          </p>
          <p>
            A informação recolhida é utilizada no processo de adequação da resposta comercial e no âmbito dos serviços prestados pelo Agro Turismo Xistos.
          </p>
          <p>
            Todos os dados são guardados de forma segura e confidencial, de acordo com as políticas e procedimentos internos de segurança e confidencialidade.
          </p>
          <p>
            O Agro Turismo Xistos não partilha os dados recolhidos com terceiros.
          </p>
        </div>
      </main>
    </div>
  );
}
