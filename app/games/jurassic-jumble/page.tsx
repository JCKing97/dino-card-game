import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameBoard from '@/components/GameBoard';

export default function Page() {
  return (  
    <main>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GameBoard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
