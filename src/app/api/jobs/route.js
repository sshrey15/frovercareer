import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const GET = async (req, res) => {
    try {
      const jobs = await prisma.job.findMany();
      return NextResponse.json({ message: "success", jobs })
    } catch (err) {
        console.log("hello")
      console.error(err);  // Log the error
      return NextResponse.json({ message: "error", err: err.message })
    }
  };





export const POST = async (req) => {
    const { title, description, requirements, skills, qualifications } = await req.json();
    try {
      const job = await prisma.job.create({
        data: {
          title,
          description,
          requirements,
          skills,
          qualifications,
        }
      });
      return NextResponse.json({ message: "success", job })
    } catch (err) {
      console.error(err);  // Log the error
      return NextResponse.json({ message: "error", err: err.message })
    }
  };