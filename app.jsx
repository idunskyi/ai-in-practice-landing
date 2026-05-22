/* global React, ReactDOM, Components1, Components2, useTweaks,
          TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle */
const { Nav, Hero, Trust, Problem, Audience, Walkaway, Builds, Modules, ScrollToTop } = window.Components1;
const { Instructor, Testimonials, Pricing, FAQ, FinalCTA, Footer } = window.Components2;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#d97757",
  "heroImage": "swirl",
  "darkHero": true,
  "showRule": true
}/*EDITMODE-END*/;

const HERO_IMAGES = {
  swirl:   "assets/swirl.png",
  glass:   "assets/glass.png",
  cyborg:  "assets/cyborg.png",
  centaur: "assets/centaur.png",
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent live
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    // derive a deeper + softer companion from the chosen accent
    root.style.setProperty("--accent-deep", shade(t.accent, -22));
    root.style.setProperty("--accent-soft", shade(t.accent, 35));
  }, [t.accent]);

  const heroImg = HERO_IMAGES[t.heroImage] || HERO_IMAGES.swirl;

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero heroImage={heroImg} />
        <Trust />
        <Problem />
        <Audience />
        <Walkaway />
        <Builds />
        <Modules />
        <Instructor photo="assets/instructor.png" />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor
            label="Accent color"
            value={t.accent}
            onChange={v => setTweak("accent", v)}
            options={["#d97757", "#c0623a", "#7a93ad", "#a48f6b", "#c69b6d", "#5e7a6a"]}
          />
        </TweakSection>

        <TweakSection title="Hero image">
          <TweakRadio
            label="Cinematic AI render"
            value={t.heroImage}
            onChange={v => setTweak("heroImage", v)}
            options={[
              { value: "swirl",   label: "Iridescent swirl" },
              { value: "glass",   label: "Glass + ribbon" },
              { value: "cyborg",  label: "Cyborg figure" },
              { value: "centaur", label: "Centaur figure" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

// Lighten / darken hex by percent (positive = lighter)
function shade(hex, pct) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const adjust = (c) => {
    const v = pct >= 0
      ? Math.round(c + (255 - c) * (pct / 100))
      : Math.round(c * (1 + pct / 100));
    return Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0");
  };
  return "#" + adjust(r) + adjust(g) + adjust(b);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
