import { SignUpSchema, FormState } from '@/lib/definitions';

export const signUp = (state: FormState, formData: FormData) => {
    // Validate form fields
    const validatedFields = SignUpSchema.safeParse({
        name: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        password2: formData.get('password2'),
    })
    
    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
        errors: validatedFields.error.flatten().fieldErrors,
        }
    }
}
