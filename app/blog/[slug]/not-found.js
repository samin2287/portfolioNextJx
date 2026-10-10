import Link from "next/link";
import Container from "../../components/Container";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center py-20">
      <Container>
        <div className="text-center max-w-xl mx-auto px-6 py-12 rounded-2xl bg-gray-800/40 border border-gray-800 shadow-2xl">
          <span className="text-xs uppercase font-semibold text-amber-500 tracking-wider">Error</span>
          <h1 className="text-7xl font-extrabold text-white mt-2 mb-4 tracking-tight">404</h1>
          <h2 className="text-2xl font-bold text-gray-200 mb-3">
            Article Not Found
          </h2>
          <p className="text-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
            The blog post you&apos;re looking for doesn&apos;t exist, may have moved, or has been unpublished.
          </p>
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 border border-gray-700 bg-gray-800/80 px-6 py-3 rounded-lg text-white font-semibold hover:border-amber-500 hover:text-amber-400 transition-all duration-300 shadow-md">
            <FaArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Articles</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
