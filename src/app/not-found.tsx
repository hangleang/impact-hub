import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-4 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900">Page not found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="javascript:history.back()"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}
