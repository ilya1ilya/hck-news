import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchLatestNews } from "../../store/latestNewsSlice";

import News from "../News";

const Feed = () => {
  const dispatch = useAppDispatch();
  const latestNews = useAppSelector((state) => state.latestNews.list);

  useEffect(() => {
    dispatch(fetchLatestNews());
  }, [dispatch]);

  return (
    <>
      
    </>
  );
};

export default Feed;
