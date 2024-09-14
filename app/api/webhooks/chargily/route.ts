// app/api/webhooks/route.ts
import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { subscribeUser } from "@/actions/adminActions";
import crypto from "crypto";
import { testApi } from "@/lib/paymentApi";
export async function POST(request: NextRequest) {
  try {
    // const { userId } = auth();
    const user = await currentUser();
    // Extracting the 'signature' header from the request
    const signature = request.headers.get("signature");

    // Getting the raw payload from the request body
    const payload = await request.text(); // Read the raw text of the body

    // If there is no signature, respond with a 400 status
    if (!signature) {
      return NextResponse.json(
        { message: "Signature missing" },
        { status: 400 }
      );
    }

    // Calculate the signature
    const computedSignature = crypto
      .createHmac("sha256", testApi)
      .update(payload)
      .digest("hex");

    // If the calculated signature doesn't match the received signature, respond with a 403 status
    if (computedSignature !== signature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 403 }
      );
    }

    // Parse the JSON payload
    const event = JSON.parse(payload);

    // Switch based on the event type
    switch (event.type) {
      case "checkout.paid":
        const checkout = event.data;
        // Handle the successful payment
        subscribeUser(user?.id);
        break;
      case "checkout.failed":
        const failedCheckout = event.data;
        // Handle the failed payment
        break;
      default:
        // Handle other event types
        break;
    }

    // Respond with a 200 status to acknowledge the webhook
    return NextResponse.json({ message: "Webhook received" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
