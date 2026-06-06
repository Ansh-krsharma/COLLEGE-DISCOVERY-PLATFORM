interface Props {
  overview: string;
}

export default function Overview({
  overview,
}: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-3">
        Overview
      </h2>

      <div className="bg-white rounded-xl shadow p-6">
        {overview}
      </div>
    </section>
  );
}