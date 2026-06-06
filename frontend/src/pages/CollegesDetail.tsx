import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function CollegeDetail() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["college", id],

    queryFn: async () => {
      const res = await api.get(
        `/colleges/${id}`
      );

      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold">
        {data.name}
      </h1>

      <p className="text-gray-500 mt-2">
        {data.location}
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold">
            Fees
          </h3>

          <p>
            ₹
            {data.fees.toLocaleString()}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold">
            Rating
          </h3>

          <p>
            ⭐ {data.rating}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold">
            Average Package
          </h3>

          <p>
            ₹
            {data.averagePackage.toLocaleString()}
          </p>
        </div>
      </div>

      <Overview
        overview={data.overview}
      />

      <Courses
        courses={data.courses}
      />

      <Placements
        average={
          data.averagePackage
        }
        highest={
          data.highestPackage
        }
      />

      <Reviews
        reviews={data.reviews}
      />
    </div>
  );
}