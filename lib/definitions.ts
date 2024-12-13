import {z} from "zod"

const passwordType = z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
    message: 'Contain at least one special character.',
    })
    .trim()

export const SignUpSchema = z.object({
    username: z.string().min(3, { message: "Must be >3 letters"} ).max(15, { message: "Must be <15 letters"} ).trim(),
    email: z.string().email( { message: "Must be a valid email"} ).trim(),
    password: passwordType,
    password2: passwordType,
})

SignUpSchema.refine((data) => data.password === data.password2, {message: "Passwords don't match", path: ["password2"]})

export type FormState =
  | {
      errors?: {
        username?: string[]
        email?: string[]
        password?: string[]
        password2?: string[]
      }
      message?: string
    }
  | undefined