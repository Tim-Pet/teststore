import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="mb-4 text-4xl font-bold">Welcome to our Landing Page!</h1>
        <p className="text-lg text-gray-600">
          Explore our high-performance ecommerce store built with Next.js, Vercel, and Shopify.
        </p>
        <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Get Started
        </button>
      </div>

      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
