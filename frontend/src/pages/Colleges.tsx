import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/layout/Navbar";
import useInfiniteColleges from "../hooks/useInfiniteColleges";
import CollegeCard from "../components/college/CollegeCard";
import CollegeSearch from "../components/college/CollegeSearch";
import CollegeFilter from "../components/college/CollegeFilter";
import CollegeSkeleton from "../components/college/CollegeSkeleton";
import useDebounce from "../hooks/useDebounce";
import type { College } from "../types/college";

export default function Colleges() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const debouncedSearch = useDebounce(search);

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteColleges(debouncedSearch, location, type, rating);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const colleges = useMemo(
    () =>
      data?.pages.flatMap(
        (page) => (page as { colleges: College[] }).colleges
      ) || [],
    [data]
  );

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
            Find your fit
          </p>
          <h1 className="font-display text-4xl text-slate-950 dark:text-white md:text-6xl">
            Colleges
          </h1>
          <p className="mt-3 max-w-2xl text-muted">
            Browse programs, locations, fees, ratings, and placement outcomes in
            one focused view.
          </p>
        </div>

        <CollegeSearch value={search} onChange={setSearch} />

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          <CollegeFilter
            location={location}
            type={type}
            rating={rating}
            setLocation={setLocation}
            setType={setType}
            setRating={setRating}
          />

          <section>
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {[...Array(6)].map((_, index) => (
                  <CollegeSkeleton key={index} />
                ))}
              </div>
            ) : colleges.length ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {colleges.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>
            ) : (
              <div className="surface rounded-3xl py-20 text-center">
                <p className="text-muted">No colleges match these filters.</p>
              </div>
            )}

            <div ref={ref} className="flex h-24 items-center justify-center text-sm text-muted">
              {isFetchingNextPage
                ? "Loading more colleges..."
                : hasNextPage
                  ? "Scroll for more"
                  : "End of results"}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
