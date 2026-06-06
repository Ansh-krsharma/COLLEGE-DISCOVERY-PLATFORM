import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import api from "../services/api";

import CollegeCard from "../components/college/CollegeCard";

import CollegeSearch from "../components/college/CollegeSearch";

import CollegeFilter from "../components/college/CollegeFilter";

import useDebounce from "../hooks/useDebounce";

export default function Colleges() {
  const [search, setSearch] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [rating, setRating] =
    useState("");

  const debouncedSearch =
    useDebounce(search);

  const { data, isLoading } =
    useQuery({
      queryKey: [
        "colleges",
        debouncedSearch,
        location,
        rating,
      ],

      queryFn: async () => {
        const res =
          await api.get(
            "/colleges",
            {
              params: {
                search:
                  debouncedSearch,
                location,
                rating,
              },
            }
          );

        return res.data;
      },
    });

  if (isLoading)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <CollegeSearch
        value={search}
        onChange={setSearch}
      />

      <div className="grid lg:grid-cols-4 gap-6 mt-6">
        <CollegeFilter
          location={location}
          rating={rating}
          setLocation={
            setLocation
          }
          setRating={setRating}
        />

        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-6">
            {data?.map(
              (college: any) => (
                <CollegeCard
                  key={
                    college.id
                  }
                  college={
                    college
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}