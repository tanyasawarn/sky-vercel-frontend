"use client";

import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  Award,
  TrendingUp,
  Code,
  Briefcase,
  Clock,
  Headphones,
  BarChart3,
  Mail,
  Phone,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Quote,
  Play,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";

/* ─── tiny helpers ─── */
const cx = (...c) => c.filter(Boolean).join(" ");

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const STATS = [
  { value: "500+", label: "Enterprise Clients", icon: Users },
  { value: "93%", label: "Satisfaction Rate", icon: Star },
  { value: "150K+", label: "Training Hours", icon: TrendingUp },
  { value: "24/7", label: "Expert Support", icon: Headphones },
];

const FEATURES = [
  {
    title: "Customized Programs",
    description:
      "Bespoke curricula engineered around your org's unique goals, skill gaps, and industry context—not off-the-shelf modules.",
    icon: Briefcase,
    accent: "#1565c0",
    tag: "Strategy",
  },
  {
    title: "Expert Instructors",
    description:
      "Industry practitioners with 10+ years in the field. Real war stories, real patterns, real results transferred to your team.",
    icon: Award,
    accent: "#0277bd",
    tag: "People",
  },
  {
    title: "Flexible Delivery",
    description:
      "On-site immersives, live virtual cohorts, or async self-paced—mix and match to fit every timezone and work style.",
    icon: Clock,
    accent: "#01579b",
    tag: "Access",
  },
  {
    title: "Hands-On Learning",
    description:
      "Lab-first pedagogy. Every concept is immediately reinforced with a real project your team can push to production.",
    icon: Code,
    accent: "#0288d1",
    tag: "Practice",
  },
  {
    title: "Ongoing Support",
    description:
      "Post-training Slack channels, office hours, and a resource library mean the learning doesn't stop when the session does.",
    icon: Headphones,
    accent: "#0277bd",
    tag: "Retention",
  },
  {
    title: "Measurable ROI",
    description:
      "Real-time dashboards show skill growth, test scores, and business-impact metrics—so you can prove value to stakeholders.",
    icon: BarChart3,
    accent: "#1565c0",
    tag: "Analytics",
  },
];

const TESTIMONIALS = [
  {
    name: "Ankit Verma",
    role: "DevOps Lead",
    company: "Infosys",
    content:
      "The CI/CD automation modules were directly applicable—our team deployed changes in the first week. Hands-on approach around real automation use cases made it stick.",
    rating: 4,
    initials: "AV",
    color: "#1565c0",
  },
  {
    name: "Priya Nair",
    role: "L&D Director",
    company: "Wipro",
    content:
      "We ran this for 14 non-technical PMs. Instructors adjusted pace dynamically—that adaptability was the difference between confusion and clarity.",
    rating: 5,
    initials: "PN",
    color: "#0277bd",
  },
  {
    name: "Daniel Foster",
    role: "Technical Program Manager",
    company: "Accenture",
    content:
      "Excellent entry point for GenAI concepts. The real-world case studies helped the team connect theory to our actual product workflows immediately.",
    rating: 4,
    initials: "DF",
    color: "#01579b",
  },
];

const ORBIT_OUTER = [
  { image: "/f1.png", angle: 0 },
  { image: "/f2.png", angle: 72 },
  { image: "/f3.png", angle: 144 },
  { image: "/f4.png", angle: 216 },
  { image: "/f5.png", angle: 288 },
];

const ORBIT_INNER = [
  { image: "/f5.png", angle: 45 },
  { image: "/f6.png", angle: 135 },
  { image: "/f7.png", angle: 225 },
  { image: "/f8.png", angle: 315 },
];

/* ═══════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════ */

function Pill({ children, variant = "blue" }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 14px",
        borderRadius: "100px",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background:
          variant === "blue"
            ? "linear-gradient(135deg,#1565c0,#0288d1)"
            : "rgba(13,71,161,0.08)",
        color: variant === "blue" ? "#fff" : "#1565c0",
        border:
          variant === "outline" ? "1.5px solid rgba(13,71,161,0.2)" : "none",
      }}
    >
      {children}
    </span>
  );
}

