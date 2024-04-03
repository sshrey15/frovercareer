import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import validator from "validator";



const prisma = new PrismaClient();

export const GET = async (req, res) =>{
    try {
        const applicant = await prisma.applicant.findMany();
        return NextResponse.json({ message: "success", applicant })
    } catch (err) {
        console.error(err);  // Log the error
        return NextResponse.json({ message: "error", err: err.message })
    }
}

export const POST = async (req) => {
    const {name, email, phone, skills, experience, education} = await req.json();
    try{

        if(!name || !email || !phone || !skills || !experience || !education){
            return NextResponse.json({message: "error", error: "All fields are required"});
        }

        if(!validator.isMobilePhone(phone)){
            return NextResponse.json({mesage: "error", error: "Invalid phone number "});
        }
     
    
        if(!validator.isEmail(email)){
            return NextResponse.json({message: "error", error: "Invalid email"});

        }
        const applicant = await prisma.applicant.create({
            data: {
                name,
                email,
                phone,
                skills,
                experience,
                education,
                resume: '',
                coverLetter: ''
            }
        });




        return NextResponse.json({ message: "success", applicant })
    }catch(err){
        console.error(err);  // Log the error
        return NextResponse.json({ message: "error", err: err.message })
    }
}
