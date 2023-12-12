import React from "react";
import MainLayout from "../../layouts/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./components/SuggestedPosts";
import CommentsContainer from "../../components/Comments/CommentsContainer";

const breadCrumbsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article title",
    link: "/blog/1",
  },
];

const postData = [
  {
    _id: "1",
    image: images.postImage1,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.postImage1,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.postImage1,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
];

const tagsData = ["Medical", "Lifestyle"];

const commentData = [
  {
    _id: "1",
    comment: "comment 1",
  },
  {
    _id: "2",
    comment: "comment 2",
  },
];

const ArticleDetail = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            src={images.postImage1}
            alt="laptop"
            className="rounded-xl w-full"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7 t text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
              vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi
              tristique senectus et netus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Egestas purus viverra accumsan in
              nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit
              scelerisque. In egestas erat imperdiet sed euismod nisi porta
              lorem mollis. Morbi tristique senectus et netus. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Sapien
              faucibus et molestie ac feugiat sed lectus vestibulum.
            </p>
          </div>
          <CommentsContainer
            className="mt-10"
            comments={commentData}
            logginedUserId={"a"}
          />
        </article>
        <SuggestedPosts
          header={"Latest Article"}
          posts={postData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetail;
