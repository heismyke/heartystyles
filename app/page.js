import Banner from "@/app/components/Header";
import TrendingProducts from "@/app/components/TrendingProducts";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
      <>
        <Banner />
          <TrendingProducts />
          <About />
          <Contact />
      </>
  );
}
