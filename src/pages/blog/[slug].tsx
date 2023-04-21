"use client";

import { GetStaticPaths, GetStaticProps } from "next";
import { prisma } from "@/lib/prismadb";
import Layout from "@/components/frontend/layout/layout";
import Headers from "@/components/headerAllpage";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";

interface Props {
  blogPost: any;
  category: any;
  recentPost: any;
}

export default function Blog({ blogPost, category, recentPost }: Props) {
  return (
    <div>
      <Layout>
        <div>
          <Headers content={blogPost.metaDescription} title={blogPost.title} />
        </div>
        <div className="mt-[80px] max-w-[1920px] mx-auto">
          <div className="h-auto">
            <Image
              src={`/blogs/hero_banner.jpg`}
              width={1920}
              height={350}
              alt="hero_Banner"
              className="w-full h-[250px] object-center object-cover"
            />
          </div>
          <article>
            <div className="xl:max-w-screen-2xl md:max-w-screen-xl sm:max-w-screen-sm flex flex-wrap items-center mx-auto p-4">
              <div className="flex flex-col lg:flex-row mx-auto">
                <div className="container lg:max-w-[753px] prose prose-zinc lg:prose-lg mx-auto">
                  <div>
                    <Image
                      src={`/${blogPost.coverImage}`}
                      width={753}
                      height={1423}
                      alt={blogPost.title}
                    />
                  </div>
                  <div className="flex flex-row justify-between my-12">
                    <span className="flex flex-row items-center text-sm text-[#0083CA]">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y="3" width="6" height="6" fill="#0083CA" />
                        <rect x="4" width="6" height="6" fill="#D9D9D9" />
                      </svg>
                      {blogPost.Category.title}
                    </span>
                    <span>
                      <FaFacebookSquare size={30} />
                    </span>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">{blogPost.title}</h1>
                    <div
                      dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    ></div>
                  </div>
                </div>
                <div className="container max-w-[300px] pl-10">
                  <div className="hidden md:block">
                    <div className="flex flex-row justify-between items-center underline">
                      <h1 className="text-2xl font-bold uppercase">Category</h1>
                      <span>
                        <FiArrowDownRight size={40} color="#0083CA" />
                      </span>
                    </div>
                    <ul>
                      {category?.map((cateData: any) => (
                        <li
                          key={cateData.id}
                          className="text-lg font-bold uppercase"
                        >
                          {cateData.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:my-36">
                    <div className="flex flex-row justify-between items-center underline">
                      <h1 className="text-2xl font-bold uppercase">
                        RECENT POST
                      </h1>
                      <span>
                        <FiArrowDownRight size={40} color="#0083CA" />
                      </span>
                    </div>
                    <div>
                      {recentPost?.map((recentPost: any) => (
                        <Link
                          href={`/blog/${recentPost.slug}`}
                          key={recentPost.id}
                          className="flex flex-row items-center mx-auto py-4"
                        >
                          <div>
                            <Image
                              src={`/${recentPost.coverImage}`}
                              width={100}
                              height={100}
                              alt={recentPost.title}
                            />
                          </div>
                          <div className="pl-4">
                            <h1 className="font-bold">{recentPost.title}</h1>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Layout>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await prisma.blogs.findMany({
    select: {
      slug: true,
    },
  });

  const paths = blogPosts.map((blog) => ({
    params: { slug: blog.slug.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const response = await prisma.blogs.findFirst({
    where: {
      slug: String(params?.slug),
    },
    select: {
      coverImage: true,
      content: true,
      createdAt: true,
      description: true,
      title: true,
      slug: true,
      Category: {
        select: {
          title: true,
        },
      },
    },
  });
  const blogPost = JSON.parse(JSON.stringify(response));

  const resCategory = await prisma.category.findMany({
    select: {
      id: true,
      title: true,
    },
  });
  const category = JSON.parse(JSON.stringify(resCategory));

  const resBlogs = await prisma.blogs.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      coverImage: true,
      description: true,
    },
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });
  const recentPost = JSON.parse(JSON.stringify(resBlogs));

  return {
    props: { blogPost, category, recentPost },
    revalidate: 60,
  };
};
