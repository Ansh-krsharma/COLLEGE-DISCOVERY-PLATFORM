export default function CollegeDetailSkeleton() {
  return (
    <div className="animate-pulse p-6">
      <div className="h-10 bg-gray-200 rounded" />

      <div className="h-5 bg-gray-200 rounded mt-4" />

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="h-32 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded" />
      </div>
    </div>
  );
}