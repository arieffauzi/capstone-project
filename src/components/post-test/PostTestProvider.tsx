"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const postTestQueryClient = new QueryClient();

const PostTestProvider = (props: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={postTestQueryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default PostTestProvider;
