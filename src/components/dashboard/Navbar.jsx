import { IoSearch } from "react-icons/io5";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import Avatar from "@/utils/Avatar";
import AvatarWithMenu from "@/utils/AvatarWithMenu";
import aiIcon from "@/assets/ai.png";

const Navbar = ({ setRole }) => {
  const navigate = useNavigate();

  const onRefresh = () => {
    setRole(null);
    navigate("/admin");
  };

  const openAIChat = () => {
    navigate("/chat");
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.center}>
          <div className={styles.brand}>
            <h1>KERNN AUTOMATIONS</h1>
            <button className={styles.refreshBtn} onClick={onRefresh}>
              <i class="bi bi-arrow-repeat"></i>
            </button>
          </div>

          {/* ---------- AI ICON ADDED HERE ---------- */}
          <div className={styles.aiIcon} onClick={openAIChat}>
            <img src={aiIcon} alt="AI" className={styles.aiIconImg} />
          </div>
          {/* ---------------------------------------- */}

          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
            />
            <span className={styles.searchIcon}>
              <IoSearch />
            </span>
          </div>
        </div>

        {/* <div className={styles.icon}>
          
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.20751 10.25C7.06043 5.31813 12.3927 2 18.5001 2C27.6127 2 35 9.38728 35 18.4999C35 27.6126 27.6127 34.9999 18.5001 34.9999C12.3927 34.9999 7.06043 31.6818 4.20751 26.7499M18.4999 25.0999L25.0999 18.4999M25.0999 18.4999L18.4999 11.9M25.0999 18.4999H2"
              stroke="black"
              stroke-width="3.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> */}

        {/* <Avatar /> */}
        <AvatarWithMenu />
      </nav>
    </>
  );
};
export default Navbar;
