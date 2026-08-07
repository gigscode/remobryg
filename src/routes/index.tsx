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
  MapPin,
  Clock,
  DollarSign,
  X,
  Laptop,
  Wifi,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa6";
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
    { id: "assessment", label: "Find My Path" },
    { id: "diaspora", label: "Diaspora" },
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
          <div className="border-t border-border/50 bg-background/98 px-6 pb-8 pt-6 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ id, label }, i) => (
                <a key={id} href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="animate-fade-in-up border-b border-border/30 py-4 font-display text-2xl font-extrabold tracking-tight text-foreground transition-colors duration-150 hover:text-teal-600 last:border-0">
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
            <span className="text-foreground">Most Nigerians Don't Know</span>{" "}
            <span className="text-accent">They Can Earn in Dollars</span>{" "}
            <span className="text-foreground">Every Week</span>
          </h2>
        </div>
        {/* Asymmetric: 1 large + 2 small */}
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large card */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-2 lg:row-span-2">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-accent/5 transition-all duration-500 group-hover:h-48 group-hover:w-48" aria-hidden="true" />
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <Globe className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-bold text-foreground">The Opportunity Is Hidden in Plain Sight</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Thousands of remote roles paying $500–$900 weekly are actively hiring Nigerians right now — on platforms most people have never heard of. The gap isn't ability or work ethic. It's awareness. Nobody told you this was possible, and nobody showed you how to get started.
            </p>
            <blockquote className="mt-6 border-l-4 border-accent/40 pl-4 text-sm italic text-muted-foreground">
              &ldquo;I had no idea I could be earning in dollars from my laptop every week. I just didn't know where to look.&rdquo;
            </blockquote>
          </div>
          {/* Small card 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-warning/10">
              <AlertTriangle className="h-5 w-5 text-warning" />
            </div>
            <h3 className="font-display mt-4 text-lg font-bold text-foreground">No Awareness</h3>
            <p className="mt-2 text-sm text-muted-foreground">Most Nigerians are stuck on local-rate jobs simply because nobody told them high-paying dollar remote work is accessible to them.</p>
          </div>
          {/* Small card 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <Lock className="h-5 w-5 text-muted-foreground" />
            </div>
            <h3 className="font-display mt-4 text-lg font-bold text-foreground">No Clear Starting Point</h3>
            <p className="mt-2 text-sm text-muted-foreground">Even those who know the opportunity exists don't know which platforms to use, how to set up compliantly, or how to get their first payment.</p>
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
                <span className="text-foreground">shows you the opportunity</span>{" "}
                <span className="text-primary">and walks you through every step</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                A community built to <strong className="text-foreground">raise awareness and give Nigerians a clear, proven path</strong> to earning in dollars every week.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  { icon: <Globe className="h-5 w-5 text-primary" />, title: "We Show You What's Possible", desc: "Most people don't act because they don't believe the opportunity is real. We show you exactly who is earning, on which platforms, and how much." },
                  { icon: <TrendingUp className="h-5 w-5 text-primary" />, title: "We Give You a Clear Starting Point", desc: "No more guessing. We tell you which platforms to join, how to set up correctly, and how to land your first payment." },
                  { icon: <Users className="h-5 w-5 text-accent" />, title: "We Support You Along the Way", desc: "A community of people on the same journey — sharing wins, answering questions, and holding each other accountable." },
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

      {/* ── ASSESSMENT ── */}
      <section id="assessment" className="border-y border-border/50 bg-surface-raised">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-10 text-center animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Quick Check</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-foreground">Find Out </span>
              <span className="text-accent">How Much You Can Earn</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">3 questions. 30 seconds. Your personalised starting point.</p>
          </div>
          <Assessment />
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
              {["challenge", "assessment", "diaspora", "join"].map((id) => (
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

// ── ASSESSMENT COMPONENT ──────────────────────────────────────────────────────

type Answer = "yes" | "no" | "20-40" | "40-60" | "60+" | "yes-task" | "no-task";

interface Question {
  id: string;
  text: string;
  sub?: string;
  options: { value: Answer; label: string; icon: React.ReactNode }[];
}

type ResultKey = "full-earner" | "account-partner" | "tasker" | "not-ready";

interface Result {
  key: ResultKey;
  title: string;
  badge: string;
  badgeColor: string;
  earning: string;
  earningLabel: string;
  desc: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  accentClass: string;
}

const QUESTIONS: Question[] = [
  {
    id: "diaspora",
    text: "Do you have a relative or contact in the UK, US, Canada, or Europe?",
    sub: "Someone with an active bank account or payment profile in those countries.",
    options: [
      { value: "yes", label: "Yes, I do", icon: <CheckCircle2 className="h-5 w-5" /> },
      { value: "no", label: "No, I don't", icon: <Globe className="h-5 w-5" /> },
    ],
  },
  {
    id: "task-interest",
    text: "Would you like to personally work on tasks to earn?",
    sub: "Tasks are AI-related jobs done on platforms like Outlier, Mercor, and OneForma.",
    options: [
      { value: "yes-task", label: "Yes, I want to task", icon: <TrendingUp className="h-5 w-5" /> },
      { value: "no-task", label: "No, just supply the account", icon: <Users className="h-5 w-5" /> },
    ],
  },
  {
    id: "hours",
    text: "How many hours per week can you dedicate?",
    sub: "Be honest — this determines your realistic earning range.",
    options: [
      { value: "20-40", label: "20–40 hrs / week", icon: <Clock className="h-5 w-5" /> },
      { value: "40-60", label: "40–60 hrs / week", icon: <Clock className="h-5 w-5" /> },
      { value: "60+", label: "60+ hrs / week", icon: <Clock className="h-5 w-5" /> },
    ],
  },
  {
    id: "device",
    text: "Do you have a laptop and stable internet access?",
    sub: "A basic laptop and reliable connection are the only tools you need to start.",
    options: [
      { value: "yes", label: "Yes, I have both", icon: <Laptop className="h-5 w-5" /> },
      { value: "no", label: "Not yet", icon: <Wifi className="h-5 w-5" /> },
    ],
  },
];

const WHATSAPP = "https://chat.whatsapp.com/LE2LDORzK23DdPGLA4zLwV?s=cl&p=a&ilr=4";

const Q0 = QUESTIONS[0] as Question;
const Q1 = QUESTIONS[1] as Question;
const Q2 = QUESTIONS[2] as Question;
const Q3 = QUESTIONS[3] as Question;

const EARNING_MAP: Record<"20-40" | "40-60" | "60+", string> = {
  "20-40": "$200–$400/week",
  "40-60": "$400–$700/week",
  "60+": "$500–$900/week",
};

function getResult(answers: Record<string, Answer>): Result {
  const hasDiaspora = answers["diaspora"] === "yes";
  const wantsToTask = answers["task-interest"] === "yes-task";
  const hasDevice = answers["device"] === "yes";
  const hours = answers["hours"] as "20-40" | "40-60" | "60+" | undefined;
  const estimatedEarning = hours ? EARNING_MAP[hours] : "$500–$900/week";

  if (!hasDevice) {
    return {
      key: "not-ready",
      title: "You're Almost There",
      badge: "Getting Ready",
      badgeColor: "bg-warning/15 text-warning",
      earning: "—",
      earningLabel: "not yet, but soon",
      desc: "You're one step away. A basic laptop and stable internet are the only barriers between you and your first dollar income. Many members started from this exact point.",
      bullets: [
        "Join the community now — members often share leads on affordable devices",
        "Use the time to learn the platforms and prepare your setup",
        "When you're ready, you can start earning within days",
      ],
      ctaLabel: "Join the Community",
      ctaHref: WHATSAPP,
      accentClass: "border-warning/40 bg-warning/5",
    };
  }

  if (hasDiaspora && wantsToTask) {
    return {
      key: "full-earner",
      title: "Full Earner",
      badge: "Best Path",
      badgeColor: "bg-accent/15 text-accent-foreground",
      earning: estimatedEarning,
      earningLabel: "estimated weekly earnings",
      desc: "You have everything — a diaspora account and the time to task. This is the highest-earning path. Your relative's account handles compliant payments while you work on AI tasks weekly.",
      bullets: [
        "Use your relative's account as the compliant payment route",
        "Work on platforms like Outlier, Mercor, and OneForma",
        "Up to 60 hrs of tasks available weekly (avg ~60 hrs depending on platform)",
        "We guide you through the full setup — account, platform onboarding, first payment",
      ],
      ctaLabel: "Start Now on WhatsApp",
      ctaHref: WHATSAPP,
      accentClass: "border-accent/40 bg-accent/5",
    };
  }

  if (hasDiaspora && !wantsToTask) {
    return {
      key: "account-partner",
      title: "Account Partner",
      badge: "Passive Income",
      badgeColor: "bg-primary/15 text-primary",
      earning: "10–15%",
      earningLabel: "of the account's weekly earnings",
      desc: "You supply the account. We supply the tasker. Every week the account earns, you receive your cut — no work required on your end. The percentage varies slightly by country and platform rate.",
      bullets: [
        "Your relative's account is used compliantly under a clear agreement",
        "RemoBryg assigns a verified tasker to the account",
        "You receive 10–15% of whatever the account earns weekly",
        "Full transparency — you see exactly what was earned each week",
      ],
      ctaLabel: "Start Now on WhatsApp",
      ctaHref: WHATSAPP,
      accentClass: "border-primary/40 bg-primary/5",
    };
  }

  return {
    key: "tasker",
    title: "Tasker",
    badge: "Direct Earner",
    badgeColor: "bg-primary/15 text-primary",
    earning: estimatedEarning,
    earningLabel: "estimated weekly earnings",
    desc: "You work directly on AI task platforms. No diaspora contact needed — we help you set up a compliant account and get your first tasks. Earnings are hourly, and work is available most weeks.",
    bullets: [
      "Platforms: Outlier, Mercor, OneForma and more",
      "Up to 60 hrs of tasks available weekly on average",
      "Hourly pay — the more you work, the more you earn",
      "We handle account setup, onboarding, and your first payment",
    ],
    ctaLabel: "Start Now on WhatsApp",
    ctaHref: WHATSAPP,
    accentClass: "border-primary/40 bg-primary/5",
  };
}

function Assessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [result, setResult] = useState<Result | null>(null);

  // Which questions to show depends on answers so far
  function getActiveQuestions(): Question[] {
    const hasDiaspora = answers["diaspora"];
    if (!hasDiaspora) return [Q0];
    if (hasDiaspora === "yes") {
      const wantsTask = answers["task-interest"];
      if (!wantsTask) return [Q0, Q1];
      if (wantsTask === "yes-task") return [Q0, Q1, Q2, Q3];
      return [Q0, Q1, Q3];
    }
    const hasHours = answers["hours"];
    if (!hasHours) return [Q0, Q2];
    return [Q0, Q2, Q3];
  }

  const activeQuestions = getActiveQuestions();
  const currentQ = activeQuestions[step];
  const isLastStep = step === activeQuestions.length - 1;

  function handleAnswer(value: Answer) {
    if (!currentQ) return;
    const next = { ...answers, [currentQ.id]: value };
    setAnswers(next);

    if (isLastStep) {
      setResult(getResult(next));
    } else {
      setStep(step + 1);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  if (result) {
    return (
      <div className={`animate-fade-in-up rounded-2xl border-2 p-8 ${result.accentClass}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${result.badgeColor}`}>
              {result.badge}
            </span>
            <h3 className="font-display mt-3 text-3xl font-extrabold text-foreground">{result.title}</h3>
          </div>
          <button onClick={reset} className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground">
            <RotateCcw className="h-3.5 w-3.5" /> Retake
          </button>
        </div>

        <div className="mt-6 flex items-end gap-2">
          <span className="font-display text-5xl font-extrabold text-accent">{result.earning}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{result.earningLabel}</p>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{result.desc}</p>

        <ul className="mt-5 space-y-2">
          {result.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {b}
            </li>
          ))}
        </ul>

        <Button asChild size="lg" className="mt-8 w-full bg-primary text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-lg sm:w-auto">
          <a href={result.ctaHref} target="_blank" rel="noopener noreferrer">
            {result.ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>Question {step + 1} of {activeQuestions.length}</span>
          <span>{Math.round(((step) / activeQuestions.length) * 100)}% done</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${(step / activeQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {currentQ && (
        <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Question {step + 1}
          </p>
          <h3 className="font-display mt-2 text-xl font-bold text-foreground sm:text-2xl">
            {currentQ.text}
          </h3>
          {currentQ.sub && (
            <p className="mt-2 text-sm text-muted-foreground">{currentQ.sub}</p>
          )}

          <div className="mt-6 flex flex-col gap-3">
            {currentQ.options.map(({ value, label, icon }) => (
              <button
                key={value}
                onClick={() => handleAnswer(value)}
                className="group flex w-full items-center gap-4 rounded-xl border border-border/60 bg-background p-4 text-left transition-all duration-200 hover:border-accent/60 hover:bg-accent/5 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                  {icon}
                </div>
                <span className="font-display font-semibold text-foreground">{label}</span>
                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back
            </button>
          )}
        </div>
      )}
    </div>
  );
}
