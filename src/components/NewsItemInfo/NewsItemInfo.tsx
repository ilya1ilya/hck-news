import "./NewsItemInfo.css";

const convertTime = (time: number) => {
  return new Date(time * 1000).toLocaleDateString();
};

type NewsItemProps = {
  id: number;
  by: string;
  kids?: number[];
  time: number;
  title: string;
  url: string;
};

const NewsItemInfo = ({
  id,
  by,
  kids,
  time,
  title,
  url = "link is not provided",
}: NewsItemProps) => {
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
            <span>Comments:</span> {kids ? kids.length : 0}
          </div>
          <div>
            <span>Date:</span> {convertTime(time)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItemInfo;
