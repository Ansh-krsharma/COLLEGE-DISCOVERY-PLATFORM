import {
  useInfiniteQuery,
} from "@tanstack/react-query";

import api from "../services/api";

export default function useInfiniteColleges(
  search: string,
  location: string,
  rating: string
) {
  return useInfiniteQuery({
    queryKey: [
      "colleges",
      search,
      location,
      rating,
    ],

    queryFn: async ({
      pageParam = 1,
    }) => {
      const res =
        await api.get(
          "/colleges",
          {
            params: {
              page:
                pageParam,

              search,

              location,

              rating,
            },
          }
        );

      return res.data;
    },

    initialPageParam: 1,

    getNextPageParam:
      (lastPage) =>
        lastPage.nextPage,
  });
}