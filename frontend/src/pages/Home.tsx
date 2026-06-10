import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight, Bookmark, GitCompareArrows, Search } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Search",
      text: "Find colleges by location and rating",
      Icon: Search,
    },
    {
      title: "Compare",
      text: "Review key metrics side by side",
      Icon: GitCompareArrows,
    },
    {
      title: "Save",
      text: "Keep your shortlist close",
      Icon: Bookmark,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-950/50" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
              College discovery
            </p>
            <h1 className="font-display text-5xl leading-tight text-slate-950 dark:text-white md:text-7xl">
              UniPath
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              Discover colleges, compare programs, and build a shortlist that
              matches your academic goals, budget, and career plans.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/colleges"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore colleges
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/compare"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                Compare options
              </Link>
            </div>
          </div>

          <div className="surface rounded-[2rem] p-4 shadow-2xl shadow-blue-950/10">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
              alt="University campus"
              className="h-80 w-full rounded-[1.5rem] object-cover"
            />
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {features.map(({ title, text, Icon }) => (
                <div key={title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                  <Icon className="mb-3 h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
