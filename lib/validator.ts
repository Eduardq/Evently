import * as z from 'zod'

 export const  eventFormSchema = z.object({
    title: z.string().min(3, 'Title must be atleast 3 caracters'),
    description: z.string().min(3, 'Description must be atleast 3 caracters').max(400, 'Description must be less than 400 caracters'),
    location: z.string().min(3, 'Location must be atleast 3 caracters').max(400,'Loaction must be under 400 caracters'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url:z.string().url()
  });