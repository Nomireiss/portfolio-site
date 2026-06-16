"use client";

import { useRouter } from "next/navigation";

const INTER = "Inter, sans-serif";

const projects = [
  { title: "Nylas", descriptor: "Developer infrastructure, scaled", image: "/MacBook Pro 16-inch Space Black on the Dark.png", href: "/work/nylas" },
  { title: "SeeTree", descriptor: "Agricultural IoT across eight industries", image: "/Untitled design - 2026-04-20T001356.456.png", href: "/work/seetree" },
  { title: "MyTzedakah", descriptor: "Consumer fintech, end-to-end", image: "/MTF Card.png", href: "/work/mytzedakah" },
];

export default function ProjectGallery() {
  const router = useRouter();

  return (
    <section id="work" style={{ backgroundColor: "#ffffff", padding: "64px 0 80px" }}>
      <div className="w-full max-w-[1280px] mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
        {projects.map((project, i) => (
          <div key={i}>
            {/* Card */}
            <div
              onClick={() => project.href && router.push(project.href)}
              style={{
                cursor: "pointer",
                aspectRatio: "3 / 4",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#1a1a1a",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%", objectFit: "cover",
                }}
              />
            </div>
            {/* Title below card */}
            <p style={{
              fontFamily: INTER,
              fontSize: "24px",
              fontWeight: 600,
              color: "#000000",
              margin: "16px 0 0",
            }}>
              {project.title}
            </p>
            <p style={{
              fontFamily: INTER,
              fontSize: "0.95rem",
              fontWeight: 400,
              color: "#737373",
              margin: "4px 0 0",
            }}>
              {project.descriptor}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
