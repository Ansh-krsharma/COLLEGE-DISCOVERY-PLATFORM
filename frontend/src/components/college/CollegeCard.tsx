import { Link } from "react-router-dom";
import { College } from "../../types/college";

interface Props {
  college: College;
}

export default function CollegeCard({
  college,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold">
        {college.name}
      </h2>

      <p className="text-gray-600">
        {college.location}
      </p>

      <div className="mt-3 space-y-1">
        <p>
          Fees:
          ₹{college.fees.toLocaleString()}
        </p>

        <p>
          Rating:
          ⭐ {college.rating}
        </p>
      </div>

      <Link
        to={`/college/${college.id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}