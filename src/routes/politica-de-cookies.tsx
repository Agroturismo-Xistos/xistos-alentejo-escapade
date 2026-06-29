import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies · Agroturismo Xistos" },
      {
        name: "description",
        content: "Política de cookies do Agroturismo Xistos. Saiba como utilizamos cookies no nosso website.",
      },
    ],
  }),
  component: PoliticaCookiesPage,
});

function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-36 md:pt-44 pb-20 px-6 md:px-10 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-olive-deep mb-10">
          Política de Cookies
        </h1>
        <div className="prose prose-lg max-w-none space-y-6 text-bark/80 leading-relaxed">
          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Que Tipo de Cookies Utilizamos
          </h2>
          <p>
            O Website do Agro Turismo Xistos utiliza cookies analíticos.
          </p>
          <p>
            Os cookies analíticos permitem analisar a forma como os utilizadores interagem com o Website, ajudando-nos a compreender o seu desempenho e a melhorar a experiência de navegação.
          </p>
          <p>
            Para este efeito, utilizamos o Google Analytics, uma ferramenta de análise da Google que ajuda os proprietários de websites e aplicações a compreender como os utilizadores se envolvem com as suas plataformas digitais.
          </p>
          <p>
            O Google Analytics utiliza um conjunto de cookies para recolher informações e estatísticas de utilização do Website, sem identificar pessoalmente os visitantes individuais perante a Google.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Como Utilizamos os Cookies
          </h2>
          <p>
            Utilizamos cookies por várias razões, nomeadamente para permitir o correto funcionamento do Website, melhorar a experiência de utilização e analisar o desempenho das suas páginas.
          </p>
          <p>
            Na maioria dos casos, não existe uma opção padrão para desativar cookies sem desativar por completo as funcionalidades e os recursos que estes adicionam ao Website.
          </p>
          <p>
            Por esse motivo, recomendamos que mantenha os cookies ativos caso não tenha a certeza se necessita ou não deles, uma vez que podem estar associados a funcionalidades utilizadas durante a navegação no nosso Website.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Desativação de Cookies
          </h2>
          <p>
            O utilizador pode impedir a configuração dos cookies ajustando as definições do seu navegador. Para saber como o fazer, deverá consultar a secção de ajuda do respetivo browser.
          </p>
          <p>
            No entanto, alertamos que a desativação dos cookies poderá afetar a funcionalidade deste Website, bem como de outros websites que utilize.
          </p>
          <p>
            A desativação dos cookies poderá impedir o correto funcionamento de algumas funcionalidades disponíveis no Website.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Mais Informações
          </h2>
          <p>
            Caso exista alguma questão relativamente à utilização de cookies ou caso necessite de mais informações, poderá entrar em contacto connosco através do seguinte email:
          </p>
          <p>
            <a href="mailto:geral@xistos.pt" className="text-olive-deep underline hover:text-bark transition-colors">geral@xistos.pt</a>
          </p>
        </div>
      </main>
    </div>
  );
}
