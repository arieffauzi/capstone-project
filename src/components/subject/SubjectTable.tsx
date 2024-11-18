"use client";
import { Button, GetProps, Table } from "antd";
import { Input } from "antd";
// import { SearchProps } from "antd/es/input";
import Search from "antd/es/input/Search";

// const { Search } = Input;

type SearchProps = GetProps<typeof Input.Search>;

const columns = [
  {
    title: "Subject",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Lesson",
    dataIndex: "lesson",
    key: "lesson",
  },
  {
    title: "Question",
    dataIndex: "question",
    key: "question",
  },
];

const SubjectTable = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/4 mb-6">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            width={25}
          />
        </div>
        <Button
          type="primary"
          htmlType="button"
          onClick={() => console.log("first")}
        >
          + Add New Subject
        </Button>
      </div>
      <Table columns={columns} />
    </div>
  );
};

export default SubjectTable;
