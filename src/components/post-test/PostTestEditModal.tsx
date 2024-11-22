import { Button, Form, FormProps, Input, Radio } from "antd";
import { useEffect } from "react";
import StudentForm from "./StudentForm";

type FieldType = {
  name: string;
  lesson: string;
  post_test: string;
};

interface ISubjectAddModal {
  submit: (values: any) => void;
  editRecord?: any;
}

const PostTestEditModal = (props: ISubjectAddModal) => {
  const { submit, editRecord } = props;
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    submit(values);
    form.resetFields();
  };

  useEffect(() => {
    form.setFieldsValue(editRecord);
  }, [editRecord]);

  return (
    <div>
      <StudentForm form={form} onFinish={onFinish} values={editRecord} />
    </div>
  );
};

export default PostTestEditModal;
