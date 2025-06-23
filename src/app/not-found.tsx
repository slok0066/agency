import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-600 ">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-8 inline-block rounded-md bg-emerald-600 px-6 py-3  font-semibold hover:bg-emerald-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
