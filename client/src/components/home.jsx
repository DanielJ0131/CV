import { useState } from "react";
import { motion } from "framer-motion";
import './styles/home.css';

const containerVariants = {
    hidden: {},
    visible: {}
};

const itemVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const sectionSlideVariants = {
    hidden: { opacity: 0, y: 180 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 18, duration: 1 } }
};

const skills = [
    "JavaScript", "React", "Node.js", "CSS", "HTML", "Git", "REST APIs", "TypeScript",
    "Redux", "Express.js", "MongoDB", "SQL", "Docker", "Figma", "Jest", "Next.js", "Linux"
];

const experiences = [
    {
        role: "Lovely Worker",
        company: "Tomelilla School",
        period: "2013 - 2020",
        description: "Provided support and care with a positive attitude, making a difference every day."
    },
    {
        role: "Amazing Shawarma Friend",
        company: "Shawarma House",
        period: "2025 - Present",
        description: "Spread joy and delicious shawarma to friends and customers alike."
    }
];

const education = [
    {
        degree: "Software Developer",
        institution: "Kristianstad University (HKR)",
        period: "2023 - Present"
    }
    ,
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Baghdad",
        period: "2017 - 2021"
    }
];

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <motion.div
            className="cv-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{
                fontFamily: "Segoe UI, sans-serif",
                minHeight: "100vh",
                minWidth: "100vw",
                background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
                padding: 0,
                margin: 0,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#f3f3f3",
            }}
        >
            <motion.button
                className="sidebar-toggle"
                onClick={() => setSidebarOpen(open => !open)}
                style={{
                    position: "fixed",
                    top: 32,
                    left: 32,
                    zIndex: 1100,
                    background: "#23272b",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: 60,
                    height: 60,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.22)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.2rem"
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{
                    background: "#333a44",
                    scale: 1.12,
                    boxShadow: "0 6px 24px rgba(0,0,0,0.25)"
                }}
                aria-label="Toggle sidebar"
            >
                {sidebarOpen ? "✖" : "☰"}
            </motion.button>
            <motion.nav
                initial={false}
                animate={{ x: sidebarOpen ? 0 : -500 }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: 500,
                    background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
                    boxShadow: "2px 0 24px rgba(0,0,0,0.22)",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    padding: "3em 2em",
                    gap: "2.5em"
                }}
            >
                <div style={{ fontWeight: 800, fontSize: "2rem", marginBottom: "1.5em", color: "#fff" }}>
                    Mustafa Al-Bayati
                </div>
                <motion.a
                    href="#skills"
                    style={{ color: "#f3f3f3", textDecoration: "none", marginBottom: "1.5em", fontSize: "1.4rem", borderRadius: "12px", padding: "0.4em 1em", display: "inline-block" }}
                    whileHover={{
                        background: "#333a44",
                        color: "#ffd700",
                        scale: 1.12,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.18)"
                    }}
                >
                    Skills
                </motion.a>
                <motion.a
                    href="#experience"
                    style={{ color: "#f3f3f3", textDecoration: "none", marginBottom: "1.5em", fontSize: "1.4rem", borderRadius: "12px", padding: "0.4em 1em", display: "inline-block" }}
                    whileHover={{
                        background: "#333a44",
                        color: "#ffd700",
                        scale: 1.12,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.18)"
                    }}
                >
                    Experience
                </motion.a>
                <motion.a
                    href="#education"
                    style={{ color: "#f3f3f3", textDecoration: "none", marginBottom: "1.5em", fontSize: "1.4rem", borderRadius: "12px", padding: "0.4em 1em", display: "inline-block" }}
                    whileHover={{
                        background: "#333a44",
                        color: "#ffd700",
                        scale: 1.12,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.18)"
                    }}
                >
                    Education
                </motion.a>
                <div style={{ flexGrow: 1 }} />
                <div style={{ color: "#aaa", fontSize: "1.1rem" }}>© {new Date().getFullYear()} Mustafa Al-Bayati</div>
            </motion.nav>
            <motion.h1
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                style={{ fontSize: "4rem", marginTop: "2.5em", marginBottom: "1em", color: "#fff", fontWeight: 900, letterSpacing: 2, textAlign: "center" }}
            >
                Mustafa Al-Bayati
            </motion.h1>
            <motion.section
                id="skills"
                variants={sectionSlideVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ marginBottom: "3em", width: "100%", maxWidth: "900px" }}
            >
                <h3 style={{ color: "#e0e0e0", fontSize: "2.2rem", marginBottom: "1.2em" }}>Skills</h3>
                <motion.ul
                    style={{
                        display: "flex",
                        gap: "1.5em",
                        flexWrap: "wrap",
                        listStyle: "none",
                        padding: 0,
                        justifyContent: "center"
                    }}
                >
                    {skills.map(skill => (
                        <motion.li
                            key={skill}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.18, background: "#333a44", color: "#ffd700", boxShadow: "0 8px 32px rgba(0,0,0,0.22)" }}
                            style={{
                                background: "#23272b",
                                color: "#f3f3f3",
                                padding: "1.2em 2.2em",
                                borderRadius: "32px",
                                fontSize: "1.5rem",
                                fontWeight: 600,
                                boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                                cursor: "pointer",
                                marginBottom: "1em",
                                transition: "all 0.2s"
                            }}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.section>
            <motion.section
                id="experience"
                variants={sectionSlideVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ marginBottom: "3em", width: "100%", maxWidth: "900px" }}
            >
                <h3 style={{ color: "#e0e0e0", fontSize: "2.2rem", marginBottom: "1.2em" }}>Experience</h3>
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.role + exp.company}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ scale: 1.06, boxShadow: "0 12px 36px rgba(0,0,0,0.28)", background: "#333a44", color: "#ffd700" }}
                        style={{
                            background: "#23272b",
                            color: "#f3f3f3",
                            borderRadius: "20px",
                            padding: "2em",
                            marginBottom: "2em",
                            fontSize: "1.4rem",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                            transition: "all 0.2s"
                        }}
                    >
                        <strong style={{ fontSize: "1.6rem" }}>{exp.role}</strong> at <em style={{ fontSize: "1.3rem" }}>{exp.company}</em> <span style={{ color: "#aaa", fontSize: "1.1rem" }}>({exp.period})</span>
                        <p style={{ margin: "1em 0 0 0", fontSize: "1.2rem" }}>{exp.description}</p>
                    </motion.div>
                ))}
            </motion.section>
            <motion.section
                id="education"
                variants={sectionSlideVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ marginBottom: "3em", width: "100%", maxWidth: "900px" }}
            >
                <h3 style={{ color: "#e0e0e0", fontSize: "2.2rem", marginBottom: "1.2em" }}>Education</h3>
                {education.map((edu) => (
                    <motion.div
                        key={edu.degree + edu.institution}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ scale: 1.06, boxShadow: "0 12px 36px rgba(0,0,0,0.28)", background: "#333a44", color: "#ffd700" }}
                        style={{
                            background: "#23272b",
                            color: "#f3f3f3",
                            borderRadius: "20px",
                            padding: "2em",
                            marginBottom: "2em",
                            fontSize: "1.4rem",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                            transition: "all 0.2s"
                        }}
                    >
                        <strong style={{ fontSize: "1.6rem" }}>{edu.degree}</strong> - <em style={{ fontSize: "1.3rem" }}>{edu.institution}</em> <span style={{ color: "#aaa", fontSize: "1.1rem" }}>({edu.period})</span>
                    </motion.div>
                ))}
            </motion.section>
        </motion.div>
    );
}