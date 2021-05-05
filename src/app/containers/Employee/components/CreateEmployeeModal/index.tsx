import React, { Dispatch } from 'react';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

import { CreateEmployee } from 'types/employee';
import { Button } from 'app/components';
import { actions } from '../../slice';
import { Modal, FormFieldError } from 'app/components';

interface Props {
  visible: boolean;
  handleClose: () => void;
}

interface FormFormikProps {
  dispatch: Dispatch<any>;
  handleClose: () => void;
}

interface FormProps extends FormikProps<CreateEmployee> {}

function CreateEmployeeForm(props: FormFormikProps & FormProps) {
  const {
    handleClose,
    handleChange,
    handleBlur,
    handleSubmit,
    dirty,
    isValid,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormControl
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormFieldError name="email" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormControl
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormFieldError name="name" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="position">Position</FormLabel>
        <FormControl
          type="text"
          id="position"
          name="position"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormFieldError name="position" />
      </FormGroup>

      <Button bg="primaryBlue" type="submit" disabled={!(dirty && isValid)}>
        Submit
      </Button>

      <Button
        type="button"
        bg="transparent"
        color="black"
        onClick={handleClose}
      >
        Cancel
      </Button>
    </form>
  );
}

const CreateEmployeeFormik = withFormik<FormFormikProps, CreateEmployee>({
  mapPropsToValues: () => ({
    email: '',
    name: '',
    position: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Must be a valid email')
      .required('Email required.'),
    name: Yup.string().required('Name required.'),
    position: Yup.string().required('Position required.'),
  }),
  handleSubmit: (values, { props }) => {
    const { dispatch } = props;
    dispatch(actions.createEmployee({ ...values }));
  },
})(CreateEmployeeForm);

export function CreateEmployeeModal(props: Props) {
  const dispatch = useDispatch();
  const { visible, handleClose } = props;

  return (
    <Modal
      title={'Create Employee'}
      visible={visible}
      width="450px"
      handleClose={handleClose}
      className={'modal-center'}
    >
      <CreateEmployeeFormik dispatch={dispatch} handleClose={handleClose} />
    </Modal>
  );
}
