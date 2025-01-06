import EditTopicForm from "@/app/components/EditTopicForm";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <EditTopicForm id={id} />
    </div>
  );
};

export default page;
