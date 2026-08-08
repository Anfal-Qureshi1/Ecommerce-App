export const metadata = {
  title: "About - Islamabad Society Marketplace",
  description: "About the Islamabad Society Marketplace",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Islamabad Society Marketplace</h1>
      <p className="mb-4">
        This marketplace connects residents of a society in Islamabad to local
        sellers and services. Browse products, support local vendors, and make
        purchases conveniently.
      </p>
      <section>
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p>
          To provide an easy-to-use online marketplace tailored to the needs of
          residents — promoting local commerce and community collaboration.
        </p>
      </section>
    </main>
  );
}
