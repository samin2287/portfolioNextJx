import { defineField, defineType, defineArrayMember } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Portfolio Project",
  type: "document",
  fields: [
    // --- BASIC PROJECT INFO ---
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Full Stack", value: "fullstack" },
          { title: "Backend / API", value: "backend" },
          { title: "Frontend", value: "frontend" },
          { title: "Webflow", value: "webflow" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categoryLabel",
      title: "Category Label (e.g. Full Stack, Frontend)",
      type: "string",
      placeholder: "e.g. Full Stack",
    }),
    defineField({
      name: "description",
      title: "Short Description (Card Summary)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Project Image / Cover",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "technologies",
      title: "Technologies (Pills on card - Type & Press Enter)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "liveUrl",
      title: "Live Preview URL",
      type: "url",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub Repository URL",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Featured Project? (Show badge)",
      type: "boolean",
      initialValue: false,
    }),

    // --- CASE STUDY & DETAIL PAGE FIELDS ---
    defineField({
      name: "role",
      title: "Your Role",
      type: "string",
      placeholder: "e.g. Lead Full Stack Developer",
    }),
    defineField({
      name: "duration",
      title: "Timeline / Duration",
      type: "string",
      placeholder: "e.g. 4 Weeks",
    }),
    defineField({
      name: "overview",
      title: "Detailed Project Overview",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "keyFeatures",
      title: "Key Features & Capabilities (One feature per line)",
      type: "text",
      rows: 5,
      description:
        "Type or paste your key features here. Each new line will become a separate bullet point on the website.",
      placeholder:
        "JWT & OAuth 2.0 user authentication with secure cookies\nDynamic multi-attribute product filtering\nPersistent shopping cart with database state\nFull Stripe Checkout integration with webhooks",
    }),
    defineField({
      name: "frontendTech",
      title: "Frontend Technologies (Type & Press Enter)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "backendTech",
      title: "Backend Technologies (Type & Press Enter)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "databaseTech",
      title: "Database Technologies (Type & Press Enter)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "toolsTech",
      title: "Tools & DevOps (Type & Press Enter)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),

    // --- CHALLENGES & SOLUTIONS (DIRECT INPUTS) ---
    defineField({
      name: "challenge1Problem",
      title: "Challenge 1: Problem / Title",
      type: "string",
      placeholder: "e.g. Race Conditions During Concurrent Checkout",
    }),
    defineField({
      name: "challenge1Solution",
      title: "Challenge 1: Technical Solution",
      type: "text",
      rows: 3,
      placeholder: "e.g. Implemented atomic MongoDB database transactions...",
    }),
    defineField({
      name: "challenge2Problem",
      title: "Challenge 2: Problem / Title (Optional)",
      type: "string",
      placeholder: "e.g. Search & Filter Query Latency",
    }),
    defineField({
      name: "challenge2Solution",
      title: "Challenge 2: Technical Solution (Optional)",
      type: "text",
      rows: 3,
      placeholder: "e.g. Created compound database indexes...",
    }),

    // --- METRICS (DIRECT INPUTS) ---
    defineField({
      name: "metric1Label",
      title: "Metric 1: Label",
      type: "string",
      placeholder: "e.g. Search Latency",
    }),
    defineField({
      name: "metric1Value",
      title: "Metric 1: Value",
      type: "string",
      placeholder: "e.g. <40ms",
    }),
    defineField({
      name: "metric2Label",
      title: "Metric 2: Label",
      type: "string",
      placeholder: "e.g. Lighthouse Performance",
    }),
    defineField({
      name: "metric2Value",
      title: "Metric 2: Value",
      type: "string",
      placeholder: "e.g. 98/100",
    }),
    defineField({
      name: "metric3Label",
      title: "Metric 3: Label",
      type: "string",
      placeholder: "e.g. Payment Success Rate",
    }),
    defineField({
      name: "metric3Value",
      title: "Metric 3: Value",
      type: "string",
      placeholder: "e.g. 99.9%",
    }),
  ],
});
