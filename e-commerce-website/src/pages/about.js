import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src="/placeholder-image.jpg"
            alt="About Us"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="mb-4">
            We are a passionate team dedicated to providing high-quality
            products to our customers. Our mission is to make online shopping
            easy and enjoyable.
          </p>
          <p>
            Founded in 2023, we've quickly grown to become a trusted name in
            e-commerce. Thank you for choosing us for your shopping needs!
          </p>
        </div>
      </div>
    </div>
  );
}
