// import { Box, Button, Card, TextField, Typography } from "@mui/material";
// import { FormEventHandler } from "react";

// const Register = () => {
//   const handleSubmit = (e: FormEventHandler<HTMLFormElement>) => {
//     // e.preventDefault();
//     // Handle login logic here
//     console.log("Form submitted");
//   };

//   return (
//     <div className="flex justify-center items-center w-screen h-screen bg-primary">
//       <Box
//         sx={{
//           width: "60%",
//           height: "80%",
//           margin: "auto",
//           padding: 3,
//           borderRadius: 2,
//           boxShadow: 3,
//           backgroundColor: "#f9f9f9",
//           position: "absolute",
//           bottom: 0,
//         }}
//       >
//         <div className="w-full h-full flex flex-col justify-center items-center">
//           <Typography
//             variant="h3"
//             component="h1"
//             gutterBottom
//             sx={{ color: "black", textAlign: "center" }}
//           >
//             Register
//           </Typography>
//           <form className="flex flex-col gap-2">
//             <TextField
//               label="Username"
//               type="text"
//               variant="outlined"
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               margin="normal"
//               required
//             />
//             <TextField
//               label="User Type"
//               type="text"
//               variant="outlined"
//               margin="normal"
//               required
//             />
//             <Button type="submit" variant="contained" fullWidth color="primary">
//               Register
//             </Button>
//           </form>
//         </div>
//       </Box>
//     </div>
//   );
// };

// export default Register;
