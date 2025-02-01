import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, email, contact, message, location, productName, category } = body;

    if (!name || !email || !contact || !message || !location || !productName || !category) {
      return NextResponse.json({ message: "Plese Fill all the fields" });
    }
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ssm132002@gmail.com"],
      subject: "Product Enquiry Form",
      html: `<strong>Name:- ${name} <br/> 
      Email:- ${email} <br/> 
      Contact No:- ${contact} <br/>
      Product Name:- ${productName} <br/>
      Category:- ${category} <br/>
      Subject:- ${location} <br/>
      Message:- ${message} <br/> </strong>`,
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return NextResponse.json(
      { message: "Enquiry sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
