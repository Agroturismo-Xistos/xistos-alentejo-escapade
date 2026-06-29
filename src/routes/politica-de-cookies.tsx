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
          <p>
            O website da Agroturismo Xistos utiliza cookies para melhorar a experiência de navegação dos seus utilizadores. Ao continuar a utilizar o nosso site, concorda com a utilização de cookies de acordo com esta política.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            O que são Cookies
          </h2>
          <p>
            Cookies são pequenos ficheiros de texto que um site coloca no seu dispositivo quando o visita. Permitem que o site se lembre das suas ações e preferências durante um período de tempo, para que não tenha de as reintroduzir sempre que voltar ao site.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Tipos de Cookies que Utilizamos
          </h2>
          <p>
            <strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do website, permitindo a navegação e a utilização das suas funcionalidades.
          </p>
          <p>
            <strong>Cookies de desempenho:</strong> Ajuda-nos a compreender como os visitantes interagem com o website, recolhendo informações de forma anónima.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Gestão de Cookies
          </h2>
          <p>
            Pode configurar o seu navegador para recusar todos os cookies ou para alertar quando um cookie está a ser enviado. No entanto, algumas funcionalidades do site podem não funcionar corretamente se os cookies estiverem desativados.
          </p>

          <h2 className="font-display text-2xl text-olive-deep mt-8 mb-4">
            Alterações à Política
          </h2>
          <p>
            Podemos atualizar esta política de cookies periodicamente. Recomendamos que consulte esta página regularmente para se manter informado.
          </p>
        </div>
      </main>
    </div>
  );
}
