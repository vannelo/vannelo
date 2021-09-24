import Link from "next/link";
import { Fragment } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className={styles.desktop}>
        <Link href="#stack">
          <a>Stack</a>
        </Link>
        <Link href="https://www.behance.net/vannelo">
          <a>Portfolio</a>
        </Link>
        <Link href="mailto:work@vannelo.com">
          <a>Contact</a>
        </Link>
      </div>
    </Fragment>
  );
};

export default Navigation;
