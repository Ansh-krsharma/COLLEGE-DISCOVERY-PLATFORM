import { GitCompareArrows } from "lucide-react";
import type { College } from "../../types/college";
import { useCompareStore } from "../../store/compareStore";

interface Props {
  college: College;
}

export default function CompareButton({
  college,
}: Props) {
  const addCollege =
    useCompareStore(
      (state) =>
        state.addCollege
    );
  const selected = useCompareStore((state) =>
    state.colleges.some((item) => item.id === college.id)
  );

  return (
    <button
      onClick={() =>
        addCollege(college)
      }
      className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
    >
      <GitCompareArrows size={16} />
      {selected ? "Added" : "Compare"}
    </button>
  );
}
