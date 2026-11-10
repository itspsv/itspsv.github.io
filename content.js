// ============================================================================
//  content.js — EVERYTHING on the site comes from this file.
//  Edit text, links and images here; you never need to touch the HTML or CSS.
//
//  Rules of thumb
//  - Leave a link as "" and it simply won't show (no dead links on the page).
//  - Images: put the file in images/ (e.g. images/projects/finops.png) and
//    write that path in `image`. Leave `image` as "" to show a plain tile.
//  - `text` and `bio` may contain simple HTML, e.g. <a href="...">link</a>.
//  - Items with a `date` get the timeline look (date column on the left).
// ============================================================================

const SITE = {
  name: "Vamsi Bandaru",
  // Each entry is shown on its own line under your name.
  tagline: ["Data & AI Engineer", "I build Data Pipelines and AI systems"],

  // Profile photo (a small web-sized copy of images/profile/Profile_Picture.png).
  photo: "images/profile/profile.jpg",

  // Icons appear in this order. Empty ones are hidden.
  links: {
    github: "https://github.com/itspsv",
    linkedin: "https://www.linkedin.com/in/vamsi-bandaru-688473216/",
    medium: "https://medium.com/@itspsv",
    x: "",
    email: "vamsibandaru360@gmail.com", // mailto: is added for you
    resume: "", // TODO: e.g. "files/resume.pdf"
    website: "",
  },

  // Shown under the "bio" heading. Each entry is one paragraph.
  bio: [
    `I am a master's student in AI & DS.`,
    `I have mostly worked on ETL pipelines and lakehouse architectures. Currently developing
     LLM applications.`,
  ],

  sections: [
    // Work experience: uncomment and fill in when you want it on the page.
    // Logos go in images/experience/.
    // {
    //   title: "experience",
    //   items: [
    //     {
    //       date: "Jan 2025 – Present",
    //       image: "images/experience/company.png",
    //       title: "Company name",
    //       url: "https://company.com",
    //       text: "Role · City<br>One or two sentences on what you did there.",
    //     },
    //   ],
    // },

    {
      title: "education",
      items: [
        {
          date: "Apr 2024 – Present",
          image: "images/education/OVGU_Logo.png",
          title: "Otto von Guericke University Magdeburg",
          url: "https://www.ovgu.de/",
          text: "M.Sc. Data and Knowledge Engineering<br>Magdeburg, Germany",
        },
        {
          date: "Aug 2019 – Apr 2023",
          image: "images/education/JNTUK_Logo.png",
          title: "Jawaharlal Nehru Technological University, Kakinada",
          url: "https://www.jntuk.edu.in/",
          text: "B.Tech. Computer Science and Engineering<br>Kakinada, India",
        },
      ],
    },

    // Project tiles: picture on top, then title and up to 3 skills.
    // Pictures go in images/projects/ (landscape, about 3:2, e.g. 900x600, look best).
    {
      title: "AI engineering projects",
      layout: "tiles",
      items: [
        {
          image: "images/projects/AI_FinOps.webp",
          title: "AI FinOps Optimizer",
          url: "https://github.com/itspsv/FinOps_Optimizer",
          skills: ["FastAPI", "LangGraph", "pgvector"],
        },
        {
          image: "images/projects/EchoDocs.jpg",
          title: "EchoDocs",
          url: "https://github.com/itspsv/EchoDocs",
          skills: ["AssemblyAI", "FAISS", "Flask"],
        },
        {
          image: "images/projects/DecisionIQ.jpg",
          title: "DecisionIQ",
          url: "https://decideiq.vercel.app",
          skills: ["React", "Supabase", "Groq"],
        },
      ],
    },

    {
      title: "Data engineering projects",
      layout: "tiles",
      items: [
        {
          image: "images/projects/Data_Lakehouse.avif",
          title: "E-commerce Data Lakehouse",
          url: "https://github.com/itspsv/ecommerce-lakehouse",
          skills: ["AWS Glue", "Snowflake", "dbt"],
        },
        {
          image: "images/projects/Medallion.png",
          title: "Databricks Medallion Pipeline",
          url: "https://github.com/itspsv/databricks-medallion-pipeline",
          skills: ["Databricks", "PySpark", "Delta Lake"],
        },
        {
          image: "images/projects/Enterprise Data Quality.avif",
          title: "Enterprise Data Quality Platform",
          url: "https://github.com/itspsv/Enterprise_Data_Quality_Platform",
          skills: ["Python", "Polars", "Amazon S3"],
        },
      ],
      footer: `More projects on <a href="https://github.com/itspsv?tab=repositories">GitHub</a>.`,
    },

    {
      title: "hackathons",
      // Pictures for these go in images/hackathons/.
      items: [
        {
          image: "images/hackathons/Smart_City.png",
          title: "Smart City Hackathon, Tomorrow Labs Festival 2026",
          url: "",
          text: `Magdeburg · <b>Top 5 of 19 teams.</b> Built the Weather & Climate and Green Space
                 panels and handled integration for a Vue.js + PHP dashboard using Open-Meteo,
                 GloFAS and Overpass/OSM data.`,
        },
        {
          image: "images/hackathons/LabLabAi_square.png",
          title: "AI Factory Native.builder Hackathon (lablab.ai)",
          url: "https://decideiq.vercel.app",
          text: `Built and shipped DecisionIQ solo, an AI decision-support tool.`,
          links: [
            { label: "live", url: "https://decideiq.vercel.app" },
            { label: "code", url: "https://github.com/itspsv/DecisionIQ" },
          ],
        },
        {
          image: "images/hackathons/LabLabAi_square.png",
          title: "AssemblyAI Voice Agent Hackathon (lablab.ai)",
          url: "https://github.com/itspsv/EchoDocs",
          text: `Built EchoDocs, a voice RAG agent that answers spoken questions about a document.`,
          links: [{ label: "code", url: "https://github.com/itspsv/EchoDocs" }],
        },
      ],
    },

    {
      title: "certifications",
      layout: "tiles",
      // Badge images go in images/certifications/. Put the credential link (e.g. Credly) in `url`.
      items: [
        {
          image: "images/certifications/databricks.png",
          title: "Databricks Certified Data Engineer Associate",
          url: "https://credentials.databricks.com/ecc5b74d-7192-4c42-8be4-54d13c0788fa#acc.SXeHr1WN",
          subtitle: "Databricks",
        },
        {
          image: "images/certifications/aws_cloud.png",
          title: "AWS Certified Cloud Practitioner",
          url: "https://www.credly.com/badges/116e0264-e015-461d-8300-4d5db453a162/linked_in_profile",
          subtitle: "Amazon Web Services",
        },
        {
          image: "images/certifications/aws_ai.jpeg",
          title: "AWS Certified AI Practitioner",
          url: "https://www.credly.com/badges/f2fee897-8b6d-41ab-b48d-eb73207c85f7/public_url",
          subtitle: "Amazon Web Services",
        },
        {
          image: "images/certifications/sql.jpeg",
          title: "SQL (Advanced)",
          url: "https://www.hackerrank.com/certificates/37eec8bb64b0",
          subtitle: "HackerRank",
        },
        {
          image: "images/certifications/Claude_101_square.png",
          title: "Claude 101",
          url: "https://academy.claude.com/verify/be111d9ddf6818a9c03dd1d60927d1ac",
          subtitle: "Claude Academy",
        },
        {
          image: "images/certifications/Claude_Code_101.png",
          title: "Claude Code 101",
          url: "https://academy.claude.com/verify/1a3241b62b78502b111beb8bc6361b32",
          subtitle: "Claude Academy",
        },
      ],
    },

    // Example of a section for anything else (certificates, talks, photos...).
    // Uncomment and fill in to use it.
    // {
    //   title: "misc",
    //   items: [
    //     { image: "images/misc/hackathon.jpg", title: "AssemblyAI hackathon", url: "", text: "..." },
    //   ],
    // },
  ],
};
