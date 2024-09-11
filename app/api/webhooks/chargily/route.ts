// app/api/chargily-webhook/route.js

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { verifyChargilySignature } from "@/lib/verifyChargilySignarute"; // Your helper function for signature verification
import { subscribeUser } from "@/actions/adminActions";
import crypto from "crypto";
import { testApi } from "@/lib/paymentApi";
export async function POST(req: any, res: any) {
  const signature = req.get("signature");
  const { userId } = auth();
  const payload = JSON.stringify(req.body);
  if (!signature) {
    return res.sendStatus(400);
  }
  const computedSignature = crypto
    .createHmac("sha256", testApi)
    .update(payload)
    .digest("hex");

  if (computedSignature !== signature) {
    return res.sendStatus(403);
  }
  const event = req.body;

  switch (event.type) {
    case "checkout.paid":
      const checkout = event.data;
      // Handle the successful payment.
      subscribeUser(userId);
      break;
    case "checkout.failed":
      const failedCheckout = event.data;
      // Handle the failed payment.
      alert("Payment failed");
      break;
  }
  res.sendStatus(200);
  // // Check if the payment was successful
  // if (chargilyData.status === "success") {
  //   try {
  //     // Update the user's subscription status
  //     subscribeUser(userId);

  //     return NextResponse.json({ message: "Subscription updated" });
  //   } catch (error) {
  //     console.error("Error updating user subscription:", error);
  //     return NextResponse.json(
  //       { message: "Internal server error" },
  //       { status: 500 }
  //     );
  //   }
  // } else {
  //   return NextResponse.json(
  //     { message: "Payment was not successful" },
  //     { status: 400 }
  //   );
  // }
}
