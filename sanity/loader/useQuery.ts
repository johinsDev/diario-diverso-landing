import { Product } from "@/types";
import * as queryStore from "@sanity/react-loader";
import {
  type QueryParams,
  type UseQueryOptionsDefinedInitial,
} from "@sanity/react-loader";
import { productsQuery } from "../lib/queries";

/**
 * Exports to be used in client-only or components that render both server and client
 */
export const useQuery = <
  QueryResponseResult = unknown,
  QueryResponseError = unknown,
>(
  query: string,
  params?: QueryParams,
  options?: UseQueryOptionsDefinedInitial<QueryResponseResult>
) => {
  const snapshot = queryStore.useQuery<QueryResponseResult, QueryResponseError>(
    query,
    params,
    options
  );

  // Always throw errors if there are any
  if (snapshot.error) {
    throw snapshot.error;
  }

  return snapshot;
};

export function useProducts(
  initial: queryStore.QueryResponseInitial<Product[]>
) {
  return useQuery<Product[]>(productsQuery, {}, { initial });
}
