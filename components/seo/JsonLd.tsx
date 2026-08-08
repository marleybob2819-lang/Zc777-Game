import { JsonLdClient } from "./JsonLdClient";

/** Server wrapper — serializes schema to a string so the client island stays trivial. */
export function JsonLd({ data }: { data: object }) {
  return <JsonLdClient json={JSON.stringify(data).replace(/</g, "\\u003c")} />;
}
