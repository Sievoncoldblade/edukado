import { string, z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const onboardingSchema = z.object({
  first_name: z.string({ required_error: "First name is required", invalid_type_error: "Name must be a string" }).min(1, { message: "This field is required" }),
  middle_name: z.string({ invalid_type_error: "Name must be a string" }).optional(),
  last_name: z.string({ required_error: "Last name is required", invalid_type_error: "Name must be a string" }).min(1, { message: "This field is required" }),
  gender: z.string({ required_error: "Gender is required" }).min(1, { message: "This field is required" }),
  birth_date: z.date({ required_error: "Date of birth is required" }),
  grade_level: z.string({ required_error: "Grade level is required" }).min(1, { message: "This field is required" }),
  section: z.string({ required_error: "Section is required" }).min(1, { message: "This field is required" }),
});
export const settingsSchema = z.object({
  first_name: z.string({ required_error: "First name is required", invalid_type_error: "Name must be a string" }).min(1, { message: "This field is required" }),
  middle_name: z.string({ invalid_type_error: "Name must be a string" }).optional(),
  last_name: z.string({ required_error: "Last name is required", invalid_type_error: "Name must be a string" }).min(1, { message: "This field is required" }),
  gender: z.string({ required_error: "Gender is required" }).min(1, { message: "This field is required" }),
  birth_date: z.date({ required_error: "Date of birth is required" }),
  avatar_image: z
    .custom<File>((val) => val instanceof File, "Please upload a file")
    .refine((file) => file?.size <= MAX_FILE_SIZE, { message: `Max image size is 5MB.` })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), { message: "Only .jpg, .jpeg, and .png formats are supported." }),
  grade_level: z.string({ required_error: "Grade level is required" }).min(1, { message: "This field is required" }),
  section: z.string({ required_error: "Section is required" }).min(1, { message: "This field is required" }),
});

export type OnboardingSchemaType = z.infer<typeof onboardingSchema>;
export type SettingsSchemaType = z.infer<typeof settingsSchema>;
