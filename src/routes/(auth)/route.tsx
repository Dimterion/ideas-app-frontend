import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Lightbulb } from "lucide-react";

export const Route = createFileRoute("/(auth)")({
  component: AuthLayout,
});

function AuthLayout() {
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

      <section className="flex-1 text-gray-600">
        <Outlet />
      </section>
    </div>
  );
}
