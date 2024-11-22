// import { Button, Modal } from "antd";
// import { useState } from "react";
// import { fetchCreateSubject } from "@/lib/api/subject/fetchCreateSubject";
// import { postTestQueryClient } from "./PostTestProvider";

// const ButtonAddSubject = () => {
//   const [open, setOpen] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);

//   const showModal = () => {
//     setOpen(true);
//   };

//   const handleCancel = () => {
//     setOpen(false);
//   };

//   const handleOk = () => {
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setOpen(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

//   const handleSubmit = async (values: any) => {
//     const result = await fetchCreateSubject(values);

//     if (result.statusCode == 200) {
//       postTestQueryClient.invalidateQueries({
//         queryKey: ["fetchPostTestListQuery"],
//       });
//       setOpen(false);
//     } else {
//       alert(result.message);
//     }
//   };

//   return (
//     <div>
//       <Button type="primary" onClick={showModal}>
//         + Add New Subject
//       </Button>
//       <Modal
//         title="Add Subject"
//         open={open}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//       >
//         <SubjectAddModal submit={handleSubmit} />
//       </Modal>
//     </div>
//   );
// };

// export default ButtonAddSubject;
