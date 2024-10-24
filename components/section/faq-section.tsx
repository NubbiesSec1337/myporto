import React from "react";
import Title from "../ui/title";
import Faq from "../component/faq";

const FAQ = [
  {
    question: "What services do you offer as a Software Engineer?",
    answer:
      "I offer services such as frontend and backend development, web application creation, performance optimization, and web security pentesting to ensure reliable and secure applications.",
  },
  {
    question: "What technologies and tools are you proficient in?",
    answer:
      "I have experience with JavaScript, TypeScript, React, Next.js, Node.js, as well as backend technologies like Express and databases such as MongoDB and MySQL.",
  },
  {
    question: "Do you accept freelance or remote projects?",
    answer:
      "Yes, I am open to freelance projects and remote work. I have experience working with clients from various countries.",
  },
  {
    question: "What is your process when working with clients?",
    answer: "I usually start by discussing the client’s requirements, then I create a proposal and break the project into milestones. At each stage, I provide progress updates and gather feedback to ensure alignment.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The project timeline depends on its complexity. Simple websites may take 1-2 weeks, while more complex web applications can take several months.",
  }
];

const FaqSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="faq">
      <Title
        title="FAQ"
        subtitle="Frequently asked questions"
        className="mb-6 md:mb-12"
      />
      <div className="flex flex-col gap-y-4 w-full">
        {FAQ.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
