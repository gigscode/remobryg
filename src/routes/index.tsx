import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  Mail,
  AlertTriangle,
  Lock,
  FileText,
  ArrowRight,
  Code2,
  Megaphone,
  Video,
  Youtube,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  X,
} from "lucide-react";
import { FaWhatsapp, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "../assets/hero-remobryg.jpg";
import diasporaImage from "../assets/diaspora-remobryg.jpg";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
});
type NewsletterForm = z.infer<typeof newsletterSchema>;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The RemoBryg — Earn in Dollars. Get Paid Every Week." },
      { name: "description", content: "$500–$900 weekly. Compliant remote work for Nigerians — no transfer fee traps, no graveyard shifts." },
      { property: "og:title", content: "The RemoBryg — Earn in Dollars. Get Paid Every Week." },
      { property: "og:description", content: "$500–$900 weekly. Compliant remote work for Nigerians." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const form = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: NewsletterForm) {
    // eslint-disable-next-line no-console
    console.log("Newsletter signup:", values.email);
    form.reset();
    form.setValue("email", "Thanks! You're on the list.");
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "how-it-works", label: "How It Works" },
    { id: "opportunities", label: "Opportunities" },
    { id: "diaspora", label: "Diaspora" },
    { id: "trust", label: "Trust" },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
            <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
              Remo<span className="text-teal-600">Bryg</span>
            </span>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map(({ id, label }) => (
              <a key={id} href={`#${id}`}
                className="relative transition-colors duration-200 hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="bg-primary text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90">
              <a href="#join">Join Community</a>
            </Button>
            {/* Dot-grid mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card transition-colors duration-200 hover:bg-surface-raised md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="h-4 w-4 text-foreground" />
              ) : (
                <span className="grid grid-cols-2 gap-[3px]" aria-hidden="true">
                  {[0,1,2,3].map(i => (
                    <span key={i} className="h-[5px] w-[5px] rounded-full bg-foreground" />
                  ))}
                </span>
              )}
            </button>
          </div>
        </div>
        {/* Mobile drawer */}
        {menuOpen && (
          <div className="border-t border-border/50 bg-background/95 px-4 pb-6 pt-4 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ id, label }) => (
                <a key={id} href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-surface-raised hover:text-foreground">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border/50 clip-diagonal bg-background pb-32">
        <div className="absolute inset-0 bg-hero-radial dark:bg-hero-radial-dark" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden="true" />
                Built for Nigerians, backed by compliance
              </div>
              <h1 className="font-display mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-foreground">Earn in </span>
                <span className="text-accent">Dollars.</span>
                <br />
                <span className="text-foreground">Get Paid </span>
                <span className="italic text-primary">Every Week.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                $500–$900 weekly, wired to your account. We handle the compliance, payment setup, and everything Nigeria's remote work scene gets wrong.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
                <Button asChild size="lg" className="w-1/2 px-6 sm:w-auto bg-primary text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 hover:shadow-lg">
                  <a href="#join">
                    Join The RemoBryg
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-1/2 px-6 sm:w-auto transition-all duration-200 hover:scale-105 hover:shadow-md">
                  <a href="#how-it-works">See How It Works</a>
                </Button>
              </div>
              {/* Typographic stat callout */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-border/50 pt-8 sm:justify-start">
                <div>
                  <div className="font-display text-4xl font-extrabold text-accent">$500–$900</div>
                  <div className="mt-1 text-sm text-muted-foreground">earned weekly</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-extrabold text-primary">100%</div>
                  <div className="mt-1 text-sm text-muted-foreground">compliant setup</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-extrabold text-foreground">0</div>
                  <div className="mt-1 text-sm text-muted-foreground">hidden FX cuts</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up-delay">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/20 via-hero-glow/20 to-primary/10 blur-2xl" aria-hidden="true" />
              <img
                src={heroImage}
                alt="A Nigerian professional working remotely"
                className="relative rounded-2xl border border-border/50 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                width={600} height={450} loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TRUST BAR ── */}
      <div className="overflow-hidden border-y border-border/50 bg-primary py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-8 text-sm font-medium text-primary-foreground/80">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Compliance-first</span>
              <span className="text-accent">✦</span>
              <span className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-accent" /> Paid weekly in USD</span>
              <span className="text-accent">✦</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> No graveyard shifts</span>
              <span className="text-accent">✦</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Work from anywhere in Nigeria</span>
              <span className="text-accent">✦</span>
              <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-accent" /> No hidden FX cuts</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── CHALLENGE — asymmetric layout ── */}
      <section id="challenge" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Problem</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-destructive">Why Most Nigerian</span>{" "}
            <span className="text-foreground">Remote Workers</span>{" "}
            <span className="text-warning">Get Burned</span>
          </h2>
        </div>
        {/* Asymmetric: 1 large + 2 small */}
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large card */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-2 lg:row-span-2">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-destructive/5 transition-all duration-500 group-hover:h-48 group-hover:w-48" aria-hidden="true" />
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10">
              <AlertTriangle className="h-7 w-7 text-destructive" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-bold text-foreground">Account Bans & Lost Income</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Non-compliant workarounds — fake locations, borrowed accounts, unverified payment routes — trigger platform algorithms built to detect exactly this. One ban means months of earnings wiped overnight. Platforms don't send warnings; they just close accounts permanently.
            </p>
            <blockquote className="mt-6 border-l-4 border-destructive/40 pl-4 text-sm italic text-muted-foreground">
              &ldquo;I had been on the platform for 3 months. One morning I woke up to a ban email. Everything was gone.&rdquo;
            </blockquote>
          </div>
          {/* Small card 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-warning/10">
              <Lock className="h-5 w-5 text-warning" />
            </div>
            <h3 className="font-display mt-4 text-lg font-bold text-foreground">Payment Barriers</h3>
            <p className="mt-2 text-sm text-muted-foreground">Transfer fees, P2P FX volatility, and PayPal restrictions eat your earnings before they reach you.</p>
          </div>
          {/* Small card 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <Globe className="h-5 w-5 text-muted-foreground" />
            </div>
            <h3 className="font-display mt-4 text-lg font-bold text-foreground">No Clear Pathway</h3>
            <p className="mt-2 text-sm text-muted-foreground">High-paying remote roles exist, but most Nigerians have no structured, compliant route to access and keep them.</p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution" className="border-y border-border/50 bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Fix</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-accent">RemoBryg</span>{" "}
                <span className="text-foreground">removes every</span>{" "}
                <span className="text-primary">obstacle between you and your dollar income</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                A community and framework built for <strong className="text-foreground">long-term, compliant, high-earning remote careers</strong> for Nigerians.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  { icon: <ShieldCheck className="h-5 w-5 text-primary" />, title: "Unbannable Setup", desc: "Compliant account creation, verified payment routes, platform-safe practices." },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, title: "Strategic Career Growth", desc: "Move from entry-level AI tasking to high-value specialized remote roles." },
                  { icon: <Users className="h-5 w-5 text-accent" />, title: "Diaspora Payment Network", desc: "Leverage relatives abroad legally — proper payment agency structures, zero risk." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4 transition-transform duration-200 hover:translate-x-1">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">{icon}</div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">{title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Big typographic callout */}
            <div className="space-y-4">
              {[
                { value: "$500–$900", label: "average weekly earnings", color: "text-accent" },
                { value: "2 Tiers", label: "income engine → career accelerator", color: "text-primary" },
                { value: "1 Mission", label: "sustainable success for Nigerians", color: "text-foreground" },
              ].map(({ value, label, color }) => (
                <div key={value} className="group rounded-2xl border border-border/60 bg-card px-8 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <div className={`font-display text-5xl font-extrabold ${color}`}>{value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — step timeline ── */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Path</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-foreground">Your </span>
            <span className="text-accent">Two-Tier Path</span>
            <span className="text-foreground"> to Prosperity</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Immediate income first. Career wealth second.</p>
        </div>
        <div className="relative mx-auto max-w-3xl">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border lg:left-1/2 lg:-translate-x-0.5" aria-hidden="true" />
          {[
            {
              step: "01",
              title: "The Income Engine",
              sub: "Immediate Cash Flow & Skill Building",
              body: "Start on platforms like Outlier, Mercor, and OneForma. We give you compliant account setup, payment processing strategies, and platform-safe practices that keep you earning, not banned.",
              goal: "Generate $500–$900/week while building foundational digital skills.",
              side: "left",
            },
            {
              step: "02",
              title: "The Career Accelerator",
              sub: "Long-Term Wealth & Career Mastery",
              body: "Graduate from task-based work to specialized roles — fullstack dev, social media management, UGC creation, YouTube automation. Curated resources, mentorship, and direct connections to high-paying clients.",
              goal: "Transition to sustainable, high-impact careers worth $3k–$6k/month.",
              side: "right",
            },
          ].map(({ step, title, sub, body, goal }) => (
            <div key={step} className="relative mb-12 flex gap-8 last:mb-0">
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-card font-display text-lg font-extrabold text-accent shadow-sm">
                {step}
              </div>
              <div className="group flex-1 rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{sub}</div>
                <h3 className="font-display mt-1 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <div className="mt-4 flex items-start gap-2 rounded-lg bg-surface-raised p-3 text-sm font-medium text-foreground">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {goal}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPPORTUNITIES — job board list ── */}
      <section id="opportunities" className="border-y border-border/50 bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between animate-fade-in-up">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Now Open</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-foreground">Open </span>
                <span className="text-accent">Opportunities</span>
                <span className="text-foreground"> & Training</span>
              </h2>
            </div>
            <Button asChild size="default" className="w-1/2 px-10 py-4 text-base sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#join">Get Notified <ArrowRight className="ml-1 h-3 w-3" /></a>
            </Button>
          </div>
          <div className="space-y-3">
            {[
              { icon: <TrendingUp className="h-5 w-5 text-primary" />, title: "AI Tasking & Data Annotation", type: "Training", pay: "$500–$900/week", location: "Remote · Nigeria-friendly", tags: ["Outlier", "Mercor", "OneForma"], tagColor: "bg-primary/10 text-primary" },
              { icon: <Code2 className="h-5 w-5 text-primary" />, title: "Fullstack Developer", type: "Hiring", pay: "$60k–$120k/yr", location: "Remote · Worldwide", tags: ["React", "Node.js", "TypeScript"], tagColor: "bg-primary/10 text-primary" },
              { icon: <Megaphone className="h-5 w-5 text-accent" />, title: "Social Media Manager", type: "Hiring", pay: "$800–$2k/mo", location: "Remote · Flexible hours", tags: ["Instagram", "TikTok", "Content"], tagColor: "bg-accent/10 text-accent-foreground" },
              { icon: <Video className="h-5 w-5 text-destructive" />, title: "UGC Creator", type: "Hiring", pay: "$300–$800/project", location: "Remote · No studio needed", tags: ["Video", "Brand Content", "Mobile"], tagColor: "bg-destructive/10 text-destructive" },
              { icon: <Youtube className="h-5 w-5 text-[#FF0000]" />, title: "YouTube Automation Training", type: "Training", pay: "Free to members", location: "Online · Self-paced", tags: ["Faceless Channel", "Monetisation", "Scaling"], tagColor: "bg-red-50 text-red-600" },
              { icon: <Briefcase className="h-5 w-5 text-muted-foreground" />, title: "More Roles Coming…", type: "Coming Soon", pay: "—", location: "Join to stay updated", tags: ["Community Access"], tagColor: "bg-muted text-muted-foreground" },
            ].map(({ icon, title, type, pay, location, tags, tagColor }) => (
              <div key={title}
                className="group flex flex-col gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-raised">
                    {icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display font-bold text-foreground">{title}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        type === "Hiring" ? "bg-primary/10 text-primary" :
                        type === "Training" ? "bg-accent/20 text-accent-foreground" :
                        "bg-muted text-muted-foreground"
                      }`}>{type}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{location}</span>
                      <span className="flex items-center gap-1 font-semibold text-foreground"><DollarSign className="h-3 w-3 text-accent" />{pay}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {tags.map(t => (
                        <span key={t} className={`rounded-md px-2 py-0.5 text-xs font-medium ${tagColor}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <Button asChild size="default"
                  className="w-1/2 shrink-0 bg-accent px-10 py-4 text-base font-semibold text-accent-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-accent/90 hover:shadow-md sm:w-auto">
                  <a href="https://t.me/remobryg" target="_blank" rel="noopener noreferrer">Apply</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIASPORA ── */}
      <section id="diaspora" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img src={diasporaImage}
              alt="Nigerian professionals collaborating with diaspora partners"
              className="rounded-2xl border border-border/50 shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              width={600} height={450} loading="lazy" />
          </div>
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Diaspora</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-accent">Diaspora Trust</span>
              <span className="text-foreground"> Framework:</span>{" "}
              <span className="text-primary">Professionalizing Support</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Turn informal family support into a compliant, mutually beneficial payment partnership.
            </p>
            <div className="mt-8 space-y-0 divide-y divide-border/50">
              {[
                { icon: <FileText className="h-5 w-5 text-primary" />, title: "Legal Guidance", desc: "Best practices for receiving payments via international accounts through a diaspora sponsor." },
                { icon: <Users className="h-5 w-5 text-accent" />, title: "Payment Agency Model", desc: "Structure arrangements with relatives abroad as legal payment facilitators — tax compliant, zero risk." },
                { icon: <ShieldCheck className="h-5 w-5 text-primary" />, title: "Transparency & Security", desc: "Templates for clear agreements, secure fund transfers, and transparent record-keeping." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 py-5 transition-transform duration-200 hover:translate-x-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">{icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST — border-left style ── */}
      <section id="trust" className="border-y border-border/50 bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Integrity</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-foreground">Why Trust </span>
              <span className="text-accent">The RemoBryg?</span>{" "}
              <span className="text-destructive">The Anti-Scam Seal</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">In a space filled with empty promises, we stand for integrity and verifiable results.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: <Lock className="h-6 w-6 text-primary" />, title: "No Identity Fraud", desc: "We explicitly condemn any practices involving misuse of personal information. Every strategy is above board.", border: "border-l-primary" },
              { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Compliance First", desc: "Every strategy is built on platform terms of service and international regulations — not shortcuts that expire.", border: "border-l-accent" },
              { icon: <Users className="h-6 w-6 text-accent" />, title: "Real Results, Real People", desc: "Verifiable methods that lead to consistent income and career progression, not temporary hacks.", border: "border-l-success" },
            ].map(({ icon, title, desc, border }) => (
              <div key={title} className={`border-l-4 ${border} bg-card rounded-r-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-raised">{icon}</div>
                <h3 className="font-display mt-4 font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN / CTA ── */}
      <section id="join" className="border-t border-border/50 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Community</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Join The{" "}
                <span className="text-accent">RemoBryg Community</span>{" "}
                Today
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Ready to earn in dollars, get paid weekly, and stop settling for local rates? Join thousands of Nigerians already on the path.
              </p>
              <div className="mt-8 space-y-3">
                <SocialLink icon={<FaWhatsapp className="h-5 w-5 text-[#25D366]" />} label="WhatsApp" href="https://chat.whatsapp.com/LE2LDORzK23DdPGLA4zLwV?s=cl&p=a&ilr=4" description="Join WhatsApp community" />
                <SocialLink icon={<FaTelegram className="h-5 w-5 text-[#26A5E4]" />} label="Telegram" href="https://t.me/remobryg" description="Join the Telegram channel" />
                <SocialLink icon={<FaXTwitter className="h-5 w-5 text-white" />} label="Twitter / X" href="https://x.com/LordSid07" description="Follow for updates" />
              </div>
            </div>
            <div className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm sm:p-8 animate-fade-in-up-delay">
              <h3 className="font-display text-xl font-bold">
                Sign up for our <span className="text-accent">Newsletter</span>
              </h3>
              <p className="mt-2 text-primary-foreground/80">
                Exclusive tips, job alerts, and payment guides — straight to your inbox.
              </p>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4" aria-label="Newsletter signup">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-foreground">Email address</Label>
                  <Input id="email" type="email" placeholder="you@example.com"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30 transition-all duration-200"
                    {...form.register("email")} />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive-foreground" role="alert">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <Button type="submit"
                  className="w-full px-6 sm:w-1/2 bg-accent font-semibold text-accent-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-accent/90 hover:shadow-lg"
                  disabled={form.formState.isSubmitSuccessful && form.getValues("email").includes("Thanks")}>
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border/50 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
                Remo<span className="text-teal-600">Bryg</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The RemoBryg. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              {["challenge", "solution", "opportunities", "join"].map((id) => (
                <a key={id} href={`#${id}`} className="transition-colors duration-200 hover:text-foreground capitalize">{id}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ icon, label, href, description }: { icon: React.ReactNode; label: string; href: string; description: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 transition-all duration-200 hover:scale-[1.02] hover:bg-primary-foreground/20 hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">{icon}</div>
      <div>
        <div className="font-display font-semibold text-primary-foreground">{label}</div>
        <div className="text-sm text-primary-foreground/70">{description}</div>
      </div>
    </a>
  );
}
