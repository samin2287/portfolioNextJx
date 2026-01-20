export const blogPosts = [
  {
    slug: "designing-with-intent-frontend-workflow",
    title: "Designing With Intent: A Frontend Workflow",
    date: "Oct 12, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    summary:
      "How I move from low-fidelity sketches to production-ready React components without losing the soul of the design.",
    content: `
      <p>Designing with intent means every pixel, every interaction, and every component serves a purpose. In this post, I'll walk you through my workflow for transforming initial concepts into polished, production-ready interfaces.</p>
      
      <h2>Starting with Low-Fidelity Sketches</h2>
      <p>The journey begins with rough sketches. I don't worry about perfection at this stage—instead, I focus on layout, information hierarchy, and user flow. These sketches help me understand the problem space before diving into code.</p>
      
      <h2>Building in React</h2>
      <p>Once I have a clear direction, I start building components in React. I prioritize:</p>
      <ul>
        <li>Component reusability and composition</li>
        <li>Accessibility from the start</li>
        <li>Performance considerations</li>
        <li>Maintaining design consistency</li>
      </ul>
      
      <h2>Preserving the Design Soul</h2>
      <p>The challenge is maintaining the emotional impact of the design while ensuring it's functional and performant. This means paying attention to micro-interactions, spacing, typography, and color—all the details that make an interface feel intentional.</p>
      
      <p>By the end of this process, you'll have components that not only look great but are also maintainable, accessible, and performant.</p>
    `,
  },
  {
    slug: "micro-interactions-that-matter",
    title: "Micro-Interactions That Matter",
    date: "Sep 28, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    summary:
      "Small motion details that keep users oriented—hover states, focus cues, and loading rhythms that stay performant.",
    content: `
      <p>Micro-interactions are the small details that make a big difference in user experience. They provide feedback, guide attention, and create a sense of polish that users notice—even if they can't articulate why.</p>
      
      <h2>Hover States That Inform</h2>
      <p>Every interactive element should respond to user input. Hover states aren't just decorative—they communicate that an element is clickable and provide visual feedback. I use subtle transitions that feel natural and don't distract from the content.</p>
      
      <h2>Focus Cues for Accessibility</h2>
      <p>Keyboard navigation is essential for accessibility. Clear focus indicators help users understand where they are on the page. I ensure these cues are visible but not jarring, using techniques like outline offsets and custom focus rings.</p>
      
      <h2>Loading Rhythms</h2>
      <p>Loading states should feel intentional, not like a delay. I use skeleton screens, progress indicators, and smooth transitions to keep users engaged during data fetches. The key is making the wait feel purposeful.</p>
      
      <h2>Performance Considerations</h2>
      <p>All these interactions need to be performant. I use CSS transitions over JavaScript animations when possible, leverage hardware acceleration, and ensure animations don't block the main thread. The result is smooth, responsive interactions that enhance rather than hinder the experience.</p>
    `,
  },
  {
    slug: "keeping-nextjs-sites-fast",
    title: "Keeping Next.js Sites Fast On Any Device",
    date: "Sep 9, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    summary:
      "A practical checklist for responsive layouts, image strategy, and what to monitor after launch.",
    content: `
      <p>Performance isn't optional—it's a core part of user experience. In this post, I'll share practical strategies for keeping Next.js sites fast across all devices and network conditions.</p>
      
      <h2>Responsive Layout Strategy</h2>
      <p>Start mobile-first. Design for the smallest screen and progressively enhance. Use CSS Grid and Flexbox for layouts that adapt naturally. Avoid fixed widths and embrace relative units. Test on real devices, not just browser dev tools.</p>
      
      <h2>Image Optimization</h2>
      <p>Images are often the largest assets on a page. Next.js Image component handles optimization automatically, but you still need to:</p>
      <ul>
        <li>Choose appropriate formats (WebP, AVIF when supported)</li>
        <li>Set proper sizes for responsive images</li>
        <li>Use lazy loading for below-the-fold content</li>
        <li>Consider using blur placeholders for better perceived performance</li>
      </ul>
      
      <h2>Code Splitting and Bundling</h2>
      <p>Next.js handles code splitting automatically, but you can optimize further by:</p>
      <ul>
        <li>Using dynamic imports for heavy components</li>
        <li>Analyzing your bundle size regularly</li>
        <li>Removing unused dependencies</li>
        <li>Leveraging tree shaking</li>
      </ul>
      
      <h2>Monitoring After Launch</h2>
      <p>Performance monitoring is ongoing. Track:</p>
      <ul>
        <li>Core Web Vitals (LCP, FID, CLS)</li>
        <li>Time to First Byte (TTFB)</li>
        <li>Bundle sizes over time</li>
        <li>Real user metrics from different devices and networks</li>
      </ul>
      
      <p>Remember: fast sites keep users engaged and improve conversion rates. Performance is a feature, not an afterthought.</p>
    `,
  },
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getAllBlogSlugs = () => {
  return blogPosts.map((post) => post.slug);
};
