import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lane Runner — 3-Lane Endless Runner Prototype" },
      {
        name: "description",
        content:
          "Canvas endless runner prototype: auto-run, lane switching, jumping, sliding and obstacle collisions.",
      },
      { property: "og:title", content: "Lane Runner — Endless Runner Prototype" },
      {
        property: "og:description",
        content: "Arrow keys or swipes to switch lanes, jump and slide past obstacles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-background">
      <h1 className="sr-only">Lane Runner endless runner prototype</h1>
      <iframe
        src="/runner.html"
        title="Lane Runner game"
        className="h-full w-full border-0"
      />
    </main>
  );
}
