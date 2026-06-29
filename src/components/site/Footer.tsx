import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-olive-deep text-cream/80 border-t border-bark/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              to="/politica-de-privacidade"
              className="text-sm uppercase tracking-[0.15em] hover:text-ochre transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/politica-de-cookies"
              className="text-sm uppercase tracking-[0.15em] hover:text-ochre transition-colors"
            >
              Política de Cookies
            </Link>
            <Link
              to="/termos-e-condicoes"
              className="text-sm uppercase tracking-[0.15em] hover:text-ochre transition-colors"
            >
              Termos e Condições
            </Link>
            <a
              href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-[0.15em] hover:text-ochre transition-colors"
            >
              Livro de Reclamações
            </a>
          </nav>
          <div className="text-sm tracking-wide text-cream/60">
            Número do RNET: 5611
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-cream/10 text-center text-xs text-cream/40 tracking-wide">
          © {new Date().getFullYear()} Agroturismo Xistos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
