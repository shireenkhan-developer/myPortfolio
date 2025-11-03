import Link from '@/components/navigation/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-white mb-4">404</h2>
      <p className="text-white/80 mb-6">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-stellar-indigo text-white hover:bg-stellar-indigo/80 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

