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
            Bem-vindo ao website da Agroturismo Xistos. Ao aceder e utilizar este site, concorda em cumprir e ficar vinculado aos seguintes termos e condições de utilização.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Reservas
          </h2>
          <p>
            As reservas estão sujeitas a disponibilidade e confirmação. Ao efetuar uma reserva, o cliente compromete-se a fornecer informações verdadeiras e completas. A Agroturismo Xistos reserva-se o direito de cancelar reservas em caso de informações incorretas ou suspeitas de fraude.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Cancelamentos
          </h2>
          <p>
            As políticas de cancelamento e reembolso variam de acordo com a antecedência do cancelamento e o tipo de reserva. Os termos específicos serão comunicados no momento da reserva.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Comportamento no Alojamento
          </h2>
          <p>
            Os hóspedes devem respeitar as regras da casa e a tranquilidade dos restantes hóspedes e vizinhos. É proibido fumar no interior das acomodações e o silêncio deve ser respeitado durante o período noturno.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Responsabilidade
          </h2>
          <p>
            A Agroturismo Xistos não se responsabiliza por perdas, danos ou lesões ocorridos durante a estadia, exceto quando resultem de negligência comprovada da nossa parte.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo deste website, incluindo textos, imagens e logótipos, é propriedade da Agroturismo Xistos e está protegido por direitos de autor. A reprodução sem autorização prévia é proibida.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Alterações aos Termos
          </h2>
          <p>
            Podemos alterar estes termos e condições a qualquer momento. O utilizador deve consultar esta página regularmente para se manter atualizado.
          </p>
        </div>
      </main>
    </div>
  );
}
