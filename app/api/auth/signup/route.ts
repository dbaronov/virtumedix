import { NextApiRequest, NextApiResponse } from "next"


const signUpHandler = (req: NextApiRequest, res: NextApiResponse<{}>) => {
    if (req.method !== "POST") {
        res.status(400)
        return
    }
    // Validation of the input data
    // Password hashing
    // Saving the new user into mongo
    // res.status(400) if user exists
    // return with status 200
}

export default signUpHandler