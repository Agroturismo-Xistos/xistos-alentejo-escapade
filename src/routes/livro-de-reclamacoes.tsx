import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";

export const Route = createFileRoute("/livro-de-reclamacoes")({
  head: () => ({
    meta: [
      { title: "Livro de Reclamações · Agroturismo Xistos" },
      {
        name: "description",
        content: "Informações sobre o Livro de Reclamações da Agroturismo Xistos.",
      },
    ],
  }),
  component: LivroReclamacoesPage,
});

function LivroReclamacoesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-36 md:pt-44 pb-20 px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-olive-deep mb-10">
          Livro de Reclamações
        </h1>
        <div className="prose prose-lg max-w-none space-y-6 text-bark/80 leading-relaxed">
          <p>
            A Agroturismo Xistos está empenhada em garantir a satisfação dos seus clientes. Se tiver alguma reclamação ou sugestão, pode utilizar o Livro de Reclamações Eletrónico ou contactar-nos diretamente.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Livro de Reclamações Eletrónico
          </h2>
          <p>
            Em conformidade com a legislação portuguesa, disponibilizamos o Livro de Reclamações Eletrónico através da plataforma oficial das Entidades de Resolução Alternativa de Litígios de Consumo.
          </p>
          <p>
            Para aceder ao Livro de Reclamações Eletrónico, visite: <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer" className="text-olive underline hover:text-ochre transition-colors">www.livroreclamacoes.pt</a>
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Contacto Direto
          </h2>
          <p>
            Antes de formalizar uma reclamação, encorajamos os nossos hóspedes a contactarem-nos diretamente. Muitas vezes, conseguimos resolver rapidamente qualquer situação e garantir a sua total satisfação.
          </p>
          <p>
            Email: <a href="mailto:info@agroturismoxistos.pt" className="text-olive underline hover:text-ochre transition-colors">info@agroturismoxistos.pt</a>
          </p>
          <p>
            Telefone: <a href="tel:+351964814928" className="text-olive underline hover:text-ochre transition-colors">+351 964 814 928</a>
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Informação Legal
          </h2>
          <p>
            <strong>Número do RNET:</strong> 5611
          </p>
          <p>
            A Agroturismo Xistos está registada como estabelecimento de turismo no Registo Nacional de Entidades Turísticas (RNET).
          </p>
        </div>
      </main>
    </div>
  );
}
