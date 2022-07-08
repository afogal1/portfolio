import Image from "next/image";
import Illustration from '../components/Illustration';
import styles from '../styles/About.module.css';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightScreen}>
        <Image
          className={styles.picture}
          src="/code.png"
          width={450}
          height={280}
          alt="Code Avatar"
        />
      </div>
      <div className={styles.leftScreen}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.about}>
        An avid and passionate full stack web developer specializing in the MERN stack. I love to build and 
        design websites which the end user would enjoy using while keeping the website performant and the code 
        clean. Up for freelance web development work and collaborating on exciting projects.
        </p>
        <ul className={styles.skillList}>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>Python</span>
          </li>
          <li>
            <span>React</span>
          </li>
          <li>
            <span>SQL</span>
          </li>
          <li>
            <span>C++</span>
          </li>
          <li>
            <span>PHP</span>
          </li>
          <li>
            <span>Express</span>
          </li>
          <li>
            <span>Django</span>
          </li>
          <li>
            <span>Angular</span>
          </li>
          <li>
            <span>.NET</span>
          </li>
        </ul>
        <a
          className={styles.resumeButton}
          href="https://www.linkedin.com/in/alexander-fogal-3b9652178/"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;