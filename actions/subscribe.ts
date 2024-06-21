"use server";
import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

const actionClient = createSafeActionClient();

export const subscribe = actionClient
  .schema(z.string().email())
  .action(async ({ parsedInput }) => {
    try {
      // 2. Retrieve Mailchimp credentials from environment variables
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const API_SERVER = process.env.MAILCHIMP_API_SERVER;
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

      // 3. Construct Mailchimp API request URL
      const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: parsedInput,
          status: "subscribed",
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        // 4. Return error message if subscription fails

        if (body.title?.toLowerCase()?.includes("exists")) {
          return {
            status: 200,
            message: "You are already subscribed",
          };
        }

        return {
          status: res.status,
          message: body.title,
        };
      }

      return {
        status: 200,
        message: "Subscribed successfully",
      };
    } catch (error) {
      // 5. Return error message if subscription fails
      return {
        status: 500,
        message: "Internal server error",
      };
    }
  });
