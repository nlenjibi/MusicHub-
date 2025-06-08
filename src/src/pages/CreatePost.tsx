import { Formik } from "formik";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { postApi } from "../api/Api";
import type { PostData } from '../types/index'
import * as Yup from 'yup'
import type { FormikHelpers } from "formik";



const CreatePost = () => {
    const validationSchema: Yup.Schema<PostData> = Yup.object().shape({
        title: Yup.string()
            .required('Title is required')
            .min(3, 'Title must be at least 3 characters long'),
        postText: Yup.string()
            .required('Post content is required')
            .min(10, 'Post content must be at least 10 characters long'),
        username: Yup.string()
            .required('Username is required')
            .min(3, 'Username must be at least 3 characters long'),
    });


    const onSubmit = (values: PostData, { setSubmitting }: FormikHelpers<PostData>) => {
        postApi.post("/", values)
            .then(() => {
            // console.log("Post created successfully:", response.data);
            // Reset form or redirect user
            setSubmitting(false);
            Object.keys(values).forEach(key => {
                values[key as keyof PostData] = '';
            });
            alert("Post created successfully!");
            })
            .catch((error) => {
            console.error("Error creating post:", error);
            })
            .finally(() => {
            setSubmitting(false);
            });
    };

    const initialValues: PostData = {
        title: '',
        postText: '',
        username: '',
          };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="mb-4 text-center">Create a New Post</h1>
          <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
              
            initialValues={initialValues}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit} className="p-4 border rounded bg-white">
                {/* Show all errors at the top */}
                {/* {Object.values(errors).length > 0 && (
                  <div className="mb-3">
                    {Object.entries(errors).map(([key, error]) =>
                      touched[key as keyof typeof touched] ? (
                        <div key={key} className="text-danger small">
                          {error}
                        </div>
                      ) : null
                    )}
                  </div>
                )} */}
                <Form.Group controlId="validationFormikTitle" className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    isInvalid={!!errors.title && touched.title}
                    placeholder="Post Title"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                <Form.Control.Feedback tooltip>
                  Looks good!
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormikPostText" className="mb-3">
                  <Form.Label>Post Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="postText"
                    value={values.postText}
                    onChange={handleChange}
                    isInvalid={!!errors.postText && touched.postText}
                    placeholder="Post Content"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.postText}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationFormikUsername" className="mb-4">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username && touched.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <div className="d-grid">
                  <Button type="submit" disabled={isSubmitting}>
                    Create Post
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}

export default CreatePost

/**<div className='createPostpage'>
        <h1>Create a New Post</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <label htmlFor="postTitle">Post Title</label>
                <ErrorMessage name='title' component='div' className='error'/>
                <Field id="postTitle" name="title" placeholder='Post Title'/>
                <label htmlFor="postContent">Post Content</label>
                <ErrorMessage name='postText' component='div' className='error'/>
                <Field id="postText" name="postText" placeholder='Post Content'/>
                <label htmlFor="postAuthor">Post Author</label>
                <ErrorMessage name='username' component='div' className='error'/>
                <Field id="postAuthor" name="username" placeholder='Post Author'/>
                <button type="submit">Create Post</button>
               
            </Form>
        </Formik>
    </div> **/

















