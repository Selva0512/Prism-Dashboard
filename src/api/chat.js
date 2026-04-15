// export async function sendMessage(message, history = []) {
//   try {
//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "mistralai/mistral-7b-instruct",
//         messages: [
//           ...history,
//           { role: "user", content: message }
//         ],
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("API error");
//     }

//     const data = await response.json();

//     return data.choices?.[0]?.message?.content || "No response";

//   } catch (error) {
//     console.error("Chat error:", error);
//     return "Something went wrong.";
//   }
// }