import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import CollegeCard from "../components/college/CollegeCard";

export default function Colleges() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await api.get("/colleges");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-10 text-center">
        Loading colleges...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load colleges
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Colleges
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((college: any) => (
          <CollegeCard
            key={college.id}
            college={college}
          />
        ))}
      </div>
    </div>
  );
}