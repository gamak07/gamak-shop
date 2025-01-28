import { useQuery } from "@tanstack/react-query";
import { getSaved } from "../../services/savedApi";

export const useSaved = (userId) => {
  const { isPending, data: saved, isError } = useQuery({
    queryKey: ["saved", userId],
    queryFn: () => getSaved(userId),
    enabled: !!userId, // Only fetch if userId exists
  });

  if (isError) console.error("Error fetching cart");
  return { isPending, saved };
};
