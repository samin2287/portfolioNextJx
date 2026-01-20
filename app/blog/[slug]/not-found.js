import Link from "next/link";
import Container from "../../components/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-300 mb-6">
            Blog Post Not Found
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-amber-600 hover:border-amber-600 transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </Container>
    </main>
  );
}
