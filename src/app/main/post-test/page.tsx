import PostTestProvider from "@/components/post-test/PostTestProvider";
import PostTestTable from "@/components/post-test/PostTestTable";
import { Card } from "antd";

const PostTest = () => {
  return (
    <Card>
      <PostTestProvider>
        <h1 className="text-3xl font-semibold mb-4">Pelajaran</h1>
        <PostTestTable />
      </PostTestProvider>
    </Card>
  );
};

export default PostTest;
