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

  return (
    <button
      onClick={() =>
        addCollege(college)
      }
      className="w-full mt-2 border rounded-lg p-2 hover:bg-gray-100"
    >
      Compare
    </button>
  );
}