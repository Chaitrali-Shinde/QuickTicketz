import Ticket from "@/app/(model)/Ticket";
import { NextRequest } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundTicket = await Ticket.findOne({ _id: id });
  return NextResponse.json({ foundTicket }, { status: 200 });
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextRequest.json(
      { message: "Ticket Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextRequest.json({ message: "Error", error }, { status: 500 });
  }
}
