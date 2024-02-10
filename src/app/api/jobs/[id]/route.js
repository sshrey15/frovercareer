import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    const job = await prisma.job.findUnique({
      where: { id },
    });
    return NextResponse.json({ message: "success", job });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "error", err: err.message });
  }
};

export const DELETE = async (req, { params }) => {
  const id = params.id;
  console.log(params);
  console.log("shrey");
  console.log(id);
  try {
    const job = await prisma.job.delete({
      where: { id },
    });
    return NextResponse.json({ message: "success", job });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "error", err: err.message });
  }
};
