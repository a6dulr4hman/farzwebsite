import secAssets from "../assets/sec-assets.png";
import secAuth from "../assets/sec-auth.png";
import secMonitor from "../assets/sec-monitor.png";
import secAutomation from "../assets/sec-automation.png";
import Reveal from "./Reveal";
import { Eyebrow, FeatureCard } from "./Section";

export default function Security() {
  return (
    <section id="security" className="relative scroll-mt-24 py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-6">
        <Reveal>
          <Eyebrow>Security</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-[820px] text-[38px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[52px] lg:text-[60px]">
            <span className="block">Built to Protect What</span>
            <span className="mt-3 block lg:mt-4">Matters Most to You</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-[560px] text-[19px] leading-[1.55] text-ink-mute">
            Your assets and data are protected with advanced security systems designed to keep everything safe,
            private, and under your control.
          </p>
        </Reveal>

        {/* Row 1 */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2 lg:pr-[34%]">
          <Reveal>
            <FeatureCard
              art={<img src={secAssets} alt="Secure asset management panel with encrypted storage and access control indicators" loading="lazy" className="h-full w-full object-cover" draggable={false} />}
              title="Smart Asset Management"
              body="Manage all your assets in one simple dashboard."
            />
          </Reveal>
          <Reveal delay={90}>
            <FeatureCard
              art={<img src={secAuth} alt="Global transfer screen with end-to-end encryption and fraud detection badge" loading="lazy" className="h-full w-full object-cover" draggable={false} />}
              title="Secure Authentication"
              body="Protect your assets with multi-factor authentication and biometrics."
            />
          </Reveal>
        </div>

        {/* Row 2 — offset to the right, like the production layout */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.9fr_1fr] lg:pl-[17%]">
          <Reveal>
            <FeatureCard
              art={<img src={secMonitor} alt="Multi-layer security dashboard showing firewall, authentication, and monitoring status" loading="lazy" className="h-full w-full object-cover" draggable={false} />}
              title="Advanced Security System"
              body="Multi-layer security keeps your assets protected."
            />
          </Reveal>
          <Reveal delay={90}>
            <FeatureCard
              art={<img src={secAutomation} alt="Automated security rule interface with real-time threat response configuration" loading="lazy" className="h-full w-full object-cover" draggable={false} />}
              title="Smart Automation"
              body="Automate actions based on your custom rules."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
