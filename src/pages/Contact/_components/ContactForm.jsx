import { useState } from "react";
import { Mail, Phone, Send, ShieldCheck, Tag, User } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill name, phone and message.");
      return;
    }

    try {
      setLoading(true);

      console.log("Contact form:", form);

      toast.success("Message sent successfully.");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-md sm:p-8">
      <h2 className="font-serif text-3xl font-bold">Send Us a Message</h2>

      <div className="mt-2 flex items-center gap-3">
        <span className="h-px w-16 bg-[#d4a52f]" />
        <Send size={16} className="text-[#d4a52f]" />
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Fill out the form and our team will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <InputBox icon={<User size={18} />} name="name" value={form.name} onChange={handleChange} placeholder="Your Name" />
          <InputBox icon={<Mail size={18} />} name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" />
        </div>

        <InputBox icon={<Phone size={18} />} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your Phone Number" />

        <InputBox icon={<Tag size={18} />} name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={6}
          className="w-full resize-none rounded-md border px-4 py-3 text-sm outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-3 rounded-md bg-[#061735] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0b2347] disabled:opacity-60"
        >
          <Send size={17} className="text-[#d4a52f]" />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <p className="mt-5 flex items-center gap-2 text-xs text-gray-600">
        <ShieldCheck size={16} />
        Your information is safe with us. We respect your privacy.
      </p>
    </div>
  );
}

function InputBox({ icon, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="flex items-center gap-3 rounded-md border px-4 py-3">
      <span className="text-[#061735]">{icon}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm outline-none"
      />
    </div>
  );
}