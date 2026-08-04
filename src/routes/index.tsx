import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  MessageCircle,
  Send,
  Twitter,
  Mail,
  CheckCircle2,
  AlertTriangle,
  Lock,
  FileText,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      { title: "The RemoBryg — Compliant Remote Work & Web3 for Nigerians" },
      {
        name: "description",
        content:
          "Navigate international remote work and Web3 with compliance, clarity, and community. Build a sustainable, high-income career from Nigeria without the risks.",
      },
      { property: "og:title", content: "The RemoBryg — Compliant Remote Work & Web3 for Nigerians" },
      {
        property: "og:description",
        content:
          "Navigate international remote work and Web3 with compliance, clarity, and community. Build a sustainable, high-income career from Nigeria without the risks.",
      },
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md transition-shadow duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
            <img src="/remocon.png" alt="RemoBryg logo" className="h-8 w-8 object-contain" />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Remo<span className="text-blue-900">Bryg</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {["challenge", "solution", "how-it-works", "diaspora", "trust"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="relative transition-colors duration-200 hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {id === "how-it-works" ? "How It Works" : id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="bg-primary text-primary-foreground transition-transform duration-200 hover:scale-105 hover:bg-primary/90">
            <a href="#join">Join Community</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-hero-radial dark:bg-hero-radial-dark" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden="true" />
                Built for Nigerians, backed by compliance
              </div>
              <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-foreground">Unlock </span>
                <span className="text-accent">Global Opportunities:</span>
                <br className="hidden sm:block" />
                <span className="text-foreground"> Secure Your </span>
                <span className="italic text-primary">Remote Career</span>
                <span className="text-foreground"> &amp; </span>
                <span className="text-accent">Web3 Future</span>
                <span className="text-foreground"> from Nigeria</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Navigate the international remote work landscape with compliance, clarity, and community. Build a sustainable, high-income career without the risks.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 hover:shadow-lg">
                  <a href="#join">
                    Join The RemoBryg
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-200 hover:scale-105 hover:shadow-md">
                  <a href="#how-it-works">See How It Works</a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 transition-colors duration-200 hover:text-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>Compliance-first</span>
                </div>
                <div className="flex items-center gap-2 transition-colors duration-200 hover:text-foreground">
                  <Users className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span>Diaspora-powered</span>
                </div>
                <div className="flex items-center gap-2 transition-colors duration-200 hover:text-foreground">
                  <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>Web3-ready</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up [animation-delay:200ms]">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/20 via-hero-glow/20 to-primary/10 blur-2xl" aria-hidden="true" />
              <img
                src={heroImage}
                alt="A Nigerian professional working remotely from a modern home office"
                className="relative rounded-2xl border border-border/50 bg-card shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                width={600}
                height={450}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section id="challenge" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-destructive">The Challenge:</span>{" "}
            <span className="text-foreground">Why Most Nigerian Remote Workers Get</span>{" "}
            <span className="text-warning">Banned or Burned</span>
          </h2>
          <blockquote className="mt-6 border-l-4 border-accent pl-6 text-left text-lg italic text-muted-foreground">
            &ldquo;The remote work dream often turns into a nightmare of account bans, payment issues, and trust deficits. Many platforms are cracking down on &lsquo;hacks&rsquo; and non-compliant practices, leaving talented Nigerians frustrated and without income. The promise of Web3 remains out of reach for many due to a lack of clear, legitimate pathways.&rdquo;
          </blockquote>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProblemCard
            icon={<AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />}
            title="Account Bans"
            description="Non-compliant workarounds trigger platform algorithms, leading to permanent bans and lost income."
          />
          <ProblemCard
            icon={<Lock className="h-6 w-6 text-warning" aria-hidden="true" />}
            title="Payment Barriers"
            description="Without the right setup, receiving international payments becomes a frustrating maze of restrictions."
          />
          <ProblemCard
            icon={<Globe className="h-6 w-6 text-muted-foreground" aria-hidden="true" />}
            title="Web3 Confusion"
            description="High-opportunity Web3 roles feel inaccessible without clear, legitimate guidance and community support."
          />
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="border-y border-border/50 bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-accent">The Solution:</span>{" "}
                <span className="text-foreground">Your RemoBryg to</span>{" "}
                <span className="text-accent">Unstoppable Success</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We are building a community and a framework designed for{" "}
                <strong className="text-foreground">long-term, compliant, and high-earning remote careers</strong>{" "}
                for Nigerians.
              </p>
              <ul className="mt-8 space-y-5">
                <SolutionItem
                  icon={<ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />}
                  title="Unbannable Income"
                  description="Learn to operate within platform rules, ensuring your accounts and earnings are secure."
                />
                <SolutionItem
                  icon={<TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />}
                  title="Strategic Career Growth"
                  description="Move beyond low-paying tasks to high-value Web3 and specialized remote roles."
                />
                <SolutionItem
                  icon={<Users className="h-5 w-5 text-accent" aria-hidden="true" />}
                  title="Diaspora Empowerment"
                  description="Equip your relatives abroad with the knowledge to legally and safely support your journey."
                />
              </ul>
            </div>
            <div className="grid gap-6">
              <StatCard value="100%" label="Compliance-focused strategies" />
              <StatCard value="2 Tiers" label="From income engine to career accelerator" />
              <StatCard value="1 Mission" label="Sustainable success for Nigerians globally" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-foreground">How It Works: Your </span>
            <span className="text-accent">Two-Tier Path</span>
            <span className="text-foreground"> to Prosperity</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A clear progression from immediate income to long-term wealth.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <span className="text-sm font-bold">1</span>
              </div>
              <CardTitle className="mt-4 text-2xl">
                Tier 1: <span className="text-primary">The Income Engine</span>
              </CardTitle>
              <CardDescription className="text-base">Immediate Cash Flow &amp; Skill Building</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Focus:</strong> Legitimate AI Tasking &amp; Data Annotation (e.g., Outlier, Mercor, OneForma).
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">What You Get:</strong> Verified strategies for account creation, compliance, payment processing, and maximizing earnings on these platforms.
              </p>
              <div className="flex items-center gap-2 rounded-lg bg-surface-raised p-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                Goal: Generate consistent, reliable income while building foundational digital skills.
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <span className="text-sm font-bold">2</span>
              </div>
              <CardTitle className="mt-4 text-2xl">
                Tier 2: <span className="text-accent">The Career Accelerator</span>
              </CardTitle>
              <CardDescription className="text-base">Long-Term Wealth &amp; Web3 Mastery</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Focus:</strong> Advanced Remote Roles &amp; Web3 Opportunities (e.g., blockchain development, smart contract auditing, high-skill AI roles).
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">What You Get:</strong> Curated resources, mentorship, and direct connections to high-paying international roles.
              </p>
              <div className="flex items-center gap-2 rounded-lg bg-surface-raised p-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                Goal: Transition from task-based work to sustainable, high-impact careers.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Diaspora */}
      <section id="diaspora" className="border-y border-border/50 bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img
                src={diasporaImage}
                alt="Nigerian professionals collaborating with diaspora partners across borders"
                className="rounded-2xl border border-border/50 bg-card shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                width={600}
                height={450}
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="text-foreground">The </span>
                <span className="text-accent">Diaspora Trust</span>
                <span className="text-foreground"> Framework:</span>{" "}
                <span className="text-primary">Professionalizing Support</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We transform informal family support into a compliant, mutually beneficial partnership.
              </p>
              <div className="mt-8 space-y-5">
                <SolutionItem
                  icon={<FileText className="h-5 w-5 text-primary" aria-hidden="true" />}
                  title="Legal Guidance"
                  description="Understand the implications and best practices for receiving payments via international accounts through a diaspora sponsor."
                />
                <SolutionItem
                  icon={<Users className="h-5 w-5 text-accent" aria-hidden="true" />}
                  title="Payment Agency Model"
                  description="Learn how to structure arrangements with relatives abroad as legal entities or payment facilitators, ensuring tax compliance."
                />
                <SolutionItem
                  icon={<ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />}
                  title="Transparency &amp; Security"
                  description="Tools and templates for clear agreements, secure fund transfers, and transparent record-keeping."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-foreground">Why Trust </span>
            <span className="text-accent">The RemoBryg?</span>{" "}
            <span className="text-destructive">The Anti-Scam Seal</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            In a space filled with empty promises, we stand for integrity and sustainable success.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <TrustCard
            icon={<Lock className="h-6 w-6 text-primary" aria-hidden="true" />}
            title="No Identity Fraud"
            description="We explicitly condemn and do not promote any practices involving the misuse of personal information."
          />
          <TrustCard
            icon={<ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />}
            title="Compliance First"
            description="Our strategies are built on understanding and adhering to platform terms of service and international regulations."
          />
          <TrustCard
            icon={<Users className="h-6 w-6 text-accent" aria-hidden="true" />}
            title="Real Results, Real People"
            description="We focus on verifiable methods that lead to consistent income and career progression, not temporary hacks."
          />
        </div>
      </section>

      {/* CTA / Join */}
      <section id="join" className="border-t border-border/50 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Join The{" "}
                <span className="text-accent">RemoBryg Community</span>{" "}
                Today
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Ready to build a secure, compliant, and prosperous remote career? Join our growing community of ambitious Nigerians and their diaspora partners.
              </p>
              <div className="mt-8 space-y-4">
                <SocialLink
                  icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}
                  label="WhatsApp"
                  href="#"
                  description="Request your invite link"
                />
                <SocialLink
                  icon={<Send className="h-5 w-5" aria-hidden="true" />}
                  label="Telegram"
                  href="#"
                  description="Join the Telegram channel"
                />
                <SocialLink
                  icon={<Twitter className="h-5 w-5" aria-hidden="true" />}
                  label="Twitter / X"
                  href="#"
                  description="Follow for updates"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm sm:p-8 animate-fade-in-up [animation-delay:150ms]">
              <h3 className="text-xl font-semibold">
                Sign up for our{" "}
                <span className="text-accent">Newsletter</span>
              </h3>
              <p className="mt-2 text-primary-foreground/80">
                Get exclusive tips, compliant job alerts, and Web3 insights delivered straight to your inbox.
              </p>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-6 space-y-4"
                aria-label="Newsletter signup"
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-foreground">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30 transition-all duration-200"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive-foreground" role="alert">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent font-semibold text-accent-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-accent/90 hover:shadow-lg"
                  disabled={form.formState.isSubmitSuccessful && form.getValues("email").includes("Thanks")}
                >
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <img src="/remocon.png" alt="RemoBryg logo" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Remo<span className="text-blue-900">Bryg</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The RemoBryg. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              {["challenge", "solution", "join"].map((id) => (
                <a key={id} href={`#${id}`} className="transition-colors duration-200 hover:text-foreground">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProblemCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-border/60 bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-raised transition-transform duration-200 group-hover:scale-110">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function SolutionItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 transition-transform duration-200 hover:translate-x-1">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-3xl font-extrabold text-accent">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

function TrustCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-border/60 bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader>
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-raised">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function SocialLink({ icon, label, href, description }: { icon: React.ReactNode; label: string; href: string; description: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 transition-all duration-200 hover:scale-[1.02] hover:bg-primary-foreground/20 hover:shadow-md"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-primary-foreground">{label}</div>
        <div className="text-sm text-primary-foreground/70">{description}</div>
      </div>
    </a>
  );
}
