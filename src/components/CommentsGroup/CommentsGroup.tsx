import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchComments } from "../../store/actions/fetchComments";

import Comment from "../Comment";
import Loader from "../Loader";

import "./CommentsGroup.css";

type CommentsGroupProps = {
  kids: number[];
};

const CommentsGroup = ({ kids }: CommentsGroupProps) => {
  const dispatch = useAppDispatch();
  const rootComments = useAppSelector((state) => state.comments.list);
  const loading = useAppSelector((state) => state.comments.loading);

  useEffect(() => {
    if (kids) {
      dispatch(fetchComments(kids));
    }
  }, [dispatch, kids]);

  return (
    <div className="comments-group-container">
      {loading && <Loader />}

      <div className="comments-section">
        {rootComments &&
          kids &&
          rootComments.map((comment) => (
            <Comment
              key={comment.id}
              by={comment.by}
              text={comment.text}
              kids={comment.kids}
            />
          ))}
      </div>
    </div>
  );
};

export default CommentsGroup;
