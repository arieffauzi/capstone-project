"use client";
import {
  fetchPostTestList,
  PostTest,
} from "@/lib/api/post-test/fetchPostTestList";
import { fetchDeleteSubject } from "@/lib/api/subject/fetchDeleteSubject";
import { fetchSubjectList, Subject } from "@/lib/api/subject/fetchSubjectList";
import { fetchUpdateSubject } from "@/lib/api/subject/fetchUpdateSubject";
import {
  Flex,
  Button,
  Popconfirm,
  Table,
  PopconfirmProps,
  TableColumnsType,
  Modal,
} from "antd";
import { SearchProps } from "antd/es/input";
import { useState } from "react";
import { useQuery } from "react-query";
import PostTestEditModal from "./PostTestEditModal";

const PostTestTable = () => {
  const [modal, setModal] = useState(false);
  const [record, setRecord] = useState<Subject>();
  const [filter, setFilter] = useState({
    page: 1,
    size: 10,
    name: "",
  });

  const columns: TableColumnsType<PostTest> = [
    {
      title: "Subject",
      dataIndex: ["subject", "name"],
      key: "subject",
    },
    {
      title: "Assign To",
      dataIndex: ["assign_to", "name"],
      key: "lesson",
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Scored By",
      dataIndex: ["scored_by", "name"],
      key: "scored_by",
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
    queryKey: ["fetchPostTestQuery", filter],
    queryFn: async () => {
      const { page, size, name } = filter;
      const request = {
        page,
        size,
        name,
      };

      const result = await fetchPostTestList(request);
      if (result.statusCode === 200) {
        return result;
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

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div>
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
      <Modal
        title="Edit Post Test"
        open={modal}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={() => setModal(false)}
      >
        <PostTestEditModal editRecord={record} submit={handleSubmitEdit} />
      </Modal>
    </div>
  );
};

export default PostTestTable;
