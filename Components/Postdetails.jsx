import React from "react";

const Postdetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col items-center px-4">
          <h1 className="mt-5 text-3xl md:text-5xl font-bold md:font-extrabold tracking-tight ">
            {post.title}
          </h1>
          <hr className="mt-4 md:mt-6 border-t-4 w-full mx-auto" />
        </header>
        <div className="p-2 w-full">
          <img
            src={post.featuredimage.url}
            alt={post.title}
            className="rounded-lg align-middle items-center mx-auto object-fill sm:w-3/5 shadow-xl"
          />
        </div>
        <article className=" prose-lg prose-blue mx-auto md:prose-xl lg:prose-2xl overflow-y-hidden p-5">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </article>
      </div>
    </>
  );
};

export default Postdetails;
