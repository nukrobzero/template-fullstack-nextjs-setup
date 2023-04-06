import Headers from "@/components/headerAllpage";
import Hero from "@/components/frontend/homepage/hero";
import ServiceHero from "@/components/frontend/homepage/services";
import Layout from "@/components/frontend/layout/layout";
import Products from "@/components/frontend/homepage/products";
import BlogHome from "@/components/frontend/homepage/blogs";
import Simtec from "@/components/frontend/homepage/simtec";
import NewsHome from "@/components/frontend/homepage/news";
import { useEffect } from "react";
import type { GetStaticProps, NextPage } from "next";
import axios from "axios";

interface Props {
  data: any;
}

const Home: NextPage<Props> = ({ data }) => {
  // useEffect(() => {
  //   if (window.HubSpotConversations) {
  //     window.HubSpotConversations.widget.load();
  //   }
  // }, [])

  return (
    <Layout>
      <div>
        <Headers title="Home Page" content="Home" />
        <Hero />
        <ServiceHero />
        <Products />
        <BlogHome />
        <Simtec />
        <NewsHome />
      </div>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await axios.get("/api/dashboard/service");
//   const data = response.data;
//   return {
//     props: { data },
//   };
// };

export default Home;
