// import { useState } from "react";
// import { sendMessage } from "../api/chat";

// export default function ChatBot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", content: input };

//     const newMessages = [...messages, userMessage];
//     setMessages(newMessages);
//     setInput("");
//     setLoading(true);

//     const reply = await sendMessage(input, newMessages);

//     const botMessage = { role: "assistant", content: reply };

//     setMessages((prev) => [...prev, botMessage]);
//     setLoading(false);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.chatBox}>
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             style={{
//               ...styles.message,
//               alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
//               background: msg.role === "user" ? "#007bff" : "#eee",
//               color: msg.role === "user" ? "#fff" : "#000",
//             }}
//           >
//             {msg.content}
//           </div>
//         ))}

//         {loading && <div style={styles.typing}>Typing...</div>}
//       </div>

//       <div style={styles.inputArea}>
//         <input
//           style={styles.input}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button style={styles.button} onClick={handleSend}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     width: "350px",
//     margin: "20px auto",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "column",
//     height: "500px",
//   },
//   chatBox: {
//     flex: 1,
//     padding: "10px",
//     display: "flex",
//     flexDirection: "column",
//     overflowY: "auto",
//     gap: "8px",
//   },
//   message: {
//     padding: "8px 12px",
//     borderRadius: "10px",
//     maxWidth: "70%",
//   },
//   typing: {
//     fontStyle: "italic",
//     fontSize: "12px",
//   },
//   inputArea: {
//     display: "flex",
//     borderTop: "1px solid #ccc",
//   },
//   input: {
//     flex: 1,
//     padding: "10px",
//     border: "none",
//     outline: "none",
//   },
//   button: {
//     padding: "10px",
//     cursor: "pointer",
//   },
// };