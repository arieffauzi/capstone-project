"use client";
import {
  Button,
  Flex,
  GetProps,
  Modal,
  Popconfirm,
  PopconfirmProps,
  Table,
} from "antd";
import { Input } from "antd";
import Search from "antd/es/input/Search";
import ButtonAddModal from "./ButtonAddModal";
import { useQuery } from "react-query";
import { useState } from "react";
import { Subject, fetchSubjectList } from "@/lib/api/subject/fetchSubjectList";
import SubjectAddModal from "./SubjectAddModal";
import { fetchUpdateSubject } from "@/lib/api/subject/fetchUpdateSubject";
import { fetchDeleteSubject } from "@/lib/api/subject/fetchDeleteSubject";

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
      <Modal
        title="Edit Subject"
        open={modal}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={() => setModal(false)}
      >
        <SubjectAddModal editRecord={record} submit={handleSubmitEdit} />
      </Modal>
    </div>
  );
};

export default SubjectTable;
