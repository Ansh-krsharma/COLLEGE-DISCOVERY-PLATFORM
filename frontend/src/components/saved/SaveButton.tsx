import {Heart,} from "lucide-react";
import toast from "react-hot-toast";
import { useSavedStore } from "../../store/savedStore";

interface Props {
  id: string;
}

export default function SaveButton({
  id,
}: Props) {
  const toggleSaved =
    useSavedStore(
      (state) =>
        state.toggleSaved
    );
  
  const isSaved =
    useSavedStore(
      (state) =>
        state.isSaved(id)
    );

  const handleClick = () => {
    toggleSaved(id);
    if (isSaved) {
      toast.success("Removed from saved colleges");
    } else {
      toast.success("Added to saved colleges");
    }
  };

  return (
    <button onClick={handleClick} className="border rounded-lg p-2 w-full mt-2">
      <Heart fill={isSaved ? "red" : "none"} />
      <span className="ml-2">{isSaved ? "Saved" : "Save"}</span>
    </button>
  );
}