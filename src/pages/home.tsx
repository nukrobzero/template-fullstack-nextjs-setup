import Hero from "@/components/homepage/hero";
import ServiceHero from "@/components/homepage/services";
import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Hero />
        <ServiceHero />
      </div>
    </Layout>
  );
}
