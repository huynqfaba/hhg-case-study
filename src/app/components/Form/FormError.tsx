import React from 'react';
import { ErrorMessage } from 'formik';
import { Span } from '../index';

interface Props {
  name: string;
}

export const FormFieldError = (props: Props) => {
  const { name } = props;
  return (
    <Span color="redPigment">
      <ErrorMessage name={name} />
    </Span>
  );
};
