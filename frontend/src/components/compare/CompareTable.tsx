import { useCompareStore } from "../../store/compareStore";

export default function CompareTable() {
  const {
    colleges,
    removeCollege,
  } = useCompareStore();

  if (colleges.length < 2) {
    return (
      <div className="text-center py-20">
        Select at least 2 colleges
        to compare.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-3">
              Feature
            </th>

            {colleges.map(
              (college) => (
                <th
                  key={
                    college.id
                  }
                  className="border p-3"
                >
                  <div>
                    {college.name}
                  </div>

                  <button
                    onClick={() =>
                      removeCollege(
                        college.id
                      )
                    }
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">
              Location
            </td>

            {colleges.map(
              (college) => (
                <td
                  key={
                    college.id
                  }
                  className="border p-3"
                >
                  {
                    college.location
                  }
                </td>
              )
            )}
          </tr>

          <tr>
            <td className="border p-3">
              Fees
            </td>

            {colleges.map(
              (college) => (
                <td
                  key={
                    college.id
                  }
                  className="border p-3"
                >
                  ₹
                  {college.fees.toLocaleString()}
                </td>
              )
            )}
          </tr>

          <tr>
            <td className="border p-3">
              Rating
            </td>

            {colleges.map(
              (college) => (
                <td
                  key={
                    college.id
                  }
                  className="border p-3"
                >
                  ⭐
                  {
                    college.rating
                  }
                </td>
              )
            )}
          </tr>

          <tr>
            <td className="border p-3">
              Avg Package
            </td>

            {colleges.map(
              (college) => (
                <td
                  key={
                    college.id
                  }
                  className="border p-3"
                >
                  ₹
                  {college.averagePackage.toLocaleString()}
                </td>
              )
            )}
          </tr>

          <tr>
            <td className="border p-3">
              Highest Package
            </td>

            {colleges.map(
              (college) => (
                <td
                  key={
                    college.id
                  }
                  className="border p-3"
                >
                  ₹
                  {college.highestPackage.toLocaleString()}
                </td>
              )
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}