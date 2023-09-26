import * as yup from 'yup';

export const systemAdministratorValidationSchema = yup.object().shape({
  hire_date: yup.date().required(),
  department: yup.string().required(),
  position: yup.string().required(),
  access_level: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
