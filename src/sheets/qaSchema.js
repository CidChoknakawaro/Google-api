import { z } from 'zod';


const Schema = z.object({
  contact: z.string(),
  question: z.string().min(1, { message: "Question is required"})
});

export default Schema