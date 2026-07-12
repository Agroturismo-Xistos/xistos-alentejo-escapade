import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { initMetaPixel, trackPageView } from "../lib/metaPixel";

export function MetaPixelTracker() {
  const routerState = useRouterState();
  const location = routerState.location;

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    // trackPageView is called on every route change including initial load
    trackPageView();
  }, [location.pathname, location.search]);

  return null;
}
