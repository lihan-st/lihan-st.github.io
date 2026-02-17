import React from "react";
import styles from "./styles.module.css";

const PROJECTS = [
  // {
  //   id: "p1",
  //   no: "01.",
  //   title: "Web UI Automation — Playwright",
  //   desc: "WebUI automation using Playwright and PyTest, following POM design and CI-ready execution.",
  //   tags: ["Playwright", "PyTest", "POM", "GitHub Actions"],
  //   image: "/img/projects/automationexercise.png", 
  //   links: [
  //     { type: "github", href: "https://github.com/your/repo" },
  //   ],
  // },
  // {
  //   id: "p2",
  //   no: "02.",
  //   title: "API Testing & CI Integration",
  //   desc: "REST API testing with PyTest/Postman, integrated into GitHub Actions for regression coverage.",
  //   tags: ["REST", "PyTest", "Postman", "CI"],
  //   image: "/img/projects/api.png",
  //   links: [{ type: "github", href: "https://github.com/your/repo2" }],
  // },
  {
    id: "p1",
    no: "01.",
    title: "HIL Automation Testing System",
    desc: "This system integrated with hardware and software subsystems is used for embedded software system-level functional and regression automation testing with high performance.",
    tags: ["Hardware-in-the-loop(HIL)", "Automation", "CANoe", "CAPL", "Python","Simulink"],
    image: "/img/projects/hil.png",

  },
    {
    id: "p2",
    no: "02.",
    title: "Embeded Software Battery Management System(BMS) Testing",
    desc: "System-level functional, fault-injection and regression automation & manualtesting for BMS software with HIL system.",
    tags: ["Embedded Software", "CANoe", "JIRA", "CAPL", "CANalyze", "HIL","DOORS","vTestStudio"],
    image: "/img/projects/bms.png",
  },
    {
    id: "p3",
    no: "03.",
    title: "Embeded Software Electrical Power System(EPS) Testing",
    desc: "Application-level automated validation and regression testing for EPS software using Vector VT system.",
    tags: ["Embedded Software", "VT System", "vTestStudio", "IBM Rational Change Manager", "CAPL"],
    image: "/img/projects/eps.png",             
  },
];

function LinkIcon({ type }) {
  if (type === "github") return "GitHub";
  // if (type === "live") return "Live";
  return "Link";
}

export default function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.underline} />

        <div className={styles.list}>
          {PROJECTS.map((p, idx) => (
            <article key={p.id}className={`${styles.project} ${idx % 2 === 1 ? styles.alt : ""}`}>
              {/* 左侧“背景截图” */}
              <div className={styles.mediaWrap}>
                <div className={styles.bgShot}>
                  <img className={styles.bgImg} src={p.image} alt={`${p.title} preview`}/>
                </div>

                {/* 右侧/上层“白色卡片” */}
                <div className={styles.card}>
                  <div className={styles.no}>{p.no}</div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>

                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {p.links?.map((l) => (
                      <a
                        key={l.href}
                        className={styles.linkBtn}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {LinkIcon({ type: l.type })}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* 下方分隔线 */}
              {idx !== PROJECTS.length - 1 && <div className={styles.divider} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
