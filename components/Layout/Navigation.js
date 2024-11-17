import Link from "next/link";
import { Fragment } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className={styles.desktop}>
        <Link href="#stack">Stack</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="mailto:work@vannelo.com">Contact</Link>
      </div>
    </Fragment>
  );
};

export default Navigation;
