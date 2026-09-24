"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  ChevronUp,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

interface LinkCard {
  id: string;
  label: string;
  value: string;
  url: string;
  icon: React.ElementType;
  copyable: boolean;
}

const linkCards: LinkCard[] = [
  {
    id: "github",
    label: "GitHub",
    value: "github.com/PushkarPallav",
    url: "https://github.com/PushkarPallav",
    icon: GithubIcon,
    copyable: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/pushkar-pallav",
    url: "https://linkedin.com/in/pushkar-pallav",
    icon: LinkedinIcon,
    copyable: false,
  },
  {
    id: "email",
    label: "Email",
    value: "pushkarplacements@gmail.com",
    url: "mailto:pushkarplacements@gmail.com",
    icon: Mail,
    copyable: true,
  },
  {
    id: "phone",
    label: "Phone",
    value: "(+91) 8252021037",
    url: "tel:+918252021037",
    icon: Phone,
    copyable: true,
  },
];

export default function ConnectSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formError, setFormError] = useState("");

  // Scroll state
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (id: string, text: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="connect" className="w-full py-32 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations, project inquiries, or professional opportunities.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {linkCards.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target={link.copyable ? undefined : "_blank"}
                rel={link.copyable ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col items-center p-6 bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl hover:border-cyan-400/20 hover:bg-white/[0.05] transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-emerald-400/0 group-hover:from-cyan-400/5 group-hover:to-emerald-400/5 rounded-2xl transition-all duration-300" />
                <Icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-1">{link.label}</h3>
                <p className="text-zinc-400 text-sm truncate w-full text-center mb-4">
                  {link.value}
                </p>
                
                {link.copyable && (
                  <button
                    onClick={(e) => handleCopy(link.id, link.value, e)}
                    className="mt-auto flex items-center justify-center space-x-2 bg-white/[0.06] hover:bg-white/[0.1] px-3 py-1.5 rounded-lg text-xs text-zinc-300 transition-colors w-full"
                  >
                    {copiedId === link.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all resize-y"
                />
              </div>

              {formError && (
                <p className="text-red-400 text-sm mt-2">{formError}</p>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : isSent ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center space-x-2"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 ml-2" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-2 text-zinc-500 text-sm mb-4 md:mb-0">
            <MapPin className="w-4 h-4" />
            <span>JP Nagar, Bengaluru 560078, India</span>
          </div>
          <div className="text-zinc-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Pushkar Pallav. All rights reserved.
          </div>
        </motion.footer>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-white/[0.06] backdrop-blur-md border border-white/[0.06] rounded-full hover:bg-white/[0.1] hover:border-cyan-400/30 transition-all group"
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
