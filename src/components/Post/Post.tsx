import { Link } from "react-router-dom";

import "./Post.css";

const convertTime = (time: number) => {
  return new Date(time * 1000).toLocaleTimeString().slice(0, 5);
};

type PostProps = {
  title: string;
  score: number;
  by: string;
  time: number;
  id: number;
};

const Post = ({ title, score, by, time, id }: PostProps) => {
  return (
    <div className="post-container">
      <div className="score-section">
        <div>▲</div>
        <div>{score}</div>
      </div>
      <div className="info-section">
        <div className="info-top">
          <Link to={`/news-${id}`}>
            <span>{title}</span>
          </Link>
        </div>
        <div className="info-bottom">
          <div className="by">
            by <span>{by}</span>
          </div>
          <div>{convertTime(time)}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
