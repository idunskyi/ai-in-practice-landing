/* global React */
const { useState: useState2 } = React;

/* ============================================================
   Instructor
   ============================================================ */
function Instructor({ photo }) {
  return (
    <section className="paper" id="instructor" data-screen-label="08 Instructor">
      <div className="shell">
        <div className="sec-head" style={{ marginBottom: 56 }}>
          <span className="eyebrow">About the instructor</span>
          <h2 className="h2">Hello, I'm Ivan Dunskyi.</h2>
        </div>

        <div className="instr-grid">
          <div className="instr-photo">
            <img src={photo} alt="Ivan Dunskyi" />
            <div className="caption">
              <span>Ivan Dunskyi</span>
              <span>Founder · Demigos</span>
            </div>
          </div>

          <div className="instr-body">
            <p>
              I've spent more than 15 years building software — 60+ implementations
              across startups and companies in different industries, with healthcare
              as my focus for the last 6 years.
            </p>
            <p>
              I'm Founder and CEO of Demigos, a healthcare AI consultancy, and I lead
              the Tech & AI Interest Group within <a href="https://medvale.com/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "1px solid currentColor", opacity: 0.85 }}>Medvale</a>, the invite-only community
              of US healthcare executives where this program was first piloted.
            </p>
            <p className="small">
              Working with my clients and my peers in the Medvale community, I kept
              seeing the same thing: executives who are eager to use AI, but don't
              have the time to get from intention to action. After years of seeing
              what works and what fails in software, and listening to what clients
              and peers were telling me, I built this program.
            </p>
            <p className="small">
              As a practitioner, what excites me most is seeing participants walk
              away with real, measurable business outcomes — things they actually
              built, things their teams actually use.
            </p>

            <div className="instr-stats">
              <div className="instr-stat">
                <div className="n">15<span style={{ fontSize: "0.5em", verticalAlign: "super", opacity: 0.7 }}>+</span></div>
                <div className="l">Years in software</div>
              </div>
              <div className="instr-stat">
                <div className="n">60<span style={{ fontSize: "0.5em", verticalAlign: "super", opacity: 0.7 }}>+</span></div>
                <div className="l">Implementations</div>
              </div>
              <div className="instr-stat">
                <div className="n">6<span style={{ fontSize: "0.5em", verticalAlign: "super", opacity: 0.7 }}>yr</span></div>
                <div className="l">Healthcare focus</div>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/ivan-dunskyi/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.6, borderBottom: "1px solid currentColor", paddingBottom: 2, transition: "opacity .2s ease" }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Testimonials — 3 video placeholders + written quotes
   ============================================================ */
function Testimonials() {
  const videos = [
    { id: "6wm9ncdQB5c", name: "Michael Snelling", role: "Chief Revenue Officer, Revenue Group", outcome: "10–15 hrs/month saved. Built an AI regulation-tracking agent." },
    { id: "ipva7tMG9K4", name: "Tom Reinhardt", role: "CEO, Cascade Medical Center", outcome: "First AI governance policy approved and rolling out district-wide in 5 weeks." },
    { id: "iEjj6ubBq-k", name: "Tim Raderstorf", role: "Co-Founder & Chief Clinical Officer, Steadywell", outcome: "Sales pipeline grew from 14 clients to 60+." },
  ];
  const quotes = [
    {
      q: "It pushed me into the deep end, to roll up my sleeves and start using AI. I now start every task, every project thinking about how AI can do this for me faster and more efficiently.",
      who: "Michael Snelling",
      role: "Chief Revenue Officer, Revenue Group",
    },
    {
      q: "I'm running an AI company and I learn something practical and new each session. We're now AI-first in our own operations, not just for our patients.",
      who: "Tim Raderstorf",
      role: "Co-Founder & Chief Clinical Officer, Steadywell",
    },
    {
      q: "I was able to lead my organization to develop that structure and governance around AI.",
      who: "Tom Reinhardt",
      role: "CEO, Cascade Medical Center",
    },
    {
      q: "I can use most of these items right away. The presentation had great clarity.",
      who: "Amber Jordan & Kyle Rickner",
      role: "CEO Desert Sage Health Centers · Co-founder Primary Health Partners",
    },
  ];
  return (
    <section className="ink" id="testimonials" data-screen-label="09 Testimonials">
      <div className="shell">
        <div className="sec-head">
          <span className="eyebrow">What the cohort said</span>
          <h2 className="h2">Hear it from the room, not the brochure.</h2>
        </div>

        <div className="test-videos">
          {videos.map((v, i) => (
            <div key={i} className="test-video">
              <div className="test-video-embed">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={`${v.name} testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="meta">
                <h3 className="name">{v.name}</h3>
                <div className="role">{v.role}</div>
                {v.outcome && <div className="outcome">{v.outcome}</div>}
              </div>
            </div>
          ))}
        </div>

        <div className="test-quotes">
          {quotes.map((t, i) => (
            <div key={i} className="tquote">
              <p className="q">“{t.q}”</p>
              <div className="who">
                <strong>{t.who}</strong> · {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Pricing
   ============================================================ */
function Pricing() {
  const tiers = [
    {
      name: "INDIVIDUAL",
      price: "$1,500",
      unit: "/ seat",
      per: null,
      tagline: "For the single leader getting ahead of AI.",
      bullets: [
        "All 5 live sessions, capped at 15 peers",
        "Every framework, template, and prompt library",
        "working agents on your workflows that save time and money",
        "A board-ready AI roadmap",
        "Access to the AI Executives Network",
      ],
      smallPrint: null,
      cta: "Apply →",
      ctaHref: "https://calendly.com/i-dunskiy-1/application-for-ai-in-practice-course",
      featured: false,
    },
    {
      name: "TEAM OF 3",
      price: "$3,900",
      unit: null,
      per: "$1,300 / seat",
      tagline: "Bring the 2 people who'll implement with you.",
      bullets: [
        "3 seats — you, plus your revenue, compliance, and ops leads",
        "1 shared roadmap, not 3 competing plans",
        "$1,300 per seat — save $600 vs. individual",
        "Everything in Individual, for all 3 seats",
      ],
      smallPrint: "Add seats at $1,300, up to 5 per org. Sending 6+? See Education + Implementation.",
      cta: "Apply →",
      ctaHref: "https://calendly.com/i-dunskiy-1/application-for-ai-in-practice-course",
      featured: true,
    },
    {
      name: "EDUCATION + IMPLEMENTATION",
      price: "Custom",
      unit: null,
      per: null,
      tagline: "For organizations moving from learning to rollout.",
      bullets: [
        "Program tailored to your team, workflows, and AI strategy",
        "We build the automations alongside your people",
        "Governance and roadmap set up for your org",
        "Scope, timeline, and price after a discovery call",
      ],
      smallPrint: null,
      // TODO: replace with a dedicated discovery-call booking URL when available
      cta: "Book a discovery call →",
      ctaHref: "https://calendly.com/i-dunskiy-1/ai-in-practice-education-implementation",
      featured: false,
    },
  ];

  return (
    <section className="paper-3" id="pricing" data-screen-label="10 Pricing">
      <div className="shell">
        <div className="sec-head">
          <span className="eyebrow">COHORT 2 · ENROLLMENT</span>
          <h2 className="h2">Choose your way in.</h2>
          <p className="lead">
            One seat, a team of three, or a tailored org engagement. Every path starts with a 30 minute application call where we discuss your needs and how this program can help you.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((t) => (
            <div key={t.name} className={"tier" + (t.featured ? " featured" : "")}>
              {t.featured && <span className="badge">BEST VALUE</span>}
              <div className="name">{t.name}</div>
              <div className="price">
                {t.price}
                {t.unit && <span className="per"> {t.unit}</span>}
                {t.per && <span className="per"> · {t.per}</span>}
              </div>
              <p className="desc" style={{ flex: "none" }}>{t.tagline}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                {t.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 13, lineHeight: 1.45, opacity: 0.82, paddingLeft: 14, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0 }}>•</span>{b}
                  </li>
                ))}
              </ul>
              {t.smallPrint && (
                <p style={{ fontSize: 11, lineHeight: 1.5, opacity: 0.55, marginTop: 4 }}>{t.smallPrint}</p>
              )}
              <a
                href={t.ctaHref}
                className={"btn " + (t.featured ? "btn-primary" : "btn-ghost-light")}
                style={{ marginTop: 8, minHeight: 44, alignSelf: "flex-start" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>


        <p className="mute" style={{ marginTop: 12, fontSize: 12, letterSpacing: "0.02em", textAlign: "center", opacity: 0.6 }}>
          Questions? <a href="mailto:i.dunskiy@demigos.com" style={{ borderBottom: "1px solid currentColor" }}>i.dunskiy@demigos.com</a>
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQ() {
  const faqs = [
    {
      q: "How much time will this actually take from my week?",
      a: [
        "Five 90-minute live sessions, delivered every other week over ten weeks. Between sessions, a Slack channel for questions and peer discussion.",
        "Plan on another 2–3 hours per week to apply what you built — most participants save more time per week than that within two weeks of Module 2.",
      ],
    },
    {
      q: "I have a CIO/CTO handling our AI. Do I need this?",
      a: [
        "Your CIO handles the technology. You handle the strategy, the budget, and the board. This program isn't about building AI systems — it's about leading AI adoption in your organization.",
        "The decisions about which AI to fund, which vendors to trust, what policies your organization needs, and how to talk about AI to your board don't sit with IT. They sit with you. This program gives you enough fluency to direct the conversation, not to do IT's job.",
      ],
    },
    {
      q: "Why not just learn this from YouTube or use ChatGPT myself?",
      a: [
        "You can learn prompting from YouTube (maybe). You can't learn how to evaluate an AI vendor's HIPAA claims, estimate ROI on a clinical AI initiative, build an AI governance policy your board will approve, or set up an AI compliance agent from YouTube videos.",
        "And you won't get a room of senior healthcare executives working through the same problems alongside you — which is where most of the real value lives.",
      ],
    },
    {
      q: "What if I'm not technical at all?",
      a: [
        "That's the design. The program is for executives who need to lead AI initiatives, not build them. No coding. No prompts to memorize. No technical prerequisites.",
        "In Cohort 1, the spread of AI knowledge ranged from \"I've never used ChatGPT\" to \"I run an AI company.\" Both groups left with something new and useful. The frameworks meet you wherever you start.",
      ],
    },
    {
      q: "Is this only for hospitals and health systems?",
      a: [
        "No. It's for any executive whose organization operates in healthcare and is subject to its regulatory, clinical, and operational realities. Cohort 1 included a rural hospital CEO, a revenue cycle management CRO, a healthtech startup CEO, and others.",
        "If your organization has HIPAA obligations, clinical workflows, or healthcare-specific buyers, the program is built for you.",
      ],
    },
    {
      q: "When does Cohort 2 start? And when's Cohort 3 if I miss this one?",
      a: [
        "Cohort 2 starts in August 2026. Cohort 3 is currently planned for November 2026 but won't be announced publicly until Cohort 2 is full.",
        "If you're sure this is for you, Cohort 2 is the right cohort to apply for.",
      ],
    },
    {
      q: "What if I miss a live session?",
      a: [
        "All sessions are recorded and shared with the cohort within 24 hours. The Slack channel stays active for questions.",
        "Some participants miss the occasional live session and still get full value — but the live format is where the cohort dynamic happens, so we recommend prioritizing live attendance whenever possible.",
      ],
    },
  ];
  return (
    <section className="paper" id="faq" data-screen-label="11 FAQ">
      <div className="shell">
        <div className="sec-head">
          <span className="eyebrow">Questions, answered</span>
          <h2 className="h2">Everything else you'd want to know.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={i} className="faq" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <span className="sign" aria-hidden />
              </summary>
              <div className="answer">
                {f.a.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Final CTA
   ============================================================ */
function FinalCTA() {
  return (
    <section className="final" id="apply" data-screen-label="12 Apply">
      <div className="shell">
        <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
          Ready to apply?
        </span>
        <h2 className="h2" style={{ marginTop: 28 }}>
          One of <em style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "var(--accent-soft)" }}>15&nbsp;leaders</em> in the room.
        </h2>
        <p className="lead">
          The next step is a 15-minute call. If Cohort 2 is the right fit for you —
          and you're the right fit for Cohort 2 — you'll be one of 15 healthcare
          leaders in the room.
        </p>
        <div className="hero-actions">
          <a href="https://calendly.com/i-dunskiy-1/application-for-ai-in-practice-course" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Apply for Cohort 2 <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
        <p className="mute" style={{ marginTop: 36, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          8 founding-rate seats remaining
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  return (
    <footer data-screen-label="13 Footer">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <div className="foot-mark">AI in Practice</div>
            <p style={{ opacity: 0.65, fontSize: 14, lineHeight: 1.55, maxWidth: "38ch", margin: 0 }}>
              The Healthcare Executive Program. An invite-only cohort program piloted
              inside the Medvale network of US healthcare executives.
            </p>
          </div>
          <div>
            <h4>Program</h4>
            <ul>
              <li><a href="#why">The problem</a></li>
              <li><a href="#audience">Who it's for</a></li>
              <li><a href="#program">What you build</a></li>
              <li><a href="#curriculum">Modules</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:i.dunskiy@demigos.com">i.dunskiy@demigos.com</a></li>
              <li><a href="#">Demigos · healthcare AI consultancy</a></li>
              <li><a href="https://medvale.com/" target="_blank" rel="noopener noreferrer">Medvale · executive network</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 AI in Practice · Built with the Medvale network</span>
          <span>Cohort 02 · August 2026</span>
        </div>
      </div>
    </footer>
  );
}

window.Components2 = { Instructor, Testimonials, Pricing, FAQ, FinalCTA, Footer };
