import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState([]);

  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    latitude: Yup.number().required('Latitude is required').typeError("Must be a number"),
    longitude: Yup.number().required('Longitude is required').typeError("Must be a number"),
  });

  const handleAddProfile = (values) => {
    setProfiles([...profiles, { ...values, id: profiles.length + 1, location: [values.latitude, values.longitude] }]);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Formik
        initialValues={{ name: '', description: '', latitude: 0, longitude: 0 }}
        validationSchema={ProfileSchema}
        onSubmit={(values, { resetForm }) => {
          handleAddProfile(values);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <Field name="name" as={TextField} label="Name" fullWidth />
            <ErrorMessage name="name" component="div" />
            <Field name="description" as={TextField} label="Description" fullWidth />
            <ErrorMessage name="description" component="div" />
            <Field name="latitude" as={TextField} label="Latitude" fullWidth />
            <ErrorMessage name="latitude" component="div" />
            <Field name="longitude" as={TextField} label="Longitude" fullWidth />
            <ErrorMessage name="longitude" component="div" />
            <Button type="submit" variant="contained" color="primary">Add Profile</Button>
          </Form>
        )}
      </Formik>

      <h3>Profiles</h3>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>{profile.name} - {profile.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
