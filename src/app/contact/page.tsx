"use client";

import { useState } from "react";
import { SiteHeader, SiteFooter } from "../components/SiteLayout";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(data.error || "Failed to send message.");
      }
    } catch {
      setStatus("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <>
      <SiteHeader />
      <div className="flex flex-col md:min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans">
        <main className="flex-1 flex flex-col items-center py-6 px-4">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Contact Us</h1>
          <form className="flex flex-col gap-4 w-full max-w-lg" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700"
              required
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              value={form.message}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-black rounded-xl py-3 px-6 font-bold text-lg text-white shadow-lg border border-white transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 active:scale-95 hover:scale-105"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p className={`mt-2 text-center ${status.includes("success") ? "text-white" : "text-red-400"}`}>{status}</p>
            )}
          </form>
          <div className="mt-8 text-center text-gray-300 text-base max-w-lg mx-auto">
            <p className="mb-2">We usually reply within <span className="font-semibold text-white">24 hours</span>.</p>
            <p>Serving the <span className="font-semibold text-white">Comox Valley</span>, Vancouver Island, BC.</p>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
