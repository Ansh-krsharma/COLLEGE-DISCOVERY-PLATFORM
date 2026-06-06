import { useQuery } from "@tanstack/react-query";

import api from "../services/api";

import CollegeCard from "../components/college/CollegeCard";

import { useSavedStore } from "../store/savedStore";

export default function Saved() {
  const savedIds =
    useSavedStore(
      (state) =>
        state.savedIds
    );

  const { data } =
    useQuery({
      queryKey: [
        "saved-colleges",
      ],

      queryFn: async () => {
        const res =
          await api.get(
            "/colleges"
          );

        return res.data;
      },
    });

  const savedColleges =
    data?.filter(
      (college: any) =>
        savedIds.includes(
          college.id
        )
    ) || [];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Saved Colleges
      </h1>

      {savedColleges.length ===
      0 ? (
        <p>
          No saved colleges.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedColleges.map(
            (
              college: any
            ) => (
              <CollegeCard
                key={
                  college.id
                }
                college={
                  college
                }
              />
            )
          )}
        </div>
      )}
    </div>
  );
}