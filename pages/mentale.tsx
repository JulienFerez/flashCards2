import React from "react";
import FlashCardMentale from "../components/goodmentale";
import Layout from "../components/layout";
import { arrayData } from "../data/questionanswer";

const Mentale: React.FC = () => {
  return (
    <Layout>
      <FlashCardMentale mentaleFlashCardData={arrayData} />
    </Layout>
  );
};

export default Mentale;