function StarRow({ count }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? "#1565c0" : "transparent"}
          stroke={i < count ? "#1565c0" : "#90caf9"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function Avatar({ initials, color, size = 48 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.33,
        fontWeight: 700,
        color: "#fff",
        flexShrink: 0,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {initials}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTIONS
═══════════════════════════════════════════════════════ */

function HeroSection({ rotation, innerRotation }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(160deg,#e6f7ff 0%,#f0f9ff 45%,#e3f2fd 100%)",
        padding: "6rem 0 4rem",
      }}
    >
      {/* geometric accent shapes */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "520px",
          height: "520px",
          borderRadius: "60px",
          border: "1.5px solid rgba(13,71,161,0.08)",
          transform: "rotate(20deg)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60px",
          right: "40px",
          width: "320px",
          height: "320px",
          borderRadius: "40px",
          border: "1px solid rgba(13,71,161,0.05)",
          transform: "rotate(10deg)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(1,87,155,0.06) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <Pill>Enterprise Training</Pill>

          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.8rem,5vw,4.2rem)",
              fontWeight: 400,
              lineHeight: 1.12,
              color: "#0d1b2a",
              margin: "1.5rem 0 1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Transform Your Team with{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(90deg,#1565c0,#0288d1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Future-Ready Skills
            </em>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#37474f",
              lineHeight: 1.75,
              marginBottom: "2.25rem",
              maxWidth: "480px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Empower your workforce with cutting-edge IT training programs
            designed specifically for modern enterprises. Stay ahead in the
            digital age with Skillfyme's expert-led corporate solutions.
          </p>

          <div style={{ display: "flex", gap: "12px", marginBottom: "3rem" }}>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "linear-gradient(135deg,#1565c0,#0288d1)",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 8px 24px rgba(13,71,161,0.28)",
                transition: "transform 0.2s,box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(13,71,161,0.36)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(13,71,161,0.28)";
              }}
            >
              Get Started <ArrowRight size={16} />
            </button>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "rgba(255,255,255,0.7)",
                color: "#1565c0",
                border: "1.5px solid rgba(13,71,161,0.2)",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                backdropFilter: "blur(6px)",
              }}
            >
              <Play size={15} fill="#1565c0" /> Watch Demo
            </button>
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "12px",
            }}
          >
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(13,71,161,0.1)",
                    borderRadius: "14px",
                    padding: "14px 12px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: "4px",
                    }}
                  >
                    <Icon size={14} color="#1565c0" />
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#0d1b2a",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {s.value}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "11px",
                      color: "#546e7a",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — orbital */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "560px",
              height: "560px",
            }}
          >
            {/* outer ring */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1.5px dashed rgba(13,71,161,0.15)",
              }}
            />
            {/* inner ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "1px dashed rgba(13,71,161,0.1)",
              }}
            />

            {/* outer orbit items */}
            {ORBIT_OUTER.map((item, idx) => {
              const rad = ((item.angle + rotation) * Math.PI) / 180;
              const x = Math.cos(rad) * 210;
              const y = Math.sin(rad) * 210;
              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(135deg,#1565c0,#0288d1)",
                      padding: "3px",
                      boxShadow: "0 4px 20px rgba(13,71,161,0.22)",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "16px",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt="tech"
                        width={48}
                        height={48}
                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* inner orbit items */}
            {ORBIT_INNER.map((item, idx) => {
              const rad = ((item.angle + innerRotation) * Math.PI) / 180;
              const x = Math.cos(rad) * 115;
              const y = Math.sin(rad) * 115;
              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background:
                        "linear-gradient(135deg,#0277bd,#01579b)",
                      padding: "2px",
                      boxShadow: "0 4px 14px rgba(1,87,155,0.22)",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "13px",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt="tech"
                        width={36}
                        height={36}
                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* central orb */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "148px",
                height: "148px",
                borderRadius: "50%",
                background:
                  "linear-gradient(145deg,#1565c0,#0288d1,#01579b)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 0 0 12px rgba(13,71,161,0.08), 0 0 0 24px rgba(13,71,161,0.04), 0 12px 40px rgba(13,71,161,0.36)",
              }}
            >
              <Lightbulb size={32} color="#fff" />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                AI Core
              </span>
            </div>

            {/* particle dots */}
            {[...Array(12)].map((_, i) => {
              const ang = ((i * 30 + rotation * 1.5) * Math.PI) / 180;
              const r = 252;
              return (
                <div
                  key={`p-${i}`}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: `rgba(13,71,161,${0.15 + 0.15 * Math.abs(Math.sin(i))})`,
                    transform: `translate(calc(-50% + ${Math.cos(ang) * r}px), calc(-50% + ${Math.sin(ang) * r}px))`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        padding: "7rem 0",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle watermark pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(13,71,161,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        {/* header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
          }}
        >
          <div>
            <Pill variant="outline">
              <Sparkles size={12} /> Why Skillfyme
            </Pill>
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 400,
                color: "#0d1b2a",
                margin: "1rem 0 0",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Excellence in Corporate
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "#1565c0",
                }}
              >
                Training
              </em>
            </h2>
          </div>
          <p
            style={{
              maxWidth: "380px",
              color: "#546e7a",
              lineHeight: 1.7,
              fontSize: "0.95rem",
              fontFamily: "'DM Sans', sans-serif",
              textAlign: "right",
            }}
          >
            We combine industry expertise with innovative pedagogy to deliver
            learning experiences that generate measurable business results.
          </p>
        </div>

        {/* grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1.5px",
            background: "rgba(13,71,161,0.06)",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1.5px solid rgba(13,71,161,0.08)",
          }}
        >
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const isHov = hovered === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? "#f0f9ff" : "#fff",
                  padding: "2.5rem",
                  position: "relative",
                  cursor: "default",
                  transition: "background 0.3s",
                }}
              >
                {/* tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#1565c0",
                    background: "rgba(13,71,161,0.07)",
                    padding: "3px 10px",
                    borderRadius: "100px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {f.tag}
                </div>

                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: isHov
                      ? `linear-gradient(135deg,${f.accent},#0288d1)`
                      : "rgba(13,71,161,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    transition: "background 0.3s",
                  }}
                >
                  <Icon size={22} color={isHov ? "#fff" : f.accent} />
                </div>

                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#0d1b2a",
                    marginBottom: "0.75rem",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    color: "#546e7a",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {f.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "1.25rem",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1565c0",
                    opacity: isHov ? 1 : 0,
                    transform: isHov ? "translateX(0)" : "translateX(-8px)",
                    transition: "opacity 0.3s, transform 0.3s",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Learn more <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section
      style={{
        padding: "7rem 0",
        background:
          "linear-gradient(160deg,#e6f7ff 0%,#f0f9ff 50%,#e3f2fd 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative line art */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.04,
        }}
        viewBox="0 0 1400 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="1300"
          cy="80"
          r="260"
          fill="none"
          stroke="#1565c0"
          strokeWidth="80"
        />
        <circle
          cx="100"
          cy="520"
          r="180"
          fill="none"
          stroke="#0288d1"
          strokeWidth="60"
        />
      </svg>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <Pill variant="outline">
              <Quote size={12} /> Success Stories
            </Pill>
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2rem,3.2vw,2.8rem)",
                fontWeight: 400,
                color: "#0d1b2a",
                margin: "1rem 0 1rem",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              What Our{" "}
              <em style={{ fontStyle: "italic", color: "#1565c0" }}>
                Clients Say
              </em>
            </h2>
            <p
              style={{
                color: "#546e7a",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Join 500+ satisfied enterprises that have transformed their teams
              with our training programs.
            </p>

            {/* selector cards */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {TESTIMONIALS.map((tm, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    border: `1.5px solid ${
                      active === i
                        ? "rgba(13,71,161,0.3)"
                        : "rgba(13,71,161,0.1)"
                    }`,
                    background:
                      active === i
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                >
                  <Avatar initials={tm.initials} color={tm.color} size={40} />
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0d1b2a",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {tm.name}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        color: "#78909c",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {tm.role} · {tm.company}
                    </p>
                  </div>
                  {active === i && (
                    <ChevronRight
                      size={16}
                      color="#1565c0"
                      style={{ marginLeft: "auto" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — testimonial card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(13,71,161,0.08),transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "3rem",
                border: "1.5px solid rgba(13,71,161,0.1)",
                boxShadow: "0 16px 60px rgba(13,71,161,0.1)",
                position: "relative",
              }}
            >
              {/* giant quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "2rem",
                  fontSize: "120px",
                  lineHeight: 1,
                  fontFamily: "Georgia, serif",
                  color: "rgba(13,71,161,0.06)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                "
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "1.75rem",
                }}
              >
                <Avatar initials={t.initials} color={t.color} size={56} />
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0d1b2a",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontSize: "13px",
                      color: "#78909c",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "1.15rem",
                  lineHeight: 1.75,
                  color: "#263238",
                  marginBottom: "1.75rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                "{t.content}"
              </p>

              <StarRow count={t.rating} />

              {/* badge strip */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "1.75rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(13,71,161,0.08)",
                }}
              >
                {[
                  { icon: Shield, text: "Verified Review" },
                  { icon: Zap, text: "Direct Impact" },
                ].map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <span
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#1565c0",
                        background: "rgba(13,71,161,0.07)",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <Icon size={11} /> {b.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormSection({ iframeHeight }) {
  return (
    <section
      style={{
        padding: "7rem 0",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* faint dot bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(13,71,161,0.025) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr",
          gap: "4rem",
        }}
      >
        {/* LEFT — benefits */}
        <div>
          <Pill>
            <Sparkles size={12} /> Get Started
          </Pill>

          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.8rem,2.8vw,2.6rem)",
              fontWeight: 400,
              color: "#0d1b2a",
              margin: "1.25rem 0 1rem",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Transform
            <br />
            <em style={{ fontStyle: "italic", color: "#1565c0" }}>
              Your Team?
            </em>
          </h2>

          <p
            style={{
              color: "#546e7a",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
            }}
          >
            Fill out the form and our corporate training experts will reach out
            within 24 hours to discuss your organization's needs and craft a
            customized roadmap.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {[
              "Customized training roadmap",
              "Flexible scheduling options",
              "Dedicated account manager",
              "Post-training support & resources",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 18px",
                  background:
                    "linear-gradient(160deg,#e6f7ff 0%,#f0f9ff 100%)",
                  borderRadius: "12px",
                  border: "1px solid rgba(13,71,161,0.1)",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#1565c0,#0288d1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={14} color="#fff" />
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1a2a3a",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* divider */}
          <div
            style={{
              margin: "2.5rem 0",
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(13,71,161,0.15),transparent)",
            }}
          />

          {/* contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { icon: Mail, text: "support@skillfyme.com" },
              { icon: Phone, text: "+91-9148463995" },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    color: "#37474f",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "rgba(13,71,161,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={14} color="#1565c0" />
                  </div>
                  {c.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — iframe form */}
        <div
          style={{
            background:
              "linear-gradient(160deg,#e6f7ff 0%,#f0f9ff 50%,#e3f2fd 100%)",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1.5px solid rgba(13,71,161,0.1)",
            boxShadow: "0 16px 60px rgba(13,71,161,0.1)",
          }}
        >
          <iframe
            src="https://zfrmz.in/OGxhRcriLoa6p8fMmNRP"
            style={{
              width: "100%",
              display: "block",
              height: iframeHeight,
              minHeight: "700px",
              border: "none",
            }}
            title="Zoho Form"
            scrolling="yes"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════ */
export default function Corporate() {
  const [iframeHeight, setIframeHeight] = useState("800px");
  const [rotation, setRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const handleResize = () => {
      if (window.innerWidth <= 768) setIframeHeight("750px");
      else if (window.innerWidth <= 1024) setIframeHeight("800px");
      else setIframeHeight("850px");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRotation((p) => (p + 0.7) % 360);
      setInnerRotation((p) => (p - 0.5) % 360);
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <HeroSection rotation={rotation} innerRotation={innerRotation} />
        <FeaturesSection />
        <TestimonialsSection />
        <FormSection iframeHeight={iframeHeight} />
      </div>
    </>
  );
}