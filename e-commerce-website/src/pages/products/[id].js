import Head from "next/head";
import { useRouter } from "next/router";

const products = [
  { id: 1, name: "Product 1", price: 19.99, description: "This is product 1" },
  { id: 2, name: "Product 2", price: 29.99, description: "This is product 2" },
  { id: 3, name: "Product 3", price: 39.99, description: "This is product 3" },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>{product.name} - Product Details</title>
        <meta name="description" content={`Details for ${product.name}`} />
      </Head>
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
      <p className="mb-4">{product.description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}
