import { useCallback, useEffect, useRef, useState } from "react";

import mobileVideo from "@/assets/1.Reels_LongaDuracao.mp4";
import desktopVideo from "@/assets/2.Filme_TurismoLongaDuracao.mp4";
import { useT } from "@/i18n/LanguageContext";

const MOBILE_BREAKPOINT = 768;

export default function Hero() {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  const [videoSrc, setVideoSrc] = useState(() => {
    if (typeof window === "undefined") return desktopVideo;

    return window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
    ).matches
      ? mobileVideo
      : desktopVideo;
  });

  const startVideo = useCallback(async () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    try {
      await video.play();
    } catch (error) {
      console.warn("Autoplay bloqueado ou vídeo ainda não carregado:", error);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`,
    );

    const handleChange = (event: MediaQueryListEvent) => {
      setIsVideoPlaying(false);
      setHasVideoError(false);
      setVideoSrc(event.matches ? mobileVideo : desktopVideo);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    setIsVideoPlaying(false);
    setHasVideoError(false);

    video.muted = true;
    video.defaultMuted = true;
    video.load();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void startVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const timeoutId = window.setTimeout(() => {
      void startVideo();
    }, 150);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, [videoSrc, startVideo]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bark"
    >
      <video
        key={videoSrc}
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={hero}
        controls={false}
        disablePictureInPicture
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isVideoPlaying ? "opacity-100" : "opacity-0"
        }`}
        onLoadedMetadata={() => void startVideo()}
        onLoadedData={() => void startVideo()}
        onCanPlay={() => void startVideo()}
        onPlaying={() => setIsVideoPlaying(true)}
        onWaiting={() => setIsVideoPlaying(false)}
        onStalled={() => setIsVideoPlaying(false)}
        onError={() => {
          setHasVideoError(true);
          setIsVideoPlaying(false);
        }}
      />

      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isVideoPlaying ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${hero})` }}
      />

      {!isVideoPlaying && !hasVideoError && (
        <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-cream">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />

            <span className="text-xs uppercase tracking-[0.25em]">
              A carregar
            </span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 z-[3] bg-bark/50" />

      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-bark/40 via-bark/30 to-bark/70" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center text-cream md:px-12">
        <span className="reveal inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ochre-soft">
          <span className="h-px w-10 bg-ochre-soft" />

          {t.hero.eyebrow}

          <span className="h-px w-10 bg-ochre-soft" />
        </span>

        <h1 className="reveal-slow mt-8 text-balance font-display text-[clamp(3.5rem,11vw,11rem)] font-light leading-[0.9] tracking-[-0.04em]">
          {t.hero.titleA}{" "}
          <em className="italic text-ochre-soft">{t.hero.titleB}</em>
          <span className="text-ochre-soft">!</span>
        </h1>
      </div>
    </section>
  );
}