 import styles from "./Footer.module.css";
 
// import TicketingService from "./TicketService/TicketingService";

function Footer() {
  return (
    <>
      <footer className={styles.foot}>
        <div className={styles.footContent}>
          <p className={""}>
            Powered by{" "}
            <span>
              <a
                href="https://kernn.ai/"
                target="blank"
                className="nav-link d-inline"
              >
                KERNN
              </a>
            </span>
          </p>
        </div>
       
      </footer>
    </>
  );
}

export default Footer;