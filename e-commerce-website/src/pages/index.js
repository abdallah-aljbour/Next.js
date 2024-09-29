import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Welcome to Our E-Commerce Store</title>
        <meta name="description" content="Browse our selection of products" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Our E-Commerce Store
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/products" className="text-blue-500 hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500 hover:underline">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
