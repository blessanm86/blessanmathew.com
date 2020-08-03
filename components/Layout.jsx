import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faEnvelope,
  faRss,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Layout.module.css";

export default ({ children }) => (
  <div className={styles.bodyContainer}>
    <section className={styles.leftContainer}>
      <img
        className={styles.profilePic}
        src="/images/profile-pic.jpg"
        alt="blessan mathew"
      />
      <div className={styles.profileTitleContainer}>
        <div className={styles.profileName}>BLESSAN MATHEW&#39;S</div>
        <div className={styles.profileTitle}>DEV BLOG</div>
      </div>
      <div className={styles.aboutMe}>
        <p>
          Hi, My name is{" "}
          <span className={styles.emphasize}>Blessan Mathew</span>. I'm a
          frontend developer from India, living in Berlin and working for
          Zalando
        </p>
      </div>
      <ul className={styles.profileLinks}>
        <li>
          <a
            href="mailto:blessenm@gmail.com?Subject=Hi there"
            title="MailTo: blessenm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} transform="grow-14" />
              <FontAwesomeIcon icon={faEnvelope} className={styles.iconLight} />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/blessenm"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} transform="grow-14" />
              <FontAwesomeIcon
                icon={faGithubAlt}
                className={styles.iconLight}
              />
            </span>
          </a>
        </li>
        <li>
          <a
            href="/atom.xml"
            title="RSS Feed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} transform="grow-14" />
              <FontAwesomeIcon icon={faRss} className={styles.iconLight} />
            </span>
          </a>
        </li>
        <li>
          <a
            href="http://in.linkedin.com/pub/blessan-mathew/24/605/730"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} transform="grow-14" />
              <FontAwesomeIcon icon={faLinkedin} className={styles.iconLight} />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/blessenm86"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} transform="grow-14" />
              <FontAwesomeIcon icon={faTwitter} className={styles.iconLight} />
            </span>
          </a>
        </li>
      </ul>
      <a href="/" title="Home" className={styles.homeButton}>
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faCircle} transform="grow-14" />
          <FontAwesomeIcon icon={faHome} className={styles.iconLight} />
        </span>
      </a>
      <footer>
        Powered By{" "}
        <a href="http://jekyllrb.com" target="_blank" rel="noopener noreferrer">
          <span className={styles.emphasize}>Jekyll</span>
        </a>
      </footer>
    </section>
    <section>{children}</section>
  </div>
);
