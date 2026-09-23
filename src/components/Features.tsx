import featAssets from "../assets/feat-assets.png";
import featAutomation from "../assets/feat-automation.png";
import featAnalytics from "../assets/feat-analytics.png";
import featCashflow from "../assets/feat-cashflow.png";
import featCross from "../assets/feat-cross.png";
import featSecurity from "../assets/feat-security.png";
import Reveal from "./Reveal";
import { FeatureCard, SectionHeading } from "./Section";

/* fit-to-width: whole illustration visible, never cropped */
const IMG = "h-full w-full object-contain";

const CARDS = {
  assets: {
    img: featAssets,
    alt: "Clean dashboard UI displaying asset categories and portfolio balance at a glance",
    title: "Smart Asset Management",
    body: "Manage all your assets in one simple dashboard.",
  },
  cashflow: {
    img: featCashflow,
    alt: "Transfer screen showing send and receive flow with low fee indicator",
    title: "Smart Cash Flow",
    body: "Keep income and expenses balanced in real time.",
  },
  analytics: {
    img: featAnalytics,
    alt: "Analytics panel with live performance charts and asset tracking metrics",
    title: "Real-Time Analytics",
    body: "Track performance with live data and insights.",
  },
  security: {
    img: featSecurity,
    alt: "Security settings screen showing multi-layer protection and authentication status",
    title: "Advanced Security System",
    body: "Multi-layer security keeps your assets protected.",
  },
  cross: {
    img: featCross,
    alt: "Mobile and desktop views running across multiple devices simultaneously",
    title: "Cross-Platform Access",
    body: "Multi-layer protection with encryption, authentication, and real-time monitoring built in.",
  },
  automation: {
    img: featAutomation,
    alt: "Automation rule builder interface with custom trigger and action configuration",
    title: "Smart Automation",
    body: "Automate actions based on your custom rules.",
  },
};

function Card({
  c,
  delay,
  imgStyle,
}: {
  c: (typeof CARDS)[keyof typeof CARDS];
  delay: number;
  imgStyle?: React.CSSProperties;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <FeatureCard
        art={<img src={c.img} alt={c.alt} loading="lazy" className={IMG} style={imgStyle} draggable={false} />}
        title={c.title}
        body={c.body}
      />
    </Reveal>
  );
}

export default function Features() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
        <SectionHeading
          id="feature"
          eyebrow="Core Features"
          title={
            <>
              Everything You Need to
              <br />
              Stay in Full Control
            </>
          }
          subtitle="Farz combines powerful tools with a clean, intuitive experience — helping you manage, track, and grow your assets effortlessly."
        />

        {/* Row 1 — wide card leads */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-[1.42fr_1fr_1fr]">
          <Card c={CARDS.assets} delay={0} imgStyle={{ clipPath: "inset(1% 0 0 0)" }} />
          <Card c={CARDS.cashflow} delay={90} />
          <Card c={CARDS.analytics} delay={180} />
        </div>

        {/* Row 2 — wide card in the middle */}
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1.42fr_1fr]">
          <Card c={CARDS.security} delay={0} />
          <Card c={CARDS.cross} delay={90} />
          <Card c={CARDS.automation} delay={180} />
        </div>
      </div>
    </section>
  );
}
