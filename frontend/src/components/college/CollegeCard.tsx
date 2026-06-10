import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import type { College } from "../../types/college";
import CompareButton from "../compare/CompareButton";
import SaveButton from "../saved/SaveButton";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  college: College;
}

export default function CollegeCard({ college }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10 dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-48 overflow-hidden">
        <img
          src={
            college.imageUrl ||
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
          }
          alt={college.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur dark:bg-slate-950/80 dark:text-slate-100">
          {college.type || "College"}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h2 className="line-clamp-2 text-xl font-semibold leading-snug text-slate-950 dark:text-white">
              {college.name}
            </h2>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={15} />
              {college.location || "India"}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
            <Star size={14} fill="currentColor" />
            {college.rating}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-950">
            <p className="text-muted">Annual fees</p>
            <p className="mt-1 font-semibold text-slate-950 dark:text-white">
              {formatCurrency(college.fees)}
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-950">
            <p className="text-muted">Avg package</p>
            <p className="mt-1 font-semibold text-slate-950 dark:text-white">
              {formatCurrency(college.averagePackage)}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            to={`/colleges/${college.id}`}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            View
          </Link>
          <CompareButton college={college} />
          <SaveButton id={college.id} />
        </div>
      </div>
    </article>
  );
}
