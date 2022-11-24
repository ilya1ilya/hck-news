import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchLatestNews } from "../../store/actions/fetchLatestNews";

import Post from "../Post";
import Loader from "../Loader";

import "./Feed.css";

import IPost from "../../models/IPost";

const Feed = () => {
  const dispatch = useAppDispatch();
  const latestNews = useAppSelector((state) => state.latestNews.list);
  const loading = useAppSelector((state) => state.latestNews.loading);

  useEffect(() => {
    dispatch(fetchLatestNews());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {latestNews.length > 0 && !loading && (
        <div className="feed-container">
          {latestNews.map((post: IPost) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                by={post.by}
                score={post.score}
                time={post.time}
                id={post.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Feed;
