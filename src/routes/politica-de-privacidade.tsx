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
      <Navbar alwaysDark />
      <main className="pt-36 md:pt-44 pb-20 px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-olive-deep mb-10">
          Política de Privacidade
        </h1>
        <div className="prose prose-lg max-w-none space-y-6 text-bark/80 leading-relaxed">
          <p>
            O Agro Turismo Xistos compromete-se a assumir e respeitar a Política de Privacidade e Segurança dos dados pessoais dos seus clientes.
          </p>

          <p>
            Os dados recolhidos pelo Agro Turismo Xistos têm como objetivo único dar resposta ao sistema de reservas e de faturação. As informações fornecidas pelos clientes destinam-se exclusivamente à prestação de um serviço, de acordo com as necessidades apresentadas pelo cliente.
          </p>

          <p>
            Toda a informação necessária para o sistema de pagamento encontra-se protegida e encriptada.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Recolha de Dados e Navegação no Website
          </h2>
          <p>
            O Website do Agro Turismo Xistos não recolhe automaticamente informação pessoal dos utilizadores que não se encontrem registados, permitindo assim uma navegação anónima por parte dos visitantes.
          </p>

          <p>
            A recolha de informações através de cookies permite a utilização do Website e tem como finalidade analisar o seu desempenho. Através dos cookies, o Agro Turismo Xistos pretende contabilizar o número de visitas ao Website e compreender a sua utilização.
          </p>

          <p>
            Neste processo, o cliente não é identificado, nem a sua informação pessoal é guardada ou recolhida.
          </p>

          <p>
            Os utilizadores podem controlar a utilização dos cookies através das definições do seu browser.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Aceitação das Condições de Utilização
          </h2>
          <p>
            Ao aceder ao Website do Agro Turismo Xistos, o utilizador declara ter lido e compreendido os termos acima referidos, comprometendo-se a cumprir todas as regras aplicáveis de acordo com a legislação em vigor.
          </p>

          <p>
            O acesso ao Website implica a aceitação das presentes condições de utilização.
          </p>

          <p>
            Caso o utilizador não concorde com as condições referidas, agradecemos que não aceda ao Website.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Direitos de Autor e Propriedade dos Conteúdos
          </h2>
          <p>
            O Agro Turismo Xistos detém a propriedade exclusiva de todos os conteúdos apresentados no Website, incluindo imagens, filmes e textos, nos termos do Código do Direito de Autor.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Contacto
          </h2>
          <p>
            O Agro Turismo Xistos encontra-se disponível para o esclarecimento de qualquer dúvida relacionada com esta política.
          </p>

          <p>
            Para mais informações, contacte-nos através do email: geral@xistos.pt
          </p>
        </div>
      </main>
    </div>
  );
}
