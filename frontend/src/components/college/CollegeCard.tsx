import { Link } from "react-router-dom";

interface Props {
  college: any;
}

export default function CollegeCard({ college }: Props) {
  return (
    <Link
      to={`/college/${college.id}`}
      className="block bg-white rounded-xl shadow p-4 hover:shadow-lg"
    >
      <h2 className="text-xl font-bold">
        {college.name}
      </h2>

      <p>{college.location}</p>

      <p>Fees: ₹{college.fees}</p>

      <p>⭐ {college.rating}</p>
    </Link>
  );
}