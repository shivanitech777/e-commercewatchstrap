"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import { fadeInUp, staggerChildren } from "@/lib/motion";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formValues.message.trim()) {
      newErrors.message = "Please share your message.";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormValues(initialState);
  };

  return (
    <main className="relative pt-[6.5rem] pb-20">
      <PageTitle
        title="We would love to hear from you"
        subtitle="Collaborate on bespoke straps, ask questions, or simply say hello. The SheBreak atelier team responds within 2 business days."
      />

      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Contact the SheBreak studio
            </h2>
            <p className="text-base text-stone-600">
              Whether you are planning a limited run for a special occasion or
              searching for your next daily strap, our concierge team is ready
              to guide you through materials, finishes, and fit.
            </p>
            <div className="rounded-3xl border border-brand/15 bg-ivory p-6 shadow-soft">
              <p className="text-sm text-stone-600">
                Prefer a direct conversation? Call us at{" "}
                <a
                  href="tel:+918045667800"
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  +91 80456 67800
                </a>{" "}
                or write to{" "}
                <a
                  href="mailto:studio@ecocet.com"
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  studio@ecocet.com
                </a>
                .
              </p>
              <p className="mt-4 text-sm text-stone-500">
                Visit us at the SheBreak showroom, 21 Residency Road, Bengaluru.
              </p>
            </div>
          </motion.div>

          <motion.form
            variants={staggerChildren(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-brand/10 bg-ivory p-8 shadow-soft"
            noValidate
          >
            <motion.div
              variants={fadeInUp}
              className="grid gap-6 sm:grid-cols-2"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-stone-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-ink shadow-soft outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className="text-xs text-red-500">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-stone-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-ink shadow-soft outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? (
                  <p id="email-error" className="text-xs text-red-500">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-stone-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formValues.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-ink shadow-soft outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="Tell us about your project or enquiry"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="text-xs text-red-500">
                  {errors.message}
                </p>
              ) : null}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:bg-brand-light hover:shadow-lift"
              >
                Send Message
              </button>
              {submitted ? (
                <p className="text-sm font-medium text-brand">
                  Thank you! We will be in touch shortly.
                </p>
              ) : null}
            </motion.div>
          </motion.form>
        </div>
      </motion.section>
    </main>
  );
}
