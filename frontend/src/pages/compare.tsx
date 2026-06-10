import Navbar from "../components/layout/Navbar";
import CompareTable from "../components/compare/CompareTable";

export default function Compare() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
            Decide smarter
          </p>
          <h1 className="font-display text-4xl text-slate-950 dark:text-white md:text-6xl">
            Compare colleges
          </h1>
        </div>

        <CompareTable />
      </main>
    </>
  );
}
