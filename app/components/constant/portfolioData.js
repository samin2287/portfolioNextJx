export const portfolioData = {
  all: [
    {
      id: "modern-saas-webflow",
      numericId: 1,
      slug: "modern-saas-webflow",
      title: "Modern SaaS Platform Website",
      category: "webflow",
      categoryLabel: "Webflow",
      featured: true,
      description:
        "High-converting visual website for a modern SaaS company built using Webflow, Client-First styling, CMS collections, and responsive custom interactions.",
      image: "/webflow-project1.png",
      technologies: ["Webflow", "Finsweet Client-First", "JavaScript", "Responsive Design", "SEO"],
      liveUrl: "https://webflow.com",
      githubUrl: "https://github.com/samin2287",
      caseStudy: {
        role: "Lead Webflow Developer & Designer",
        duration: "3 Weeks",
        overview:
          "Designed and engineered a high-converting digital storefront for a fast-growing SaaS startup. Focus was placed on brand consistency, lightning-fast Core Web Vitals, and smooth micro-interactions.",
        keyFeatures: [
          "Dynamic CMS collections for blog, product releases, and customer case studies",
          "Automated inquiry forms connected with Zapier webhooks and CRM",
          "Finsweet Client-First architecture for maintainable and scalable class naming",
          "Fully responsive layouts optimized across mobile, tablet, and ultra-wide screens",
        ],
        techStack: {
          frontend: ["HTML5", "CSS3", "JavaScript ES6+"],
          backend: ["Zapier Webhooks", "Formspree"],
          database: ["Webflow CMS"],
          tools: ["Webflow Designer", "Figma", "Finsweet Chrome Extension"],
        },
        challenges: [
          {
            problem: "Client required dynamic multi-step filtering for complex product plans without page reloads.",
            solution: "Implemented Finsweet CMS Filter and custom JavaScript to achieve instantaneous client-side filtering.",
          },
          {
            problem: "Heavy visual assets were slowing down initial mobile page load speeds.",
            solution: "Converted images to WebP, implemented lazy loading, and optimized typography fonts.",
          },
        ],
        metrics: [
          { label: "Performance Score", value: "98/100" },
          { label: "Conversion Uplift", value: "+38%" },
          { label: "Load Time", value: "0.8s" },
        ],
      },
    },
    {
      id: "creative-agency-portfolio",
      numericId: 2,
      slug: "creative-agency-portfolio",
      title: "Creative Agency & Studio Showcase",
      category: "webflow",
      categoryLabel: "Webflow",
      featured: true,
      description:
        "Award-winning agency website with rich bespoke animations, smooth scroll experiences, and dynamic CMS portfolio case studies.",
      image: "/webflow-project2.png",
      technologies: ["Webflow CMS", "GSAP Animations", "Client-First", "Custom CSS"],
      liveUrl: "https://webflow.com",
      githubUrl: "https://github.com/samin2287",
      caseStudy: {
        role: "Creative Frontend Developer",
        duration: "4 Weeks",
        overview:
          "Collaborated with creative directors to build a cutting-edge digital showcase. Features immersive visual storytelling, bespoke scroll triggers, and dynamic project filtering.",
        keyFeatures: [
          "Custom interactive cursor and smooth scroll transitions",
          "Interactive client testimonials with custom video lightbox",
          "Optimized CMS architecture for rapid editorial updates",
          "Accessible keyboard navigation and WCAG 2.1 compliance",
        ],
        techStack: {
          frontend: ["Webflow Canvas", "GSAP", "Tailwind CSS Principles"],
          backend: ["REST Endpoints"],
          database: ["Webflow CMS"],
          tools: ["Figma", "Adobe After Effects", "Webflow"],
        },
        challenges: [
          {
            problem: "Complex scroll-driven animations caused frame drops on lower-powered mobile devices.",
            solution: "Offloaded heavy transitions to CSS transforms and reduced layer redraws using will-change properties.",
          },
        ],
        metrics: [
          { label: "Page Engagement", value: "+52%" },
          { label: "Bounce Rate", value: "24%" },
          { label: "Awwwards Nominee", value: "Honorable" },
        ],
      },
    },
    {
      id: "ecommerce-brand-experience",
      numericId: 3,
      slug: "ecommerce-brand-experience",
      title: "E-Commerce Lifestyle Brand",
      category: "frontend",
      categoryLabel: "Frontend",
      featured: false,
      description:
        "Modern digital storefront designed for a lifestyle merchandise brand with intuitive product catalogs, filterable collections, and quick checkout flow.",
      image: "/webflow-project3.png",
      technologies: ["Next.js", "React 19", "Tailwind CSS", "Stripe Checkout"],
      liveUrl: "https://github.com/samin2287",
      githubUrl: "https://github.com/samin2287",
      caseStudy: {
        role: "Frontend Engineer",
        duration: "1 Month",
        overview:
          "Developed an ultra-responsive e-commerce frontend with seamless product exploration, cart management, and instant search.",
        keyFeatures: [
          "Persistent cart state using local storage and React Context",
          "Instant search with autocomplete and category filtering",
          "Seamless checkout redirection with Stripe integration",
        ],
        techStack: {
          frontend: ["React 19", "Next.js", "Tailwind CSS"],
          backend: ["Node.js", "Express API"],
          database: ["MongoDB Atlas"],
          tools: ["VS Code", "Postman", "Vercel"],
        },
        challenges: [
          {
            problem: "Cart synchronization across browser tabs had delays.",
            solution: "Used window storage event listeners to sync state instantaneously.",
          },
        ],
        metrics: [
          { label: "Cart Abandonment", value: "-22%" },
          { label: "Average Session", value: "3m 45s" },
          { label: "Lighthouse Score", value: "96" },
        ],
      },
    },
    {
      id: "fullstack-mern-portal",
      numericId: 4,
      slug: "fullstack-mern-portal",
      title: "Enterprise Task & Project Management API",
      category: "fullstack",
      categoryLabel: "Full Stack",
      featured: true,
      description:
        "Full-stack MERN portal with role-based JWT authentication, task assignment boards, real-time activity feeds, and REST API documentation.",
      image: "/webflow-project1.png",
      technologies: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://github.com/samin2287",
      githubUrl: "https://github.com/samin2287",
      caseStudy: {
        role: "Full Stack Developer",
        duration: "6 Weeks",
        overview:
          "Architected and deployed a multi-tenant project management solution enabling teams to collaborate, track deliverables, and visualize project velocity.",
        keyFeatures: [
          "Secure JWT authentication with refresh token rotation and role-based permissions",
          "Kanban board interface with drag-and-drop task workflows",
          "MongoDB aggregation pipelines for team analytics and workload graphs",
          "Comprehensive REST API with Swagger/Postman documentation",
        ],
        techStack: {
          frontend: ["Next.js App Router", "React", "Tailwind CSS"],
          backend: ["Node.js", "Express.js", "JWT Auth"],
          database: ["MongoDB Atlas", "Mongoose ORM"],
          tools: ["Docker", "Postman", "Render", "Vercel"],
        },
        challenges: [
          {
            problem: "Complex database queries for team analytics took over 1.5s on large datasets.",
            solution: "Constructed compound MongoDB indexes and cached frequent query results in Redis.",
          },
        ],
        metrics: [
          { label: "API Response Time", value: "<85ms" },
          { label: "Test Coverage", value: "88%" },
          { label: "Active Users", value: "5,000+" },
        ],
      },
    },
  ],
};
