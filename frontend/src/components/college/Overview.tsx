interface Props {
  overview?: string;
}

export default function Overview({ overview }: Props) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-2xl font-semibold text-slate-950 dark:text-white">
        Overview
      </h2>

      <div className="surface rounded-3xl p-6 leading-7 text-muted">
        {overview || "Detailed information for this college is being updated."}
      </div>
    </section>
  );
}
