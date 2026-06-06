interface Review {
  id: string;

  title: string;

  comment: string;

  rating: number;
}

interface Props {
  reviews: Review[];
}

export default function Reviews({
  reviews,
}: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-3">
        Reviews
      </h2>

      <div className="space-y-4">
        {reviews?.map(
          (review) => (
            <div
              key={review.id}
              className="bg-white shadow rounded-xl p-5"
            >
              <h3 className="font-bold">
                {review.title}
              </h3>

              <p className="text-yellow-500">
                ⭐
                {review.rating}
              </p>

              <p className="mt-2">
                {review.comment}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}