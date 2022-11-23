import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNewsItem } from "../store/actions/fetchNewsItem";

import { useParams } from "react-router-dom";

import NewsItemInfo from "../components/NewsItemInfo";
import CommentsGroup from "../components/CommentsGroup";

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const newsItemInfo = useAppSelector((state) => state.newsItem.item);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(fetchNewsItem(id));
  }, [dispatch, id]);

  return (
    <>
      {newsItemInfo && (
        <div>
          <NewsItemInfo info={newsItemInfo} />
          <CommentsGroup kids={newsItemInfo.kids} />
        </div>
      )}
    </>
  );
};

export default NewsPage;
