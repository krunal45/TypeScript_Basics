// ### 🧠 **Question:**

// You're building a resilient post submission system. Sometimes the network might fail,
// so you want to retry the POST request up to **3 times** before giving up.

// Write a TypeScript function called `createPostWithRetry` that:

// - Accepts a `Post` object (`title`, `body`, `userId`).
// - Tries to send a POST request to `https://jsonplaceholder.typicode.com/posts`.
// - If the request fails (network error or non-OK response), it retries up to **3 times**.
// - Logs `"Post created"` with the response JSON if successful.
// - Logs `"Failed to create post after 3 attempts"` if all retries fail.

// ---
import { jsonplaceholderUrl } from "./urlTypes.ts";

type Post = {
  title: string;
  body: string;
  userId: number;
};

async function createPostWithRetry(post: Post) {
  for (let index = 0; index < 3; index++) {
    try {
      const response = await fetch(jsonplaceholderUrl + "/posts12", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status}: ${response.statusText}`
        );
      }

      const data = await (response.json());
      console.log(`Created post `,data);
    } catch (error) {
      if (index < 2) {
        console.warn(`Warn: Attempting for ${index + 1} time! `);
      } else {
        console.error(error);
      }
    }
  }
}

const post: Post = {
  title: "POST 1",
  body: "This is POST 1",
  userId: 1,
};
await createPostWithRetry(post);
