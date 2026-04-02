import React, { useState } from "react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#FFC200",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        <svg
          fill="#FFFFFF"
          height="30"
          viewBox="0 0 24 24"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill="#000"
            d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
          ></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </button>

      {/* Chatbot Iframe */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            left: "20px",
            width: "350px",
            height: "700px",
            zIndex: 9999,
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <iframe 
            src="https://www.chatbase.co/chatbot-iframe/GjfGmOF04gftoSL0y9vCR"
            width="100%"
            height="90%"
            style={{ border: "none", marginTop: 100 }}
            frameBorder="0"
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
