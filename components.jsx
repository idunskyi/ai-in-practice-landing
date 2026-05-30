/* global React */
const { useState, useEffect } = React;

/* ----------------------------------------------------------------
   Reusable logo lockup — rebuilt because original SVG only contained
   the tagline (the big wordmark glyphs were missing image refs).
   ---------------------------------------------------------------- */
function AIPLogo({ small = false }) {
  return (
    <div className="aip-mark" aria-label="AI in Practice — The Healthcare Executive Program">
      <div className="big" style={small ? { fontSize: 16 } : null}>AI&nbsp;in&nbsp;Practice</div>
      <div className="rule" />
      <div className="small">The Healthcare Executive Program</div>
    </div>
  );
}

function scrollToTop() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

const NAV_LINKS = [
  { href: "#program", label: "Program" },
  { href: "#builds", label: "Cohort 1 builds" },
  { href: "#instructor", label: "Instructor" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const APPLY_URL = "https://calendly.com/i-dunskiy-1/application-for-ai-in-practice-course";

/* ============================================================
   Top nav
   ============================================================ */
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="shell nav-row">
        <a
          href="#"
          className="nav-logo"
          aria-label="AI in Practice — back to top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
            closeMenu();
          }}
        >
          <AIPLogo />
        </a>
        <div className="nav-links">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Apply for Cohort 2 <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            className={"nav-menu-toggle" + (menuOpen ? " is-open" : "")}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span className="nav-menu-bar" aria-hidden />
            <span className="nav-menu-bar" aria-hidden />
            <span className="nav-menu-bar" aria-hidden />
          </button>
        </div>
      </div>

      <div
        id="nav-mobile-menu"
        className={"nav-mobile" + (menuOpen ? " is-open" : "")}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : ""}
      >
        <button
          type="button"
          className="nav-mobile-backdrop"
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <div className="nav-mobile-panel">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-mobile-cta"
            onClick={closeMenu}
          >
            Apply for Cohort 2 <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function Hero({ heroImage }) {
  return (
    <section className="hero ink" data-screen-label="01 Hero">
      <div className="hero-side-ticks" aria-hidden />
      <div className="shell" style={{ width: "100%" }}>
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Build your healthcare AI <em>strategy</em> in five live sessions.
            </h1>
            <p className="hero-sub">
              For C-suite and VP-level healthcare leaders. Leave with a board-ready
              strategy, an approved AI use policy, and working AI agents on your own
              systems — built by you, during the program.
            </p>

            <div className="hero-actions">
              <a href="https://calendly.com/i-dunskiy-1/application-for-ai-in-practice-course" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Apply for Cohort 2 <span className="arrow" aria-hidden>→</span>
              </a>
              <a href="#program" className="btn btn-ghost-light">
                See what you'll build
              </a>
            </div>

            <div className="hero-meta-line">5 modules · 10 weeks · Live cohort</div>

            <div className="hero-seats">
              <span className="dot" />
              8 founding-rate seats remaining · 15 seats maximum
            </div>
          </div>

          <div className="hero-aside">
            <div className="hero-rating">
              <span className="num">9.5<span style={{ fontSize: 14, opacity: 0.5 }}>/10</span></span>
              <span className="lbl">Rated by 14 senior US healthcare executives in Medvale's invite-only network.</span>
            </div>

            <div className="hero-art">
              <img src={heroImage} alt="AI sparring partner — cinematic render from Module 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Trust strip
   ============================================================ */
function Trust() {
  const companies = [
    "Cascade Medical Center",
    "Revenue Group",
    "Steadywell",
    "Docpace",
    "Desert Sage Health Centers",
    "Primary Health Partners",
  ];
  return (
    <section className="trust" data-screen-label="02 Trust">
      <div className="shell">
        <div className="trust-row">
          <p className="trust-label">Cohort 01 leaders from</p>
          <div className="trust-companies">
            {companies.map(c => (
              <span key={c} className="trust-company">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Problem
   ============================================================ */
function Problem() {
  const quotes = [
    "My board is asking what our AI strategy is. I don't have a specific, defensible answer.",
    "My team is already using ChatGPT. I have no policy, no oversight, no audit trail.",
    "Vendors are pitching me AI solutions. I can't tell the real ones from expensive experiments.",
    "I'm watching competitors move on AI. I'm still trying to figure out where to start.",
    "I don't need to become a data scientist. I need to know enough to lead this.",
  ];
  return (
    <section className="paper-3" id="why" data-screen-label="03 Problem">
      <div className="shell">
        <div className="problem-grid">
          <div className="sec-head">
            <span className="eyebrow">The problem we built this for</span>
            <h2 className="h2">
              You're under pressure, and you don't have time for theory.
            </h2>
            <p className="lead">
              We've heard the same five sentences from healthcare executives across the
              Medvale network for the last 18 months. If any of them sound like you,
              this program is built for you.
            </p>
          </div>

          <div className="quotes">
            {quotes.map((q, i) => (
              <div key={i} className="quote" style={{ marginLeft: i % 2 ? 24 : 0 }}>
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Audience
   ============================================================ */
function Audience() {
  const cards = [
    {
      n: "01",
      title: "CEOs & Organizational Leaders",
      roles: "CEO · Founder · Executive Director · Hospital Administrator",
      body: "You don't yet have a coherent AI strategy, and your team is using AI tools without coordination. You need to lead this — not delegate it to IT — with enough fluency to direct the conversation with your leadership team and your board.",
    },
    {
      n: "02",
      title: "Revenue & Growth Leaders",
      roles: "CEO · CRO · Founder · Sales Executive",
      body: "You want AI to help you close more deals, see the pipeline clearly, and coach your team — without hiring another analyst.",
    },
    {
      n: "03",
      title: "Operations & Compliance Leaders",
      roles: "COO · Chief of Staff · VP Operations · Compliance Officers",
      body: "You need to govern AI usage across your organization before regulators — or an incident — force the conversation. You're dealing with shadow AI, unclear PHI-handling rules, and a regulatory landscape that didn't exist 18 months ago.",
    },
  ];
  return (
    <section className="ink" id="audience" data-screen-label="04 Audience">
      <div className="shell">
        <div className="sec-head">
          <span className="eyebrow">Who this is built for</span>
          <h2 className="h2">
            Three executive roles.<br/>Three different entry points.
          </h2>
          <p className="lead">Find yours.</p>
        </div>

        <div className="audience-grid">
          {cards.map(c => (
            <div key={c.n} className="audience-card">
              <span className="num">{c.n}</span>
              <h3 className="h3">{c.title}</h3>
              <div className="roles">{c.roles}</div>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Walkaway — three columns of outputs
   ============================================================ */
function Walkaway() {
  const cols = [
    {
      h: "Strategic outputs",
      items: [
        "A board-ready AI strategy for your organization",
        "Your organization's first AI use policy",
        "A six-step framework for identifying high-value AI opportunities",
      ],
    },
    {
      h: "Working systems on your own tools",
      items: [
        "Working AI agents on your own systems (HubSpot, Slack, email, calendar, CRM)",
        "An AI compliance agent that tracks regulatory updates",
        "AI sparring partners for strategy, sales, board prep, and operations",
      ],
    },
    {
      h: "Tools, materials, and community",
      items: [
        "A vendor due diligence checklist (HIPAA + clinical)",
        "All session recordings, slide decks, templates, and prompt libraries",
        "Ongoing access to the AI Executives Network",
      ],
    },
  ];
  return (
    <section className="paper" id="program" data-screen-label="05 Walkaway">
      <div className="shell">
        <div className="sec-head">
          <span className="eyebrow">What you walk home with</span>
          <h2 className="h2">Real outputs. Not slides about outputs.</h2>
          <p className="lead">
            Every participant builds strategic outputs that define your further AI
            strategy and agents that save hours of manual work across departments.
          </p>
        </div>

        <div className="walk-grid">
          {cols.map(col => (
            <div key={col.h} className="walk-col">
              <h3>{col.h}</h3>
              <ul>
                {col.items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Cohort 1 Builds
   ============================================================ */
function Builds() {
  const cases = [
    {
      n: "01",
      name: "Michael Snelling",
      role: "CRO, Revenue Group",
      desc: "~200-person revenue cycle management and business process outsourcing company",
      problem:
        "Weekly sales meeting prep took hours of manual HubSpot data pulling. The compliance team had no systematic way to track regulation changes.",
      built:
        "An AI-powered pipeline reporting agent in HubSpot (one prompt pulls deal data into a multi-tab report), an outreach list segmentation agent for the marketing team, and a Cowork agent that tracks regulatory changes and delivers them to compliance and management.",
      result:
        '<em>10–15 hours saved monthly for the CRO.</em> <em>2–4 hours saved weekly for the compliance team.</em> Their reaction to the regulation tracking agent: “Holy shit.”',
    },
    {
      n: "02",
      name: "Tom Reinhardt",
      role: "CEO, Cascade Medical Center Hospital District",
      desc: "Rural health system",
      problem:
        "No AI governance framework. Staff experimenting with consumer AI tools. No clarity on approved tools, PHI handling, or adoption process.",
      built:
        "A cross-functional AI governance committee, the organization's first AI use policy (approved tools, PHI-handling rules, adoption process), and a board-approved AI strategy for the district.",
      result:
        "<em>Built a complete AI strategy and governance foundation from zero</em> — protecting patient privacy, establishing PHI-handling guardrails, and sidestepping the compliance and reputational risks most organizations encounter when adopting AI without a framework. Policy approved and rolling out district-wide in five weeks.",
    },
    {
      n: "03",
      name: "Tim Raderstorf",
      role: "Co-Founder & Chief Clinical Officer, Steadywell",
      desc: "Healthcare AI startup",
      problem:
        "Using AI exclusively for patient-facing features. No systematic use of AI internally for sales, customer outreach, or business operations.",
      built:
        "Applied Claude to back-end operations — built a Google Sheets-based CRM pipeline and AI-assisted sales workflows to identify and reach prospective clients at scale.",
      result:
        "Sales pipeline grew from <em>12–14 clients to over 60</em>. Steadywell moved from AI-first in patient care to <em>AI-first across the full business</em>.",
    },
  ];
  return (
    <section className="ink-2" id="builds" data-screen-label="06 Builds">
      <div className="shell">
        <div className="sec-head">
          <span className="eyebrow">What Cohort 1 built in five weeks</span>
          <h2 className="h2">
            Three real organizations. Three different challenges.
          </h2>
          <p className="lead" style={{ opacity: 0.72 }}>
            Five weeks of live sessions. Here's what they built.
          </p>
        </div>

        <div className="builds-list">
          {cases.map(c => (
            <article key={c.n} className="build">
              <div className="build-head">
                <div className="num">{c.n}</div>
                <h3>{c.name}</h3>
                <div className="org">{c.role}</div>
                <p className="desc">{c.desc}</p>
              </div>
              <div className="build-body">
                <div className="build-row"><span className="k">Problem</span><span className="v">{c.problem}</span></div>
                <div className="build-row"><span className="k">Built</span><span className="v">{c.built}</span></div>
                <div className="build-row result"><span className="k">Result</span><span className="v" dangerouslySetInnerHTML={{__html: c.result}} /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Modules
   ============================================================ */
function Modules() {
  const mods = [
    {
      n: 1,
      t: "AI Fundamentals",
      body:
        "How AI actually works. The categories that matter in healthcare and what each one can do. Where adoption really stands — and how to read hype versus substance. Real examples of what's being built today, and the risks worth knowing in both professional and personal use.",
      out: "Real cases of what's being built by previous cohort members.",
    },
    {
      n: 2,
      t: "AI for Your Daily Workflows",
      body:
        "Prompt engineering best practices, how to work with AI memory, Claude Projects. Connect AI to Slack, email, calendar, CRM, and PubMed. How to build AI agents to streamline your daily workflows.",
      out: "Your first working AI agent, template for efficient prompts, integration of AI into your daily workflows.",
    },
    {
      n: 3,
      t: "Building Your AI Strategy",
      body:
        "A six-step framework to identify high-value AI opportunities in your organization, how to check data readiness, how to decide buy vs. build, how to prioritize with a value/effort matrix, and how to produce a board-ready AI roadmap.",
      out: "Identified high-value AI opportunities, a board-ready AI roadmap with prioritized opportunities and ROI estimates.",
    },
    {
      n: 4,
      t: "Protecting Your Organization",
      body:
        "HIPAA in the AI era. Shadow AI, data governance, vendor due diligence. How to set up an AI compliance agent that saves significant time on manual research.",
      out: "AI use policy for your organization, a compliance monitoring agent, and a vendor due diligence checklist.",
    },
    {
      n: 5,
      t: "AI as a Thinking Partner",
      body:
        "The Centaur vs. Cyborg framework. AI sparring partners that challenge your strategy, pressure-test your board deck, and sharpen your sales approach.",
      out: "Your first AI advisor and the playbook to build more for strategic decisions you face.",
    },
  ];
  return (
    <section className="paper-3" id="curriculum" data-screen-label="07 Modules">
      <div className="shell">
        <div className="sec-head">
          <span className="eyebrow">Five modules · ten weeks</span>
          <h2 className="h2">A live, 90-minute session every other week.</h2>
          <p className="lead">
            Between sessions: a dedicated Slack channel for questions and peer
            discussion, with deliberate space to apply what you built before the
            next module lands.
          </p>
        </div>

        <div className="modules">
          {mods.map(m => (
            <article key={m.n} className="module">
              <div className="idx">
                0{m.n}
                <small>Module</small>
              </div>
              <div>
                <h3 className="title">{m.t}</h3>
                <p className="body">{m.body}</p>
              </div>
              <div className="outcome">
                <span className="lbl">You walk out with</span>
                <div className="out">{m.out}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Scroll to top (tablet + mobile)
   ============================================================ */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={"scroll-up" + (visible ? " is-visible" : "")}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <span className="scroll-up-icon" aria-hidden>↑</span>
    </button>
  );
}

window.Components1 = { Nav, Hero, Trust, Problem, Audience, Walkaway, Builds, Modules, AIPLogo, ScrollToTop };
