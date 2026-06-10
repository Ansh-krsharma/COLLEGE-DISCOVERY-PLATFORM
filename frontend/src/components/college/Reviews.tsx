import { Star } from "lucide-react";
import type { Review } from "../../types/college";

interface Props {
  reviews?: Review[];
}

export default function Reviews({ reviews = [] }: Props) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-2xl font-semibold text-slate-950 dark:text-white">
        Reviews
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.id || review.title} className="surface rounded-3xl p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="font-semibold text-slate-950 dark:text-white">
                {review.title}
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                <Star size={14} fill="currentColor" />
                {review.rating}
              </span>
            </div>

            <p className="leading-7 text-muted">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
