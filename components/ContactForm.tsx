"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full bg-transparent border-b border-white/25 py-3 text-[#dddddd] placeholder:text-white/50 outline-none focus:border-[var(--accent)] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* honeypot: hidden from users, catches bots */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <input name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <input name="name" required placeholder="Name" className={field} />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className={field}
      />
      <input name="subject" placeholder="Subject" className={field} />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Message"
        className={field}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-[#b90808] px-8 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#9a0606] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>

      {status === "sent" && (
        <p className="text-green-400 text-sm">
          Thanks — your message has been sent. We&rsquo;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please call us on{" "}
          <a href="tel:+61738222065" className="underline">
            +61 7 3822 2065
          </a>
          .
        </p>
      )}
    </form>
  );
}
