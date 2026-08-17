import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Unlived Life — A Runner in Seven Phases" },
      {
        name: "description",
        content:
          "An endless runner through seven phases of a life: approval, belonging, the system, responsibility, irrelevance, the body, and the last breath.",
      },
      { property: "og:title", content: "The Unlived Life" },
      {
        property: "og:description",
        content: "Run through seven phases of a life and gather the moments of presence you can.",
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
      <h1 className="sr-only">The Unlived Life</h1>
      <iframe
        src="/runner.html"
        title="The Unlived Life"
        className="h-full w-full border-0"
      />
    </main>
  );
}
