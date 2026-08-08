"use client";

import { useEffect } from "react";

/**
 * Injects JSON-LD into document.head after mount.
 * Renders null on server and on the first client paint → no hydration mismatch.
 */
export function JsonLdClient({ json }: { json: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-jsonld", "1");
    script.text = json;
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [json]);

  return null;
}
