"use server";

import { liveApi, testApi } from "@/lib/paymentApi";
import axios from "axios";

// export async function createProduct() {
//   const options = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${testApi}`,
//       "Content-Type": "application/json",
//     },
//     body: '{"name":"Elite Educate Subscription"}',
//   };

//   fetch("https://pay.chargily.net/test/api/v2/products", options)
//     .then((response) => response.json())
//     .then((response) => {
//       return response.id;
//     })
//     .catch((err) => console.error(err));
// }
// export async function createPrice() {
//   const product_id = await createProduct();
//   const options = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${testApi}`,
//       "Content-Type": "application/json",
//     },
//     body: `{"amount":"2900","currency":"dzd","product_id":"${product_id}"}`,
//   };

//   fetch("https://pay.chargily.net/test/api/v2/prices", options)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       return response.id;
//     })
//     .catch((err) => console.error(err));
// }
export async function createCheckout() {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${liveApi}`,
      "Content-Type": "application/json",
    },
    body: '{"amount":2900,"currency":"dzd","success_url":"https://localhost:3000/payment/success"}',
  };

  try {
    const response = await fetch(
      "https://pay.chargily.net/api/v2/checkouts",
      options
    );
    const data = await response.json();
    return data; // Return the parsed response
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error so it can be handled by the caller
  }
}
// export async function createTestCheckout() {
//   const options = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${testApi}`,
//       "Content-Type": "application/json",
//     },
//     body: '{"amount":2900,"currency":"dzd","success_url":"https://localhost:3000/payment/success"}',
//   };

//   try {
//     const response = await fetch(
//       "https://pay.chargily.net/test/api/v2/checkouts",
//       options
//     );
//     const data = await response.json();
//     return data; // Return the parsed response
//   } catch (err) {
//     console.error(err);
//     throw err; // Rethrow the error so it can be handled by the caller
//   }
// }
export async function createTestCheckout() {
  const options = {
    headers: {
      Authorization: `Bearer ${testApi}`,
      "Content-Type": "application/json",
    },
  };

  const data = {
    items: [{ price: "01j5js66kn8wka2heffsww23c2", quantity: 1 }],
    success_url: "http://localhost:3000/payment/success",
  };
  try {
    const response = await axios.post(
      "https://pay.chargily.net/test/api/v2/checkouts",
      data,
      options
    );
    return response.data; // Return the response data
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error so it can be handled by the caller
  }
}
