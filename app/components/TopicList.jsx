import React from "react";
import { RemoveBtn } from "./RemoveBtn";
import { Link } from "next/link";
export const TopicList = () => {
  return (
    <div>
      <div>
        <h2>Topic Titles</h2>
        <div>Topic des</div>
      </div>
      <div>
        <RemoveBtn />
        <Link href={"/editTopic/123"}>Edit</Link>
      </div>
    </div>
  );
};
