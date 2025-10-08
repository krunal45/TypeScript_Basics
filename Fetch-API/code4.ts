// ### 🧠 **Question:**

// You're building a blog post submission feature using the placeholder API.

// Write a TypeScript function called `createPost` that:

// - Accepts an object with `title: string`, `body: string`, and `userId: number`.
// - Sends this data as a POST request to `https://jsonplaceholder.typicode.com/posts`.
// - Logs the response JSON to the console if the request is successful.
// - Logs `"Error creating post"` if the request fails.
import { jsonplaceholderUrl } from "./urlTypes.ts";

type Post = {
  title: string;
  body: string;
  userId: number;
};

async function createPost(post: Post) {
    try {
        const response = await fetch(jsonplaceholderUrl + "/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`Http Error: ${response.status}`);
          }

        const data = await response.json();
        console.log('Post Created: ',data);  
        
    } catch (error) {
        console.error('Error Creating Post:',error);
    }
}

const post = {
  title: "Post 1",
  body: "This is my test Post",
  userId: 1,
};

await createPost(post);