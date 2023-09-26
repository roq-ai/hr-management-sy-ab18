import * as yup from 'yup';

export const employeeDataValidationSchema = yup.object().shape({
  address: yup.string().required(),
  phone_number: yup.string().required(),
  tax_id: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
