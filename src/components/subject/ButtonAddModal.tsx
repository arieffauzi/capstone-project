import { Button, Modal } from "antd";
import SubjectAddModal from "./SubjectAddModal";
import { useState } from "react";
import { fetchCreateSubject } from "@/lib/api/subject/fetchCreateSubject";

const ButtonAddModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleSubmit = async (values: any) => {
    console.log('masuk')
    const result = await fetchCreateSubject(values);

    if(result.statusCode !== 200){
      alert(result.message)
    }
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        + Add New Lesson
      </Button>
      <Modal
        title="Add Subject"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <SubjectAddModal submit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default ButtonAddModal;
