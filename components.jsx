/* global React */
const { useState, useEffect } = React;

const APPLY_URL = "https://calendly.com/i-dunskiy-1/application-for-ai-in-practice-course";

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

/* ============================================================
   Top nav
   ============================================================ */
function Nav() {
  return (
    <nav className="nav">
      <div className="shell nav-row">
        <AIPLogo />
        <div className="nav-links">
          <a href="#program">Program</a>
          <a href="#builds">Cohort 1 builds</a>
          <a href="#instructor">Instructor</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href={APPLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
          Apply for Cohort 2 <span aria-hidden>→</span>
        </a>
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
              <a href={APPLY_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
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

          <div>
            <div className="hero-rating" style={{ marginBottom: 24 }}>
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
    <section className="trust tight" data-screen-label="02 Trust">
      <div className="shell trust-row">
        <span className="trust-label">Cohort 01 leaders from</span>
        <div className="trust-companies">
          {companies.map((c, i) => (
            <React.Fragment key={c}>
              <span>{c}</span>
              {i < companies.length - 1 && <span className="sep" aria-hidden>·</span>}
            </React.Fragment>
          ))}
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
            <span className="problem-tag">→ We built this program for exactly that.</span>
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
      <div className="sec-num">№ 04 / Audience</div>
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
        "10–15 hours saved monthly for the CRO. 2–4 hours saved weekly for the compliance team. Their reaction to the regulation tracking agent: <em>“Holy shit.”</em>",
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
        "Policy approved and rolling out district-wide. Organization moved from unmanaged AI experimentation to <em>governed, strategic adoption</em> in five weeks.",
    },
    {
      n: "03",
      name: "Shelby Dabelich",
      role: "CEO, Docpace",
      desc: "Healthtech startup",
      problem:
        "No visibility into daily pipeline health. At-risk deals surfaced too late. Rep coaching was reactive, not systematic.",
      built:
        "An AI agent integrating Claude with HubSpot and Slack that reads deal activity, pushes a daily pipeline overview, flags at-risk deals with specific reasoning, and delivers per-rep coaching feedback.",
      result:
        "Leadership gets <em>daily pipeline intelligence without asking</em>. Reps get actionable improvement feedback automatically.",
    },
  ];
  return (
    <section className="ink-2" id="builds" data-screen-label="06 Builds">
      <div className="sec-num">№ 06 / Cohort 01</div>
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
        "A working mental model of how AI actually works — no jargon required. The four AI types reshaping healthcare, with real examples of what's been built. Where adoption really stands, and how to separate hype from substance.",
      out: "The ability to evaluate any AI claim — from a vendor, a board member, or a competitor — without being snowed.",
    },
    {
      n: 2,
      t: "AI for Your Daily Workflows",
      body:
        "Prompt engineering, model selection, custom instructions. Connect AI to Slack, email, calendar, CRM, and PubMed.",
      out: "Your first working AI agent, built live during the session on your own systems.",
    },
    {
      n: 3,
      t: "Building Your AI Strategy",
      body:
        "A six-step framework to identify high-value AI opportunities in your organization, check data readiness, decide buy vs. build, prioritize with a value/effort matrix, and produce a board-ready AI roadmap.",
      out: "A board-ready AI roadmap with prioritized opportunities and ROI estimates.",
    },
    {
      n: 4,
      t: "Protecting Your Organization",
      body:
        "HIPAA in the AI era. Shadow AI, data governance, vendor due diligence. How to set up an AI compliance agent that saves significant time on manual research.",
      out: "An approved AI use policy, a compliance monitoring agent, and a vendor due diligence checklist (HIPAA + clinical).",
    },
    {
      n: 5,
      t: "AI as a Thinking Partner",
      body:
        "The Centaur vs. Cyborg framework. AI sparring partners that challenge your strategy, pressure-test your board deck, and sharpen your sales approach.",
      out: "Your first AI advisor, built in 5 minutes — and the playbook to build more for any decision you face.",
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

window.Components1 = { Nav, Hero, Trust, Problem, Audience, Walkaway, Builds, Modules, AIPLogo };
