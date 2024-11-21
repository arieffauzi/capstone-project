import { Button, Form, FormProps, Input, Radio } from "antd";
import { useEffect, useState } from "react";

type FieldType = {
  name: string;
  lesson: string;
  post_test: string;
};

interface ISubjectAddModal {
  submit: (values: any) => void;
  editRecord?: any
}

const SubjectAddModal = (props: ISubjectAddModal) => {
  const { submit, editRecord } = props;
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("value", values);
    submit(values);
    // form.resetFields();
  };

  useEffect(() => {
    form.setFieldsValue(editRecord)
  }, [editRecord])
  

  console.log('editRecord',editRecord)

  return (
    <div>
      <Form layout={"vertical"} form={form} onFinish={onFinish}>
        <Form.Item
          label="Subject Name"
          name={"name"}
          rules={[
            {
              required: true,
              message: "Please fill subject name!",
            },
          ]}
        >
          <Input placeholder="Subject Name" />
        </Form.Item>
        <Form.Item
          label="Lesson"
          name={"lesson"}
          rules={[
            {
              required: true,
              message: "Please fill lesson!",
            },
          ]}
        >
          <Input placeholder="Lesson" />
        </Form.Item>
        <Form.Item
          label="Question"
          name={"question"}
          rules={[
            {
              required: true,
              message: "Please fill question!",
            },
          ]}
        >
          <Input placeholder="Question" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SubjectAddModal;
