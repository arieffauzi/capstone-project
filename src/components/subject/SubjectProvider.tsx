"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const subjectQueryClient = new QueryClient();

const SubjectProvider = (props: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={subjectQueryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default SubjectProvider;
