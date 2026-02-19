// import { useState, useRef, useEffect } from "react";
// import { MessageCircle, X, Send, Bot } from "lucide-react";

// interface Message {
//   id: number;
//   text: string;
//   sender: "user" | "bot";
//   time: string;
// }

// const getTimeString = () =>
//   new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// const WELCOME_MESSAGE: Message = {
//   id: 0,
//   text: "Hi there! 👋 Welcome to Best Next. How can we help you today?",
//   sender: "bot",
//   time: getTimeString(),
// };

// const ChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     if (isOpen) {
//       setTimeout(() => inputRef.current?.focus(), 300);
//     }
//   }, [isOpen]);

//   const handleSend = () => {
//     const trimmed = input.trim();
//     if (!trimmed) return;

//     const userMsg: Message = {
//       id: Date.now(),
//       text: trimmed,
//       sender: "user",
//       time: getTimeString(),
//     };

//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     // Simulate bot auto-reply after a short delay
//     setTimeout(() => {
//       const botReply: Message = {
//         id: Date.now() + 1,
//         text: "Thanks for your message! One of our team members will get back to you shortly. 🚗",
//         sender: "bot",
//         time: getTimeString(),
//       };
//       setMessages((prev) => [...prev, botReply]);
//     }, 1000);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <>
//       {/* Chat Screen */}
//       <div
//         className={`fixed bottom-24 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)] transition-all duration-300 ease-out origin-bottom-right ${
//           isOpen
//             ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
//             : "opacity-0 scale-95 translate-y-4 pointer-events-none"
//         }`}
//       >
//         <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 flex flex-col"
//              style={{ height: "min(520px, calc(100vh - 10rem))" }}>
//           {/* Header */}
//           <div className="bg-secondary px-5 py-4 flex items-center justify-between flex-shrink-0">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
//                 <Bot className="w-5 h-5 text-primary" />
//               </div>
//               <div>
//                 <h3 className="text-secondary-foreground font-semibold text-sm font-sans">
//                   Best Next Support
//                 </h3>
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                   <span className="text-secondary-foreground/60 text-xs">
//                     We typically reply instantly
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="w-8 h-8 rounded-full flex items-center justify-center text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
//               aria-label="Close chat"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto bg-card p-4 space-y-4">
//             {messages.map((msg) => (
//               <div
//                 key={msg.id}
//                 className={`flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
//                     msg.sender === "user"
//                       ? "bg-primary text-primary-foreground rounded-br-md"
//                       : "bg-muted text-card-foreground rounded-bl-md"
//                   }`}
//                 >
//                   <p className="text-sm leading-relaxed">{msg.text}</p>
//                   <p
//                     className={`text-[10px] mt-1 ${
//                       msg.sender === "user"
//                         ? "text-primary-foreground/60"
//                         : "text-muted-foreground"
//                     }`}
//                   >
//                     {msg.time}
//                   </p>
//                 </div>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input area */}
//           <div className="bg-card border-t border-border px-4 py-3 flex items-center gap-2 flex-shrink-0">
//             <input
//               ref={inputRef}
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Type a message..."
//               className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
//             />
//             <button
//               onClick={handleSend}
//               disabled={!input.trim()}
//               className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
//               aria-label="Send message"
//             >
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Chat Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 glow-amber group ${
//           isOpen ? "rotate-0" : ""
//         }`}
//         aria-label="Toggle chat"
//       >
//         <MessageCircle
//           className={`w-6 h-6 transition-all duration-300 ${
//             isOpen ? "opacity-0 scale-75 absolute" : "opacity-100 scale-100"
//           }`}
//         />
//         <X
//           className={`w-6 h-6 transition-all duration-300 ${
//             isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"
//           }`}
//         />
//       </button>
//     </>
//   );
// };

// export default ChatWidget;
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BACKEND_URL } from "@/utils/config";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const getTimeString = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const WELCOME_MESSAGE: Message = {
  id: 0,
  text: "Hi there! 👋 Welcome to Best Next. How can we help you today?",
  sender: "bot",
  time: getTimeString(),
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [phone, setPhone] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate or load persistent phone/session ID
  useEffect(() => {
    let storedPhone = localStorage.getItem("chat_phone");
    if (!storedPhone) {
      storedPhone = "web_" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("chat_phone", storedPhone);
    }
    setPhone(storedPhone);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || !phone) return;

    const userMsg: Message = {
      id: Date.now(),
      text: trimmed,
      sender: "user",
      time: getTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Send to backend
    fetch(`${BACKEND_URL}chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, body: trimmed }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const botReply: Message = {
          id: Date.now() + 1,
          text: data.reply || "Sorry, something went wrong.",
          sender: "bot",
          time: getTimeString(),
        };
        setMessages((prev) => [...prev, botReply]);
      })
      .catch((err) => {
        console.error("Error:", err);
        const errorReply: Message = {
          id: Date.now() + 1,
          text: "Sorry, there was an error. Please try again.",
          sender: "bot",
          time: getTimeString(),
        };
        setMessages((prev) => [...prev, errorReply]);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Screen */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)] transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 flex flex-col"
             style={{ height: "min(520px, calc(100vh - 10rem))" }}>
          {/* Header */}
          <div className="bg-secondary px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-secondary-foreground font-semibold text-sm font-sans">
                  Best Next Support
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-secondary-foreground/60 text-xs">
                    We typically reply instantly
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-card p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-card-foreground rounded-bl-md"
                  }`}
                >
                  <div className="prose prose-sm prose-invert max-w-none text-sm leading-relaxed prose-headings:my-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({node, ...props}) => <a {...props} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" />,
                        ul: ({node, ...props}) => <ul {...props} className="list-disc pl-4" />,
                        ol: ({node, ...props}) => <ol {...props} className="list-decimal pl-4" />,
                        code: ({node, ...props}) => <code {...props} className="bg-black/20 px-1 py-0.5 rounded" />,
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                  <p
                    className={`text-[10px] mt-1 ${
                      msg.sender === "user"
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="bg-card border-t border-border px-4 py-3 flex items-center gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || !phone}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 glow-amber group ${
          isOpen ? "rotate-0" : ""
        }`}
        aria-label="Toggle chat"
      >
        <MessageCircle
          className={`w-6 h-6 transition-all duration-300 ${
            isOpen ? "opacity-0 scale-75 absolute" : "opacity-100 scale-100"
          }`}
        />
        <X
          className={`w-6 h-6 transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"
          }`}
        />
      </button>
    </>
  );
};

export default ChatWidget;