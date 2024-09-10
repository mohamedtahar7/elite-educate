// app/api/chargily-webhook/route.js

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { verifyChargilySignature } from "@/lib/verifyChargilySignarute"; // Your helper function for signature verification
import { subscribeUser } from "@/actions/adminActions";

export async function POST(req: any) {
  const chargilyData = await req.json();
  const { userId } = auth();
  // Verify the signature
  if (!verifyChargilySignature(req)) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
  }

  // Check if the payment was successful
  if (chargilyData.status === "success") {
    try {
      // Update the user's subscription status
      subscribeUser(userId);

      return NextResponse.json({ message: "Subscription updated" });
    } catch (error) {
      console.error("Error updating user subscription:", error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Payment was not successful" },
      { status: 400 }
    );
  }
}
