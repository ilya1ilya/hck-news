import { useState, useEffect } from "react";

import "./Comment.css";

import IComment from "../../models/IComment";

const fetchNestedComments = (kids: number[]) => {
  const requests = kids.map((kid) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`);
  });

  const comments = Promise.all(requests).then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  );

  return comments;
};

type CommentProps = {
  by: string;
  text: string;
  kids: number[];
};

const Comment = ({ by, text, kids }: CommentProps) => {
  const [nestedComments, setNestedComments] = useState<IComment[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    if (kids) {
      fetchNestedComments(kids).then((results) => setNestedComments(results));
    }
  }, [kids]);

  const handleClick = () => {
    setShowMore(!showMore);
  }

  return (
    <div className="comment-container">
      <div>{by}</div>
      <div>{text}</div>
      {nestedComments.length > 0 && <button onClick={handleClick} >Show More</button>}
      {nestedComments.length > 0 && showMore &&
        nestedComments.map((comment) => {
          return (
            <div key={comment.id} className="nested-comment-container">
              <Comment
                by={comment.by}
                text={comment.text}
                kids={comment.kids}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Comment;
