import { createFileRoute } from "@tanstack/react-router";
import workApi from "@/assets/work-api.jpg";
import workMobile from "@/assets/work-mobile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sujeet D — QA Engineer | Portfolio" },
      {
        name: "description",
        content:
          "QA Engineer at Amazon Chennai. Manual, API & mobile testing with Postman, Playwright and Pytest automation on AWS. Open to QA & SDET roles.",
      },
      { property: "og:title", content: "Sujeet D — QA Engineer" },
      {
        property: "og:description",
        content:
          "QA Engineer at Amazon Chennai. Manual, API & mobile testing with Postman, Playwright and Pytest automation on AWS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "mailto:sujeetds90@gmail.com";
const GITHUB = "https://github.com/Sujeet-d";
const LINKEDIN = "https://www.linkedin.com/in/sujeet-d-04ma05/";

const metrics = [
  {
    value: "70+",
    label: "high-quality defects reported to product teams",
  },
  {
    value: "50%",
    label: "less repetitive API validation via Postman automation",
  },
  {
    value: "15%",
    label: "increase in early defect detection across releases",
  },
  {
    value: "100+",
    label: "test scenarios authored for Amazon Chime SDK",
  },
];

const skillChips = [
  "Manual testing",
  "API testing",
  "Postman",
  "Playwright",
  "Pytest",
  "Python",
  "SQL",
  "AWS",
  "Jira",
  "TestRail",
];

const certifications = [
  "AWS Cloud Technical Essentials — AWS (Coursera)",
  "Introduction to Cloud Computing — IBM",
  "Agile Development and Scrum — IBM",
  "Introduction to DevOps — IBM",
  "Getting Started with Git and GitHub — IBM",
  "Introduction to Linux Commands — IBM",
];

function Dot() {
  return <span className="size-1.5 shrink-0 rounded-full bg-glow" />;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-ice/70">
      <Dot />
      {children}
    </div>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-frost/5 px-3 py-1.5 text-[12px] font-medium text-frost/70 ring-1 ring-white/10">
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-sans text-frost antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[620px] w-[620px] rounded-full bg-glow/25 blur-[150px]" />
        <div className="absolute top-1/3 -right-24 h-[560px] w-[560px] rounded-full bg-ice/20 blur-[150px]" />
        <div className="absolute bottom-[-120px] left-1/3 h-[480px] w-[480px] rounded-full bg-glow/15 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#070b12_92%)]" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-frost/10 font-display text-sm font-bold text-frost ring-1 ring-white/15">
            S
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-frost/90">
            Sujeet D
          </span>
        </div>
        <nav className="hidden items-center gap-7 text-[13px] font-medium text-frost/55 md:flex">
          <a href="#about" className="transition-colors hover:text-frost">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-frost">
            Skills
          </a>
          <a href="#impact" className="transition-colors hover:text-frost">
            Impact
          </a>
          <a href="#experience" className="transition-colors hover:text-frost">
            Experience
          </a>
          <a href="#contact" className="transition-colors hover:text-frost">
            Contact
          </a>
        </nav>
        <a
          href={EMAIL}
          className="rounded-full bg-frost/10 px-4 py-2 text-[13px] font-semibold text-frost ring-1 ring-white/15 backdrop-blur-xl transition-colors hover:bg-frost/20"
        >
          Hire me
        </a>
      </header>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-12 pb-8">
        <SectionLabel>Available for QA & SDET roles</SectionLabel>
        <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-frost md:text-7xl">
          Sujeet D.
          <br />
          <span className="text-ice/70">QA Engineer</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-frost/60 md:text-lg">
          Quality engineer at <span className="text-frost">Amazon Chennai</span>. I turn manual
          testing instincts into automated pipelines — API suites, mobile flows, and cloud-backed
          checks that catch defects before customers ever do.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={EMAIL}
            className="rounded-full bg-frost px-5 py-3 text-sm font-semibold text-background shadow-lg shadow-glow/20 transition-transform hover:-translate-y-0.5"
          >
            sujeetds90@gmail.com
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-frost/10 px-5 py-3 text-sm font-semibold text-frost ring-1 ring-white/15 backdrop-blur-xl transition-colors hover:bg-frost/20"
          >
            github.com/Sujeet-d
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-frost/10 px-5 py-3 text-sm font-semibold text-frost ring-1 ring-white/15 backdrop-blur-xl transition-colors hover:bg-frost/20"
          >
            LinkedIn
          </a>
        </div>

        <div id="skills" className="mt-10 flex scroll-mt-20 flex-wrap gap-2">
          {skillChips.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="rounded-2xl bg-surface p-6 ring-1 ring-white/10 backdrop-blur-xl"
            >
              <div className="font-display text-4xl font-bold text-frost">{metric.value}</div>
              <div className="mt-2 text-[13px] leading-snug text-frost/55">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-frost md:text-4xl">Selected work</h2>
          <span className="hidden text-[13px] text-frost/40 md:block">
            QA engineering & automation
          </span>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="group overflow-hidden rounded-3xl bg-surface ring-1 ring-white/10 backdrop-blur-xl">
            <img
              src={workApi}
              alt="Abstract frosted-glass dashboard with API test flow lines"
              width={1024}
              height={640}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="p-6">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ice/70">
                Automation
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-frost">
                API regression suite, Postman
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-frost/55">
                Collection-level runners and environment-driven checks that cut repetitive
                validation in half across Chime SDK endpoints.
              </p>
              <div className="mt-4 flex gap-2 text-[11px] font-medium text-frost/60">
                <span className="rounded-md bg-frost/5 px-2 py-1 ring-1 ring-white/10">Postman</span>
                <span className="rounded-md bg-frost/5 px-2 py-1 ring-1 ring-white/10">Python</span>
              </div>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl bg-surface ring-1 ring-white/10 backdrop-blur-xl">
            <img
              src={workMobile}
              alt="Mobile mockups with glowing test checkmarks"
              width={1024}
              height={640}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="p-6">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ice/70">
                Mobile QA
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-frost">
                Chime SDK mobile flows
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-frost/55">
                100+ scenarios covering join, mute, and hand-raise paths on iOS and Android,
                surfacing 15% more defects earlier in the cycle.
              </p>
              <div className="mt-4 flex gap-2 text-[11px] font-medium text-frost/60">
                <span className="rounded-md bg-frost/5 px-2 py-1 ring-1 ring-white/10">
                  Playwright
                </span>
                <span className="rounded-md bg-frost/5 px-2 py-1 ring-1 ring-white/10">
                  TestRail
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-10">
        <div className="relative overflow-hidden rounded-3xl bg-surface ring-1 ring-white/10 backdrop-blur-xl">
          <div className="absolute right-[-80px] top-[-80px] h-52 w-52 rounded-full bg-glow/25 blur-[90px]" />
          <div className="relative p-8 md:p-10">
            <SectionLabel>Experience</SectionLabel>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold text-frost">
                QA Engineer · Amazon
              </h3>
              <span className="text-[13px] text-frost/50">Chennai · Mar 2024 – Present</span>
            </div>
            <ul className="mt-5 grid gap-3 text-sm text-frost/60 md:grid-cols-2">
              <li className="flex gap-3">
                <Dot />
                Reported 70+ high-quality defects across API and mobile surfaces.
              </li>
              <li className="flex gap-3">
                <Dot />
                Automated validation in Postman, reducing repetitive effort by 50%.
              </li>
              <li className="flex gap-3">
                <Dot />
                Authored 100+ Chime SDK scenarios, lifting early detection 15%.
              </li>
              <li className="flex gap-3">
                <Dot />
                Onboarding docs cut new-hire training time by 40%.
              </li>
              <li className="flex gap-3">
                <Dot />
                Performed root cause analysis and regression testing before production releases.
              </li>
              <li className="flex gap-3">
                <Dot />
                Earned multiple R&R awards for process improvements and documentation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="font-display text-3xl font-bold text-frost">Education & credentials</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10 backdrop-blur-xl">
            <div className="font-display text-lg font-semibold text-frost">
              MCA — Master of Computer Applications
            </div>
            <div className="mt-1 text-[13px] text-frost/50">
              Sikkim Manipal University · 2026
            </div>
          </div>
          <div className="rounded-2xl bg-surface p-6 ring-1 ring-white/10 backdrop-blur-xl">
            <div className="font-display text-lg font-semibold text-frost">
              B.Sc Computer Science
            </div>
            <div className="mt-1 text-[13px] text-frost/50">
              K.C.S Kasi Nadar College of Arts & Science · Graduated 2023
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-2xl bg-surface p-6 ring-1 ring-white/10 backdrop-blur-xl">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ice/70">
            Certifications · 6
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[12px] font-medium text-frost/70">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-md bg-frost/5 px-2.5 py-1 ring-1 ring-white/10"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-14">
        <div className="rounded-3xl bg-surface p-8 ring-1 ring-white/10 backdrop-blur-xl md:p-10">
          <h2 className="font-display text-2xl font-bold text-frost md:text-3xl">
            Let's build something that ships clean.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-frost/55">
            Open to QA, SDET, and test-automation roles. Fastest reply via email.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={EMAIL}
              className="rounded-full bg-frost px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              sujeetds90@gmail.com
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-frost/10 px-5 py-3 text-sm font-semibold text-frost ring-1 ring-white/15 transition-colors hover:bg-frost/20"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-frost/10 px-5 py-3 text-sm font-semibold text-frost ring-1 ring-white/15 transition-colors hover:bg-frost/20"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-[12px] text-frost/35">
          © 2026 Sujeet D. · QA Engineer, Amazon Chennai
        </p>
      </footer>
    </div>
  );
}
