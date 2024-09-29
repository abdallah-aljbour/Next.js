import Head from "next/head";
import Link from "next/link";

const products = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
  { id: 3, name: "Product 3", price: 39.99 },
];

export default function Products() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Our Products</title>
        <meta name="description" content="Browse our selection of products" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg">
            <Link
              href={`/products/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </Link>
            <p className="mt-2">${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
