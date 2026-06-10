import { Search } from "lucide-react";

interface Props {
  value: string;

  onChange: (
    value: string
  ) => void;
}

export default function CollegeSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search colleges, programs, or cities"
        className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-base shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-blue-950"
      />
    </div>
  );
}
