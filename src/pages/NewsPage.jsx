import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNewsItem } from "../store/actions/fetchNewsItem";

import { useParams } from "react-router-dom";

import NewsItemInfo from "../components/NewsItemInfo";

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const newsItem = useAppSelector((state) => state.newsItem.item);
//   const loading = useAppSelector((state) => state.newsItem.loading);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNewsItem(id));
  }, [dispatch, id]);

  console.log(newsItem);

  return (
    <>
      {newsItem && (
        <NewsItemInfo
          id={id}
          by={newsItem.by}
          kids={newsItem.kids}
          time={newsItem.time}
          title={newsItem.title}
          url={newsItem.url}
        />
      )}
    </>
  );
};

export default NewsPage;
