import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";

const DATA = [
  {
    key: "job1",
    leftTitle: ["SES"],
    title: "Hil Test Engineer",
    // badge: "AUTOMOTIVE QA / HIL",
    company: "SES Co., Ltd.",
    companyLogo: "/img/companies/SES.png",
    date: "Sept. 2022 – Oct. 2024",
    bullets: [
      "HIL automationsystem commissioning, setup and system debugging.",
      "Embedded software system-levelfunctional and regression validation.",
      "Test cases and test plans development and test reports generation.",
      "Automated test framework setup using CANoe, vTESTstudio, CAPL, and Python.",
      "Root cause analysis, troubleshooting and anomaly tracking.",
      "Cross-functional collaboration with software teams to ensure software quality.",
    ],
  },
  {
    key: "job2",
    leftTitle: ["AUTOLIV"],
    title: "Senior Software Validation Engineer",
    company: "Autoliv Vehicle Safety Systems Technical Center Co., Ltd.",
    companyLogo: "/img/companies/Autoliv_0.png",
    // badge: "EMBEDDED SYSTEMS",
    date: "Oct. 2021 – Sept. 2022",
    bullets: [
      "Set up and maintained Vector VT automation system.",
      "Reviewed and decomposed requrements, designed system-level test scenarios.",
      "Performed functional and fault injection testing, created and tracked issues.",
      "Ensured test traceability and reporting across test tools.",
    ],
  },
  {
    key: "job3",
    leftTitle: ["NEXTEER"],
    title: "Core Software Engineer",
    company: "Nexteer Automotive System Co., Ltd.",
    companyLogo: "/img/companies/Nexteer Automotive_1.png",
    // badge: "EMBEDDED SYSTEMS",
    date: "Aug. 2019 – Sept. 2021",
    bullets: [
      "Validated embedded software EPS features through functional testing.",
      "Executed automated testing, DVP&R planning and produced validation reports.",
      "Maintained regression test suites, tracked and analyzed anomalies.",
      "Led and managed software validation projects and collaborated closely with cross-functional teams.",
    ],
  },
  {
    key: "job4",
    leftTitle: ["BYTON"],
    title: "Powertrain HIL Engineerss",
    company: "Nanjing Future Mobility New Energy Vehicle Technology Development Co., Ltd.",
    companyLogo: "/img/companies/byton.png",
    // badge: "EMBEDDED SYSTEMS",
    date: "Mar. 2018 – Aug. 2019",
    bullets: [
      "HIL system commissioning and setup.",
      "Analyzed requirements and designed system-level functional test cases.",
    ],
  },
  {
    key: "job5",
    leftTitle: ["CATL"],
    title: "Software Test Engineer",
    company: "Contemporary Amperex Technology Co., Ltd.",
    companyLogo: "/img/companies/CATL_4.png",
    // badge: "EMBEDDED SYSTEMS",
    date: "Apr. 2016 – Feb. 2018",
    bullets: [
      "Mannaged and analyzed softwarere quirements and designed system-level test scenarios.",
      "Executed functional, fault injection, and regression testing for BMS software.",
      "Analyzed defects and supported issues resolution across test cycles.",
      "Produced test documentation and requirements traceability.",
    ],
  },
  {
    key: "education1",
    leftTitle: ["HEU"],
    title: "Master of Engineering",
    company: "Harbin Engineering University",
    companyLogo: "/img/companies/harbin.png",
    // badge: "EMBEDDED SYSTEMS",
    date: "Sept. 2013 - Mar. 2016",
    bullets: [
      "Gained the hands-on experience of solving complex problems.",
      "Formed a deep understanding of the real-world applications of software.",
    ],
  },
   {
    key: "education2",
    leftTitle: ["HLJU"],
    title: "Bachelor of Engineering",
    company: "Heilongjiang University",
    companyLogo: "/img/companies/hlj.png",
    // badge: "EMBEDDED SYSTEMS",
    date: "Sept. 2008 – Jul. 2012",
    bullets: [
      "Learned the basic knowledge of programming laguages such as C / Matlab.",
      "Gained knowledge about fundamentals of the fields of computer science and engineering.",
    ],
  },
];

export default function ExperienceSection() {
  const items = useMemo(() => DATA, []);
  const [activeKey, setActiveKey] = useState(items[0]?.key);
  const active = items.find((x) => x.key === activeKey) || items[0];

  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.underline} />
        <div className={styles.grid}>
          {/* Left tabs */}
          <div className={styles.left}>
            {items.map((item) => {
              const isActive = item.key === activeKey;
              return (
                <button
                  key={item.key}
                  type="button"
                  className={`${styles.tab} ${isActive ? styles.active : ""}`}
                  onClick={() => setActiveKey(item.key)}
                >
                  {item.leftTitle.map((t) => {
                    const isLong = t.length >= 14 || t.includes(" "); // 学校一般更长/有空格
                    return (
                      <div
                        key={t}
                        className={`${styles.tabLine} ${isLong ? styles.tabLineLong : ""}`}
                      >
                        {t}
                      </div>
                        );
                })}

                </button>
              );
            })}
          </div>

          {/* Right content */}
          <div className={styles.right}>
            <h3 className={styles.roleTitle}>{active.title}</h3>
            {/* 公司：图标 + pill */}
            {active.company && (
              <div className={styles.companyRow}>
                <span className={styles.companyPill}>
                  <img className={styles.companyLogo} src={active.companyLogo} alt="" />
                  {active.company}
                </span>
              </div>
            )}
            {/* 地点 */}
            {/* </div>} */}
            {/* badge + date */}
            <div className={styles.metaRow}>
              <span className={styles.date}>{active.date}</span>
            </div>
            <ul className={styles.bullets}>
              {active.bullets.map((b) => (
                <li key={b} className={styles.bulletItem}>
                  <span className={styles.chev}>»</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
