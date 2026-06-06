interface Props {
  location: string;

  rating: string;

  setLocation: (
    value: string
  ) => void;

  setRating: (
    value: string
  ) => void;
}

export default function CollegeFilter({
  location,
  rating,
  setLocation,
  setRating,
}: Props) {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="font-bold mb-3">
        Filters
      </h3>

      <select
        value={location}
        onChange={(e) =>
          setLocation(
            e.target.value
          )
        }
        className="border w-full p-2 mb-3"
      >
        <option value="">
          All Locations
        </option>

        <option value="Delhi">
          Delhi
        </option>

        <option value="Mumbai">
          Mumbai
        </option>

        <option value="Bangalore">
          Bangalore
        </option>
      </select>

      <select
        value={rating}
        onChange={(e) =>
          setRating(
            e.target.value
          )
        }
        className="border w-full p-2"
      >
        <option value="">
          All Ratings
        </option>

        <option value="4">
          4+
        </option>

        <option value="4.5">
          4.5+
        </option>
      </select>
    </div>
  );
}