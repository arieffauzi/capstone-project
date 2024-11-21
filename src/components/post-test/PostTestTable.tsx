'use client'
import { fetchDeleteSubject } from "@/lib/api/subject/fetchDeleteSubject";
import { fetchSubjectList, Subject } from "@/lib/api/subject/fetchSubjectList";
import { fetchUpdateSubject } from "@/lib/api/subject/fetchUpdateSubject";
import { Flex, Button, Popconfirm, Table, PopconfirmProps } from "antd";
import { SearchProps } from "antd/es/input";
import { useState } from "react";
import { useQuery } from "react-query";

const PostTestTable = () => {
  const [modal, setModal] = useState(false);
  const [record, setRecord] = useState<Subject>();
  const [filter, setFilter] = useState({
    page: 1,
    size: 10,
    name: "",
  });

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
          {/* <Button
            type="link"
            danger
            onClick={() => {
              handleDelete(record.id);
            }}
          >
            Delete
          </Button> */}
          <Popconfirm
            title="Delete the subject"
            description="Are you sure to delete this subject?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="link">
              Delete
            </Button>
          </Popconfirm>
        </Flex>
      ),
    },
  ];

  const { data, refetch } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["fetchSubjectListQuery", filter],
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

  const handleSubmitEdit = async (values: any) => {
    const result = await fetchUpdateSubject(record?.id ?? 0, values);

    if (result.statusCode == 200) {
      refetch();
      setModal(false);
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async (id: number) => {
    const result = await fetchDeleteSubject(id);

    if (result.statusCode == 200) {
      refetch();
    } else {
      alert(result.message);
    }
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
  };

  console.log("data", data);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <Table
      columns={columns}
      dataSource={data?.data?.map((item, index) => {
        return { ...item, key: index };
      })}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50"],
        onChange(page, size) {
          setFilter({ ...filter, page, size });
        },
      }}
    />
  );
};

export default PostTestTable;
