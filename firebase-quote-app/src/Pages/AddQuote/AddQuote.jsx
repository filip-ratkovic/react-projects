import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {useNavigate } from "react-router-dom";
import { addQuote } from "../../Config/firebase";

const newQuoteSchema = yup.object({
  text: yup
    .string()
    .required("text je obavezno polje")
    .min(6, "text mora da ima najmanje 6 karaktera")
    .max(200, "text mora da ima najvise 200 karaktera"),
  author: yup
    .string()
    .required("Author je obavezno polje")
    .min(4, "Author mora da ima najmanje 6 karaktera")
    .max(50, "Author mora da ima najvise 50 karaktera"),
});

const AddQuote = () => {
  const navigate = useNavigate();

  const submitAddQuote = async (values) => {
    try {
      await addQuote(values);
      alert("Uspesno !")
      navigate("/")
    } catch(err) {
      console.error(err)
    }
  }
  return (
    <div className="add-quote-wrapper">
      <Formik
        initialValues={{
          text: "",
          author: "",
          likes: 0,
        }}
        validationSchema={newQuoteSchema}
        onSubmit={(values, actions) => {
          submitAddQuote(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <div>
              <p>Text</p>
              <input
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
              <p className="error-message">
                {errors.text && touched.text && errors.text}
              </p>
            </div>
            <div>
              <p>Author</p>
              <input
                type="text"
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              <p className="error-message">
                {errors.author &&
                  touched.author &&
                  errors.author}
              </p>
            </div>
          
            <button onClick={handleSubmit} type="button">
              Add quote
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddQuote;
