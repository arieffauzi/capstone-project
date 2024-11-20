import { Button, Form, FormProps, Input, Radio } from "antd";
import { useState } from "react";

type FieldType = {
  name: string;
  lesson: string;
  post_test: string;
};

interface ISubjectAddModal {
  submit: (values: any) => void;
}

const SubjectAddModal = (props: ISubjectAddModal) => {
  const { submit } = props;
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("value", values);
    submit(values);
    // form.resetFields();
  };

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
              message: "Please fill subject name!",
            },
          ]}
        >
          <Input placeholder="Lesson" />
        </Form.Item>
        <Form.Item
          label="Post Test"
          name={"post_test"}
          rules={[
            {
              required: true,
              message: "Please fill subject name!",
            },
          ]}
        >
          <Input placeholder="Post Test" />
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
