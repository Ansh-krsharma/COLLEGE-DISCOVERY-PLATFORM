import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Bookmark } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import api from "../services/api";
import CollegeCard from "../components/college/CollegeCard";
import { useSavedStore } from "../store/savedStore";
import type { College } from "../types/college";

export default function Saved() {
  const savedIds = useSavedStore((state) => state.savedIds);

  const { data } = useQuery({
    queryKey: ["colleges", "all"],
    queryFn: async () => {
      const res = await api.get("/colleges", {
        params: {
          limit: 100,
        },
      });

      return res.data.colleges as College[];
    },
  });

  const savedColleges = useMemo(
    () => data?.filter((college) => savedIds.includes(college.id)) || [],
    [data, savedIds]
  );

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
            Your shortlist
          </p>
          <h1 className="font-display text-4xl text-slate-950 dark:text-white md:text-6xl">
            Saved colleges
          </h1>
        </div>

        {savedColleges.length === 0 ? (
          <div className="surface rounded-3xl py-24 text-center">
            <Bookmark className="mx-auto mb-4 h-10 w-10 text-slate-400" />
            <p className="text-muted">You have not saved any colleges yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
