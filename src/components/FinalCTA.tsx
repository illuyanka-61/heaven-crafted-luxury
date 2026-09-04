import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site, whatsappHref, whatsappLink } from "@/lib/site";
import { onProjectType, projectTypes } from "@/lib/enquiry";
import { Reveal } from "./Reveal";

const fieldClass =
  "min-h-12 w-full border-b border-ivory/25 bg-transparent pb-2 text-[0.9375rem] text-ivory placeholder:text-ivory/40 focus:border-brass focus:outline-none";

export function FinalCTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState<string | null>(null);
  const [blocked, setBlocked] = useState<string | null>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  // A collection card or the bespoke CTA can pre-select the project type.
  useEffect(
    () =>
      onProjectType((type) => {
        setForm((prev) => ({ ...prev, type }));
      }),
    [],
  );

  // No backend is configured: the enquiry is handed to WhatsApp using the
  // brand's own number. Swap this handler for an API call when one exists.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      `Quote request — ${site.name}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Project: ${form.type}`,
      form.message ? `Details: ${form.message}` : null,
    ].filter(Boolean);
    const href = whatsappLink(lines.join("\n"));
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    if (opened) {
      setBlocked(null);
      setSent("Your enquiry opened in WhatsApp — press send there and we'll reply shortly.");
    } else {
      setSent(null);
      setBlocked(href);
    }
  };

  return (
    <section id="contact" className="bg-teal-deep text-ivory">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-brass">Request a Quote</p>
            <h2 className="mt-7 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-[3.75rem]">
              Let’s Build
              <br />
              Something Beautiful.
            </h2>
            <p className="mt-7 max-w-md text-[0.9375rem] leading-relaxed text-ivory/70">
              Tell us about your space, your style, and what you have in mind.
              The design consultation is free.
            </p>

            <dl className="mt-12 space-y-5">
              <div>
                <dt className="eyebrow text-ivory/45">Call</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="font-serif text-2xl transition-colors duration-300 hover:text-brass"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ivory/45">WhatsApp</dt>
                <dd className="mt-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.9375rem] text-ivory/80 transition-colors duration-300 hover:text-brass"
                  >
                    Message us on WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ivory/45">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[0.9375rem] break-all text-ivory/80 transition-colors duration-300 hover:text-brass"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ivory/45">Showroom</dt>
                <dd className="mt-2 text-[0.9375rem] text-ivory/80">
                  Visit the showroom: {site.address}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="eyebrow text-ivory/45">
                  Name
                </label>
                <input
                  id="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className={`mt-3 ${fieldClass}`}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="eyebrow text-ivory/45">
                  Phone
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+880"
                  className={`mt-3 ${fieldClass}`}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="eyebrow text-ivory/45">
                  Email <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={`mt-3 ${fieldClass}`}
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="type" className="eyebrow text-ivory/45">
                  Project Type
                </label>
                <select
                  id="type"
                  ref={typeRef}
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className={`mt-3 appearance-none ${fieldClass} ${
                    form.type ? "" : "text-ivory/40"
                  }`}
                >
                  <option value="" disabled className="bg-teal text-ivory">
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-teal text-ivory">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="eyebrow text-ivory/45">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Room size, pieces you need, timeline…"
                  className={`mt-3 resize-none ${fieldClass}`}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="btn-primary w-full bg-brass text-accent-foreground hover:bg-ivory sm:w-auto"
                >
                  Request a Quote
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                </button>
                <p className="mt-4 text-xs leading-relaxed text-ivory/45">
                  Sends your details to our team on WhatsApp.
                </p>

                <p aria-live="polite" className="mt-3 text-xs leading-relaxed text-brass">
                  {sent}
                </p>
                {blocked ? (
                  <p className="mt-1 text-xs leading-relaxed text-ivory/70">
                    WhatsApp didn’t open automatically.{" "}
                    <a
                      href={blocked}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-brass underline-offset-4 hover:text-brass"
                    >
                      Open your enquiry in WhatsApp
                    </a>
                    .
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
