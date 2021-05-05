import React from 'react';
import { ErrorMessage } from 'formik';

interface Props {
  name: string;
}

export const FormFieldError = (props: Props) => {
  const { name } = props;
  return (
    <span style={{ color: '#c20e0e' }}>
      <ErrorMessage name={name} />
    </span>
  );
};
