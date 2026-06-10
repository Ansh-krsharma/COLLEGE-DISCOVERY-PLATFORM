import { X } from "lucide-react";
import { useCompareStore } from "../../store/compareStore";
import { formatCurrency } from "../../utils/formatCurrency";
import type { College } from "../../types/college";

const rows = [
  {
    label: "Location",
    render: (college: College) => college.location || "India",
  },
  {
    label: "Stream",
    render: (college: College) => college.type || "College",
  },
  {
    label: "Rating",
    render: (college: College) => college.rating,
  },
  {
    label: "Annual fees",
    render: (college: College) => formatCurrency(college.fees),
  },
  {
    label: "Avg package",
    render: (college: College) => formatCurrency(college.averagePackage),
  },
  {
    label: "Highest package",
    render: (college: College) => formatCurrency(college.highestPackage),
  },
  {
    label: "Established",
    render: (college: College) => college.established || "Updated soon",
  },
];

export default function CompareTable() {
  const { colleges, removeCollege } = useCompareStore();

  if (colleges.length === 0) {
    return (
      <div className="surface rounded-3xl py-24 text-center">
        <p className="text-muted">
          Select up to three colleges from the browse page to compare them side
          by side.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <table className="w-full min-w-[720px] text-sm">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-800">
            <th className="w-48 p-5 text-left font-medium text-muted">Feature</th>
            {colleges.map((college) => (
              <th key={college.id} className="p-5 text-left align-top">
                <img
                  src={
                    college.imageUrl ||
                    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt={college.name}
                  className="mb-3 h-28 w-full rounded-2xl object-cover"
                />
                <div className="flex items-start justify-between gap-3">
                  <span className="text-base font-semibold text-slate-950 dark:text-white">
                    {college.name}
                  </span>
                  <button
                    onClick={() => removeCollege(college.id)}
                    className="rounded-full p-1 text-muted transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40"
                    aria-label={`Remove ${college.name}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-slate-100 last:border-0 dark:border-slate-800">
              <td className="p-5 font-medium text-muted">{row.label}</td>
              {colleges.map((college) => (
                <td key={college.id} className="p-5 text-slate-900 dark:text-slate-100">
                  {row.render(college)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
