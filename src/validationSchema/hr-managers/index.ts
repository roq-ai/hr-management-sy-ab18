import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  hire_date: yup.date().required(),
  department: yup.string().required(),
  position: yup.string().required(),
  supervisor: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
