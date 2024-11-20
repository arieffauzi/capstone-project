import React from "react";
import { Card } from "antd";
import SubjectTable from "@/components/subject/SubjectTable";
import SubjectProvider from "@/components/subject/SubjectProvider";

const Subject = () => {
  return (
    <Card>
      <SubjectProvider>
        <h1 className="text-3xl font-semibold mb-4">Pelajaran</h1>
        <SubjectTable />
      </SubjectProvider>
    </Card>
  );
};

export default Subject;
