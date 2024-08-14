import { useReactiveVar } from "@apollo/client";
import { meIdVar } from "@/providers/apollo/ApolloProvider";

export function useMeId() {
   const meId = useReactiveVar(meIdVar);
   return meId
}