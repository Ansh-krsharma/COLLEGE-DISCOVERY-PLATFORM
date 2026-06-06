interface Props {
  average: number;

  highest: number;
}

export default function Placements({
  average,
  highest,
}: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-3">
        Placements
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold">
            Average Package
          </h3>

          <p>
            ₹
            {average.toLocaleString()}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold">
            Highest Package
          </h3>

          <p>
            ₹
            {highest.toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
}