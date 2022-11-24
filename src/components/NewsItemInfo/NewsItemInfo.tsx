import { Link } from "react-router-dom";

import INewsItem from "../../models/INewsItem";
import "./NewsItemInfo.css";

const convertTime = (time: number) => {
  return new Date(time * 1000).toLocaleDateString();
};

type NewsItemProps = {
  info: INewsItem;
};

const NewsItemInfo = ({ info }: NewsItemProps) => {
  let { title, url = "no link provided", by, time, descendants } = info;

  return (
    <div className="item-container">
      <div className="info-container">
        <div>{title}</div>
        <div>
          <span>Link:</span> {url}
        </div>
        <div className="bottom-info">
          <div>
            <span>By:</span> {by}
          </div>
          <div>
            <span>Comments:</span> {descendants}
          </div>
          <div>
            <span>Date:</span> {convertTime(time)}
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <Link to="/">
          <button>Back</button>
        </Link>
        <button onClick={() => window.location.reload()}>
          Refresh Comments
        </button>
      </div>
    </div>
  );
};

export default NewsItemInfo;
