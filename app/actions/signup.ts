import { SignUpSchema, FormState } from '@/lib/definitions';
// import { useRouter } from "next/router";
import connect from '@/lib/db';
// import bcrypt from 'bcrypt';
import User from "@/lib/models/user";


export const signUp = async (state: FormState, formData: FormData): Promise<FormState> => {
    // const router = useRouter();

    // Validate form fields
    const validatedFields = SignUpSchema.safeParse({
        username: formData.get('username'),
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

    // Connect to database
    await connect();

    // const hash = bcrypt.hash(validatedFields.data.password, 10)

    const newUSer = new User(validatedFields.data);
    // newUSer.password = hash;
    
    await newUSer.save();

    // router.push("/about");
}   
