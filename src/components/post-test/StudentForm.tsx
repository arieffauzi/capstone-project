import { Form, Button, Input } from "antd";
import form, { FormInstance } from "antd/es/form";
import { useEffect } from "react";

interface IStudentForm {
  values: any;
  form: FormInstance<any>;
  onFinish: (values: any) => void;
}

const StudentForm = (props: IStudentForm) => {
  const { form, onFinish, values } = props;

  useEffect(() => {
    form.setFieldsValue(values);
  }, [values]);

  console.log("values", values);

  return (
    <div>
      <div className="space-y-3 my-6">
        <p className="text-2xl font-bold">
          Mata Pelajaran: {values.subject.name}
        </p>
        <p className="font-semibold">Materi: {values.subject.lesson}</p>
        <div>
          <p>Soal:</p>
          <p>{values.subject.question}</p>
        </div>
      </div>

      <Form layout={"vertical"} form={form} onFinish={onFinish}>
        <Form.Item
          label="Answer"
          name={"answer"}
          rules={[
            {
              required: true,
              message: "Please enter your answer!",
            },
          ]}
        >
          <Input autoComplete="off" placeholder="Your answer" />
        </Form.Item>
        {/* <Form.Item
          label="Score"
          name={"score"}
          rules={[
            {
              required: true,
              message: "Please enter your score!",
            },
          ]}
        >
          <Input placeholder="your Score" autoComplete="off" />
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentForm;
