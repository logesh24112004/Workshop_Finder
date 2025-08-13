import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedWorkshops } from "@/components/FeaturedWorkshops";
import { Categories } from "@/components/Categories";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedWorkshops />
        <Categories />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
