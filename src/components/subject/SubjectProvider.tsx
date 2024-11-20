"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const userQueryClient = new QueryClient();

const SubjectProvider = (props: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={userQueryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default SubjectProvider;
