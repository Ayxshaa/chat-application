import React, { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext"; // Adjust the import path as necessary

// Define types for tab and FAQ items
const tabData = [
  { id: "general", label: "General" },
  { id: "tech", label: "Tech" },
  { id: "random", label: "Random" },
];

const faqData = {
  general: [
    {
      question: "What is this chat application used for",
      answer: "This chat application is designed to help users communicate in real time through text messages, emojis, media sharing, and more. It can be used for personal, professional, or community-based conversations.",
    },
    {
      question: "Do I need to create an account to use the app",
      answer: "Yes, creating an account ensures secure communication and access to your chats across devices.",
    },
    {
      question: "What should I do if I forget my password?",
      answer: "Click Forgot Password on the login screen and follow the instructions to reset it via email or SMS.",
    },
    {
      question: "How do I block or report someone?",
      answer: "Tap on the user's profile in the chat, then select Block or  Report to take appropriate action.",
    },
  ],
  tech: [
    {
      question: " How does real-time messaging work?",
      answer: "We use WebSockets (via libraries like Socket.IO) to establish a persistent connection between the client and server, enabling real-time two-way communication for instant message delivery.",
    },
    {
      question: "Is the chat encrypted?",
      answer: "Yes, we implement end-to-end encryption (E2EE) or TLS encryption depending on the use case. Messages are securely transmitted and stored.",
    },
    {
      question: "How do you handle offline messaging and message queuing?",
      answer: "If a user goes offline, messages are queued on the server and delivered as soon as the user reconnects. We use message brokers like Redis Pub/Sub or Kafka for reliable delivery.",
    },
    {
      question: "How is user authentication managed?",
      answer: "Authentication is handled using JWT tokens for stateless sessions or with secure third-party providers (Google, Facebook, Apple) via OAuth.",
    },
  ],
  random: [
    {
      question: "Why did the bicycle fall over?",
      answer: "Because it was two-tired!",
    },
    {
      question: "What did one ocean say to the other ocean?",
      answer: "Nothing, they just waved.",
    },
    {
      question: "Why don't skeletons fight each other?",
      answer: "They don't have the guts!",
    },
    {
      question: "What do you call a bear with no teeth?",
      answer: "A gummy bear!",
    },
  ],
};

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  const { darkMode } = useContext(ThemeContext);
  
  // Animation variants for the container
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <motion.div 
      className="mb-4 border-b pb-4 overflow-hidden" 
      style={{ borderColor: 'var(--border-color)' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
    >
      <button
        className="flex w-full items-center justify-between text-left py-2 px-1 rounded-md"
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.span 
          className="text-lg font-medium" 
          style={{ color: 'var(--text-color)' }}
          animate={{ color: isOpen ? 'var(--primary-color, #6366f1)' : 'var(--text-color)' }}
          transition={{ duration: 0.3 }}
        >
          {question}
        </motion.span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ 
            duration: 0.3, 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
        >
          <svg
            className="size-5"
            style={{ color: isOpen ? 'var(--primary-color, #6366f1)' : 'var(--subtext-color)' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3
                },
                opacity: {
                  duration: 0.2
                }
              }
            }}
            className="mt-2 pl-2 overflow-hidden"
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ color: 'var(--subtext-color)' }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openItem, setOpenItem] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  // Animation for the page heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Staggered animation for the tab container
  const tabContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const tabItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  // Background gradient animation for the active tab
  const tabBackgroundVariants = {
    inactive: {
      background: 'transparent',
      scale: 0.95,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    active: {
      scale: 1,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="mx-auto max-w-3xl sm:p-6" style={{ color: 'var(--text-color)' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        <h1 className="mb-4 text-center text-3xl font-bold">
          <span className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Frequently{" "}
          </span>{" "}
          asked questions
        </h1>
        <p className="mb-12 text-center" style={{ color: 'var(--subtext-color)' }}>
          Need help with something? Here are our most frequently asked questions.
        </p>
      </motion.div>

      <motion.div 
        className="mx-auto mb-10 flex max-w-lg space-x-1 rounded-lg p-1" 
        style={{ borderColor: 'var(--border-color)', border: '1px solid' }}
        variants={tabContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {tabData.map((tab) => (
          <motion.button
            key={tab.id}
            className={`flex-1 rounded px-3 py-2 text-sm font-medium relative overflow-hidden`}
            style={{
              color: activeTab === tab.id ? 'var(--text-color)' : 'var(--subtext-color)',
            }}
            onClick={() => {
              setActiveTab(tab.id);
              setOpenItem(null);
            }}
            variants={tabItemVariants}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === tab.id && (
              <motion.div
                className="absolute inset-0 rounded"
                style={{ 
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  border: '1px solid'
                }}
                layoutId="activeTab"
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30 
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.4,
            ease: "easeInOut"
          }}
        >
          {faqData[activeTab].map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => setOpenItem(openItem === index ? null : index)}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FAQ;