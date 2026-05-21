import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

export default function Home() {
  const featuredCollections = [
    {
      title: 'Dinosaurs',
      description: 'Discover the prehistoric giants that once roamed the Earth.',
      buttonText: 'Learn more',
    },
    {
      title: 'Minerals',
      description: 'Explore the beauty and diversity of Earth\'s geological treasures.',
      buttonText: 'Learn more',
    },
    {
      title: 'Botany',
      description: 'Discover the incredible diversity of plant life on Earth.',
      buttonText: 'Learn more',
    },
  ];

  const whatsOn = [
    {
      title: 'Exhibitions',
      description: 'Explore our latest exhibitions and events.',
      buttonText: 'See what\'s on',
    },
    {
      title: 'Events',
      description: 'Join us for talks, workshops, and special events.',
      buttonText: 'Find an event',
    },
    {
      title: 'Learning',
      description: 'Discover our educational resources and programs.',
      buttonText: 'Explore learning',
    },
  ];

  return (
    <main>
      <Header />
      <Hero />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nhm-blue">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection, index) => (
              <Card key={index} {...collection} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nhm-blue">What's On</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsOn.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
