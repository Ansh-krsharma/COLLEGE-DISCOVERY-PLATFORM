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
    <input
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      placeholder="Search colleges..."
      className="w-full border rounded-lg p-3"
    />
  );
}