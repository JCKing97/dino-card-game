import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p>Dino card game</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
