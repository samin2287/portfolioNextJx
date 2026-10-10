import { groq } from "next-sanity";

// All blog posts
export const postsQuery = groq`
  *[_type == "post"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    readTime,
    category,
    summary,
    image
  }
`;

// Single blog post by slug
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    readTime,
    category,
    summary,
    image,
    content
  }
`;

// All blog slugs for generateStaticParams
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

// All portfolio projects
export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    categoryLabel,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    featured,
    role,
    duration,
    overview,
    keyFeatures,
    frontendTech,
    backendTech,
    databaseTech,
    toolsTech,
    challenges,
    challenge1Problem,
    challenge1Solution,
    challenge2Problem,
    challenge2Solution,
    metrics,
    metric1Label,
    metric1Value,
    metric2Label,
    metric2Value,
    metric3Label,
    metric3Value,
    caseStudy
  }
`;
