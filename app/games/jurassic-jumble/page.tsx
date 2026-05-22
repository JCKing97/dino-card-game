import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameBoard from '@/components/GameBoard';
import GameCard from '@/components/GameCard';

export default function Page() {
  return (  
    <main>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1>Jurassic Jumble</h1>
          <GameBoard
            gameCardLeft={
              <GameCard
                title="Tyrannosaurus Rex"
                description="Monstrous carnivore!"
              />
            }
            gameCardRight={
              <GameCard
                title="Diplodocus"
                description="Giant herbivore!"
              />
            }
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
