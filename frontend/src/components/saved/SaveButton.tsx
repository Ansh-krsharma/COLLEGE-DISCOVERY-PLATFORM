import { Heart } from "lucide-react";
import toast from "react-hot-toast";
import { useSavedStore } from "../../store/savedStore";

interface Props {
  id: string;
}

export default function SaveButton({ id }: Props) {
  const toggleSaved = useSavedStore((state) => state.toggleSaved);
  const isSaved = useSavedStore((state) => state.isSaved(id));

  const handleClick = () => {
    toggleSaved(id);
    toast.success(isSaved ? "Removed from saved colleges" : "Added to saved colleges");
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition ${
        isSaved
          ? "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-900 dark:bg-rose-950/40"
          : "border-slate-200 text-slate-700 hover:border-rose-200 hover:text-rose-600 dark:border-slate-700 dark:text-slate-200"
      }`}
    >
      <Heart size={16} fill={isSaved ? "currentColor" : "none"} />
      {isSaved ? "Saved" : "Save"}
    </button>
  );
}
