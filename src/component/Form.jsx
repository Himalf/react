import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const schema = yup.object().shape({
  username: yup
    .string()
    .email("not a VALID EMAIL")
    .required("username is required"),
  password: yup
    .string()
    .min(5, "length should be more than 5")
    .required("passowrd  is required"),
  age: yup.string().required("age is required"),
});
const FormFields = [
  {
    name: "username",
    type: "text",
  },
  {
    name: "password",
    type: "password",
  },
  {
    name: "age",
    type: "number",
  },
];
const Forms = () => {
  return (
    <div>
      <div className="w-fit h-fit p-10 mx-auto border border-gray-200 shadow-lg  ">
        <Formik
          initialValues={{
            username: "",
            password: "",
            age: "",
          }}
          validationSchema={schema}
          onSubmit={val => {
            console.log(val);
            toast.success("La vayo");
            toast.error("vayana bey");
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {FormFields.map((val, i) => {
                  return (
                    <div className="flex flex-col gap-2" key={i}>
                      <label htmlFor={val.name}>{val.name}</label>
                      <Field
                        type={val.type}
                        placeholder={`enter user ${val.name}`}
                        name={val.name}
                        className="border border-black outline-none px-2"
                      />
                      <ErrorMessage
                        name={val.name}
                        component={"div"}
                        className="text-red-400"
                      />
                      <ToastContainer />
                    </div>
                  );
                })}

                <div>
                  <button
                    type="submit"
                    className="w-fit h-fit px-8 py-3
            hover:scale-110 delay-200 duration-1000 transition-all
            bg-green-500 text-white border-none rounded-md"
                  >
                    Login
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Forms;
