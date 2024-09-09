import crypto from "crypto";
import { testApi } from "./paymentApi";

export function verifyChargilySignature(req: any) {
  const secret = testApi; // Secret key provided by Chargily
  const signature = req.headers.get("chargily-signature"); // Signature sent by Chargily in the headers

  // Compute the signature using the same secret key and request body
  const computedSignature = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(req.body)) // Use the request body to compute the hash
    .digest("hex");

  // Compare the computed signature with the signature sent by Chargily
  return signature === computedSignature;
}
