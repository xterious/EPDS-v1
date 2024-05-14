import React from "react";
import FeedbackCard from "@/components/admin/FeedbackCard";
const Feed = [
  {
    username: "Muthu Aanand SU",
    type: "query",
    content: "How can I apply for a new ration card online?",
  },
  {
    username: "Kamalesh Kumar S",
    type: "feedback",
    content: "The online ordering system is very convenient. Thank you!",
  },
  {
    username: "R K Gurusanjay",
    type: "query",
    content: "Is there a way to update my address for the ration card?",
  },
  {
    username: "M Nithya",
    type: "feedback",
    content: "The delivery service is prompt and reliable.",
  },
];
const AdminFeedback = () => {
  return (
    <div className='h-[90vh] overflow-scroll'>
      <div className='flex text-4xl font-mono font-bold justify-center mt-2'>
        Feedback And Queries
      </div>
      <div className='p-4'>
        {Feed.map((feed, index) => (
          <FeedbackCard
            key={index}
            username={feed.username}
            content={feed.content}
            type={feed.type}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminFeedback;
