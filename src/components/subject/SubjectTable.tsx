"use client";
import { Button, Flex, GetProps, Table } from "antd";
import { Input } from "antd";
import Search from "antd/es/input/Search";
import ButtonAddModal from "./ButtonAddModal";
import { useQuery } from "react-query";
import { useState } from "react";
import { Subject, fetchSubjectList } from "@/lib/api/subject/fetchSubjectList";

type SearchProps = GetProps<typeof Input.Search>;

const SubjectTable = () => {
  const [modal, setModal] = useState(false);
  const [record, setRecord] = useState<Subject>();
  const [filter, setFilter] = useState({
    page: 1,
    size: 10,
    name: "",
  });

  const { data, refetch } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["fetchUserQuery", filter],
    queryFn: async () => {
      const { page, size, name } = filter;
      const request = {
        page,
        size,
        name,
      };

      const result = await fetchSubjectList(request);
      if (result.statusCode === 200) {
        return { data: result.data?.data, total: result.data?.total };
      }

      return { data: [], total: 0 };
    },
  });

  const handleEdit = (record: Subject) => {
    setRecord(record);
    setModal(true);
  };

  console.log("data", data);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

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
      title: "Post Test",
      dataIndex: "post_test",
      key: "post_test",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Flex>
          <Button
            type="link"
            onClick={() => {
              handleEdit(record);
            }}
          >
            Edit
          </Button>
          <Button
            type="link"
            danger
            onClick={() => {
              // handleDelete(record);
            }}
          >
            Delete
          </Button>
        </Flex>
      ),
    },
  ];

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
        <ButtonAddModal />
      </div>
      <Table
        columns={columns}
        dataSource={data?.data?.map((item, index) => {
          return { ...item, key: index };
        })}
      />
    </div>
  );
};

export default SubjectTable;
