import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Lightbulb } from "lucide-react";
import { fetchIdeas } from "@/api/ideas";
import type { Idea } from "@/types";
import IdeaCard from "@/components/IdeaCard";

const ideasQueryOptions = queryOptions({
  queryKey: ["ideas", { limit: 3 }],
  queryFn: () => fetchIdeas(3),
});

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(ideasQueryOptions),
});

function HomePage() {
  const { data: ideas } = useSuspenseQuery(ideasQueryOptions);

  return (
    <div className="flex flex-col items-start justify-between gap-10 p-6 text-blue-600 md:flex-row">
      <div className="flex flex-col items-start gap-4">
        <Lightbulb className="h-16 w-16 text-yellow-400" />
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Idea App
        </h1>
        <p className="max-w-xs text-gray-600">
          Share, explore, and build on the best ideas.
        </p>
      </div>

      <section className="flex-1">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Latest Ideas
        </h2>
        <div className="space-y-6">
          {ideas.map((idea: Idea) => (
            <IdeaCard key={idea._id} idea={idea} button={false} />
          ))}
        </div>

        <div className="mt-6">
          <a
            href="/ideas"
            className="inline-block w-full rounded-md bg-blue-600 px-5 py-2 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            View All Ideas
          </a>
        </div>
      </section>
    </div>
  );
}
