import React from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../servicecalls";

import PostCard from "../../Components/PostCard";

import Link  from "next/link";

const CategoryPost = ({ posts }) => {
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

  if (posts.length == 0) {
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
    <div className="container mx-auto px-10 mb-8">
      {/* <h1 className="text-2xl font-bold first-letter:text-3xl first-letter:text-blue-500 first-letter:italic tracking-wide">
        {category[0].name}
      </h1> */}

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ld:gap-10  p-2 md:p-5">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        {/* <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
