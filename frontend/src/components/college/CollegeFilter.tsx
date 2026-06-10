import { locations, streams } from "../../utils/constants";

interface Props {
  location: string;
  type?: string;

  rating: string;

  setLocation: (
    value: string
  ) => void;

  setRating: (
    value: string
  ) => void;

  setType?: (
    value: string
  ) => void;
}

export default function CollegeFilter({
  location,
  type = "",
  rating,
  setLocation,
  setRating,
  setType,
}: Props) {
  return (
    <div className="surface rounded-3xl p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        Filters
      </h3>

      <select
        value={location}
        onChange={(e) =>
          setLocation(
            e.target.value
          )
        }
        className="mb-3 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
      >
        <option value="">
          All Locations
        </option>

        {locations.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {setType ? (
        <select
          value={type}
          onChange={(e) =>
            setType(
              e.target.value
            )
          }
          className="mb-3 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
        >
          <option value="">
            All Streams
          </option>

          {streams.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : null}

      <select
        value={rating}
        onChange={(e) =>
          setRating(
            e.target.value
          )
        }
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
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
