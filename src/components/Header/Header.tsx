import { useAppDispatch } from "../../hooks/redux";
import { fetchLatestNews } from "../../store/actions/fetchLatestNews";

import "./Header.css";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="header-container">
      <span className="text">Latest News</span>
      <button
        onClick={() => dispatch(fetchLatestNews())}
        className="update-btn"
      >
        Refresh
      </button>
    </div>
  );
};

export default Header;
