type NewsProps = {
  id: number;
  title: string;
  score: number;
  by: string;
  time: number;
};

const News = ({ id, title, score, by, time }: NewsProps) => {
  return (
    <div>
      <div>Title: {title}</div>
    </div>
  );
};

export default News;
