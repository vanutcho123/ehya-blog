import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import CTA from "./components/CTA";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
