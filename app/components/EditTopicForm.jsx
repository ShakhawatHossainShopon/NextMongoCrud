"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function EditTopicForm({ id, title, des }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(des);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3 mt-6" onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder={title}
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />

      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder={des}
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;
