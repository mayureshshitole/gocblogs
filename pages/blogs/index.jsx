import Head from "next/head";

import { getPosts } from "../../servicecalls";

import PostCard from "../../Components/PostCard";

export default function Blogs({ posts }) {
  return (
    <div className=" subpixel-antialiased selection:bg-green-300 scrollbar-hide">
      <Head>
        <title> GearOnlineColts</title>
        <meta
          name="description"
          content="The only destination for you to get Tech News, Apps Reviews, Softwares Reviews, Books Reviews and Unique Gadgets. Genuine and Unbiased blogs!"
        />
        <meta
          name="keyword"
          content="technews, apps reviews, software reviews, books reviews, unique gadgets, best apps, top mobiles, best software, tech, electronic"
        />
        <meta property="og:site_name" content="www.gearonlinecolts.com" />
        <meta property="og:title" content=" GearOnlineColts" />
        <meta
          property="og:description"
          content="The only destination for you to get Tech News, Apps Reviews, Softwares Reviews, Books Reviews and Unique Gadgets. Genuine and Unbiased blogs!"
        />
        <meta property="og:image" content="/logoGOC.png" />
        <meta property="og:url" content="https://www.gearonlinecolts.com/" />
        <meta property="og:site_name" content="www.gearonlinecolts.com" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_us" />

        <meta itemProp="name" content=" GearOnlineColts" />
        <meta
          itemProp="description"
          content="The only destination for you to get Tech News, Apps Reviews, Softwares Reviews, Books Reviews and Unique Gadgets. Genuine and Unbiased blogs!"
        />
        <meta itemProp="image" content="/logoGOC.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gearonlinecolts" />
        <meta name="twitter:title" content=" GearOnlineColts" />
        <meta
          name="twitter:description"
          content="The only destination for you to get Tech News, Apps Reviews, Softwares Reviews, Books Reviews and Unique Gadgets. Genuine and Unbiased blogs!"
        />
        <meta name="twitter:creator" content="@gearonlinecolts" />
        <meta name="twitter:image" content="/logoGOC.png" />

        <link rel="canonical" href="https://www.gearonlinecolts.com" />
      </Head>

      <main>
        <div className="lg:max-w-7xl mx-auto mt-3 md:mt-8 ">
          <h1 className="text-2xl font-bold first-letter:text-3xl first-letter:text-blue-500 first-letter:italic tracking-wide">
            Recently Trending
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ld:gap-10  p-2 md:p-5 ">
            {posts.map((post) => (
              <div key={post.node.slug}>
                <PostCard post={post.node} key={post.node.slug} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
