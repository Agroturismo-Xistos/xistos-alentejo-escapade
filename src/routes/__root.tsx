import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Footer from "@/components/site/Footer";
import { BookingModalProvider } from "@/components/site/BookingModalProvider";
import { MetaPixelTracker } from "@/components/MetaPixelTracker";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Agroturismo Xistos | Turismo Rural no Alentejo" },
      { name: "description", content: "Descubra o Agroturismo Xistos na Herdade Monte da Ponte, Beja. Uma autêntica experiência de turismo rural no Alentejo. Sustentabilidade, natureza e tranquilidade." },
      { name: "keywords", content: "agroturismo xistos, turismo rural alentejo, herdade monte da ponte, agroturismo beja, turismo rural beja, xistos alentejo, escapadinha alentejo, alojamento alentejo, turismo sustentável, natureza, férias no alentejo" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "Agroturismo Xistos" },
      { property: "og:title", content: "Agroturismo Xistos | Turismo Rural no Alentejo" },
      { property: "og:description", content: "Descubra o Agroturismo Xistos na Herdade Monte da Ponte, Beja. Uma autêntica experiência de turismo rural no Alentejo." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.xistos.pt/" },
      { property: "og:site_name", content: "Agroturismo Xistos" },
      { property: "og:image", content: "https://www.xistos.pt/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Agroturismo Xistos | Turismo Rural no Alentejo" },
      { name: "twitter:description", content: "Descubra o Agroturismo Xistos na Herdade Monte da Ponte, Beja. Uma autêntica experiência de turismo rural no Alentejo." },
      { name: "twitter:image", content: "https://www.xistos.pt/og-image.jpg" },
      { name: "geo.region", content: "PT-11" },
      { name: "geo.placename", content: "Trindade, Beja, Alentejo" },
      { name: "theme-color", content: "#2d3b1a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "alternate", hrefLang: "pt", href: "https://www.xistos.pt/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.xistos.pt/?lang=en" },
      { rel: "alternate", hrefLang: "es", href: "https://www.xistos.pt/?lang=es" },
      { rel: "alternate", hrefLang: "fr", href: "https://www.xistos.pt/?lang=fr" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.xistos.pt/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        // Google Tag Manager
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NGSR5NW4');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGSR5NW4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1736146623585992&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BookingModalProvider>
          <MetaPixelTracker />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          <Footer />
        </BookingModalProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
