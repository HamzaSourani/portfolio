import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
export async function POST(req: NextRequest, res: NextResponse) {
  const { email, subject, text } = await req.json();
  if (email && subject && text) {
    try {
      const info = await transport.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject,
        text,
        html: `<h1>${email}</h1> <br/> <p>${text}</p>`,
      });
      console.log(info);
      return NextResponse.json(req.body);
    } catch (error) {
      return NextResponse.json(error);
    }
  } else {
    return NextResponse.json(
      { message: "bad request" },
      {
        status: 400,
      },
    );
  }
}
