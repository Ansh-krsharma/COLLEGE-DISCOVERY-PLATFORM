import { useState, useEffect } from "react";
import useInfiniteColleges from "../hooks/useInfiniteColleges";
import { useInView } from "react-intersection-observer";
import CollegeCard from "../components/college/CollegeCard";
import CollegeSearch from "../components/college/CollegeSearch";
import CollegeFilter from "../components/college/CollegeFilter";
import CollegeSkeleton from "../components/college/CollegeSkeleton";
import useDebounce from "../hooks/useDebounce";

export default function Colleges() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");

  const debouncedSearch = useDebounce(search);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteColleges(debouncedSearch, location, rating);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {[...Array(6)].map((_, index) => (
          <CollegeSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <CollegeSearch value={search} onChange={setSearch} />

      <div className="grid lg:grid-cols-4 gap-6 mt-6">
        <CollegeFilter
          location={location}
          rating={rating}
          setLocation={setLocation}
          setRating={setRating}
        />

        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-6">
            {data?.pages.map((page: any) =>
              page.colleges.map((college: any) => (
                <CollegeCard key={college.id} college={college} />
              ))
            )}
          </div>
        </div>
      </div>

      <div ref={ref} className="h-20 flex items-center justify-center">
        {hasNextPage ? "Loading More..." : "No More Colleges"}
      </div>
    </div>
  );
}