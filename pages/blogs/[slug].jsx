import React, { useEffect, useState } from "react";
import Postdetails from "../../Components/Postdetails";
import { getPostDetails, getPosts } from "../../servicecalls";
import Head from "next/head";
import { useRouter } from "next/router";

const BlogPostDetails = ({ post }) => {

  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <div className=" flex flex-col justify-center items-center mt-20">
          <h1 className="text-center font-extrabold text-4xl animate-bounce">
            Opps Sorry!!!
          </h1>
          <h2 className="text-center font-semibold text-2xl">
            Stay Tuned and Subscribe to our newsletter for blogs for this
            Category
          </h2>
        </div>
      </>
    );
  }

  if (post.length == 0) {
    return (
      <>
        <div className=" flex flex-col justify-center items-center mt-20">
          <h1 className="text-center font-extrabold text-4xl animate-bounce">
            Opps Sorry!!!
          </h1>
          <h2 className="text-center font-semibold text-2xl">
            Stay Tuned and Subscribe to our newsletter for blogs for this
            Category
          </h2>
        </div>
      </>
    );
  }
  

  return (
    <>
      <Head>
        <title>{post.title} | GearOnlineColts</title>
        <meta name="description" content={post.metaDesciption} />
        <meta name="keyword" content={post.keywords} />
        <meta property="og:site_name" content="www.gearonlinecolts.com" />
        <meta
          property="og:title"
          content={`${post.title} | GearOnlineColts`}
        />
        <meta property="og:description" content={post.metaDesciption} />
        <meta property="og:image" content={post.featuredimage.url} />
        <meta
          property="og:url"
          content={`https://www.gearonlinecolts.com/blogs/${post.slug}`}
        />
        <meta property="og:site_name" content="www.gearonlinecolts.com" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_us" />

        <meta itemProp="name" content={`${post.title} | GearOnlineColts`} />
        <meta itemProp="description" content={post.metaDesciption} />
        <meta itemProp="image" content={post.featuredimage.url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gearonlinecolts" />
        <meta
          name="twitter:title"
          content={`${post.title} | GearOnlineColts`}
        />
        <meta name="twitter:description" content={post.metaDesciption} />
        <meta name="twitter:creator" content="@gearonlinecolts" />
        <meta name="twitter:image" content={post.featuredimage.url} />

        <link
          rel="canonical"
          href={`https://www.gearonlinecolts.com/blogs/${post.slug}`}
        />
      </Head>
      <div className="subpixel-antialiased selection:bg-green-300 scrollbar-hide">
        <Postdetails post={post} />
      </div>
    </>
  );
};

export default BlogPostDetails;

export async function getStaticProps({ params }) {
  const data = (await getPostDetails(params.slug)) || [];
  return {
    props: {
      post: data[0],
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = (await getPosts()) || [];
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
