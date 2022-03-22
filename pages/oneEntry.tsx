import React from "react";
import Layout from "../components/layout";

import FlashCardOneEntry from "../components/goodoneentry";

import { arrayData } from "../data/questionanswer";
const Mentale: React.FC = () => {
  return (
    <Layout>
      <FlashCardOneEntry mentaleFlashCardData={arrayData} />
    </Layout>
  );
};

export default Mentale;
