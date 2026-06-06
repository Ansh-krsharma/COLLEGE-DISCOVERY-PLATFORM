const { data, isLoading } = useQuery({
  queryKey: ["college", id],

  queryFn: async () => {
    const res = await api.get(
      `/colleges/${id}`
    );

    return res.data;
  },
});