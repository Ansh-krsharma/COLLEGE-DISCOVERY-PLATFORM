interface Props {
  title: string;
}

export default function EmptyState({
  title,
}: Props) {
  return (
    <div className="text-center py-20 text-gray-500">
      {title}
    </div>
  );
}