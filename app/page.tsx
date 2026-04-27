import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Coaches from "./components/Coaches";
import Gallery from "./components/Gallery";
import Transformations from "./components/Transformations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Facilities />
        <Coaches />
        <Gallery />
        <Transformations />
      </main>
      <Footer />
    </div>
  );
}
