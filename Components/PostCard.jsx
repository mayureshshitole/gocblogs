import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <Link passHref href={`/blogs/${post.slug}`}>
      <div className="bg-white shadow-md rounded-lg p-2 ">
        <article className="relative overflow-hidden flex flex-row md:flex-col items-center space-x-3 sm:space-x-0 md:h-72">
          <div className="relative object-contain w-28 h-20 md:w-full md:h-32 shadow-md rounded-md md:rounded-lg ">
            <Image
              // width={450}
              // height={450}
              layout="fill"
              src={post.featuredimage.url}
              alt={post.title}
              className="object-fill shadow-md rounded-md md:rounded-lg "
            />
          </div>
          <div className="md:m-2 flex flex-col justify-between w-full">
            <div>
              <h1 className="font-semibold text-sm  sm:text-lg cursor-pointer hover:text-blue-500 transform transition duration-500 ease-in-out first-letter:text-2xl first-letter:text-blue-500 first-letter:italic">
                {post.title}
              </h1>
              <div className="hidden sm:inline-block">
                <p className="line-clamp-2  text-base text-gray-500">
                  {post.metaDesciption}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-2 items-center">
              <Link passHref href={`/categories/${post.categories[0].slug}`}>
                <h3 className=" text-xs sm:text-sm text-blue-500 uppercase cursor-pointer hover:text-green-300 transform transition duration-600 ease-in-out rounded-full ">
                  {post.categories[0].name}
                </h3>
              </Link>
              <time className="text-xs sm:text-sm flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </time>
              <svg
                className="w-7 h-7 hidden sm:inline-block p-1 border border-blue-500 bg-gray-200 rounded-full text-blue-500  font-extrabold hover:animate-slowSpin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
};

export default PostCard;
