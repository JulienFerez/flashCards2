import React from "React";
import Layout from "../components/layout";
import FlashCardResponseMultiple from "../components/goodmultiple";
import { arrayData } from "../data/questionanswer";

const Mentale: React.FC = () => {
  return (
    <Layout>
      <FlashCardResponseMultiple mentaleFlashCardData={arrayData} />
    </Layout>
  );
};

export default Mentale;
