import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  name: yup.string().required(),
  freelancer_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
