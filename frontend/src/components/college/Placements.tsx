import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  average: number;
  highest: number;
}

export default function Placements({ average, highest }: Props) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-2xl font-semibold text-slate-950 dark:text-white">
        Placements
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="surface rounded-3xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Average package
          </h3>

          <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            {formatCurrency(average)}
          </p>
        </div>

        <div className="surface rounded-3xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Highest package
          </h3>

          <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            {formatCurrency(highest)}
          </p>
        </div>
      </div>
    </section>
  );
}
