import Headers from "@/components/headerAllpage";
import Hero from "@/components/frontend/homepage/hero";
import ServiceHero from "@/components/frontend/homepage/services";
import Layout from "@/components/frontend/layout/layout";
import Products from "@/components/frontend/homepage/products";

export default function Home() {
  return (
    <Layout>
      <div>
        <Headers title="Home Page" content="Home" />
        <Hero />
        <ServiceHero />
        <Products />
      </div>
    </Layout>
  );
}
