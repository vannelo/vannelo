import Image from "next/image";
import HTMLHead from "../../components/Layout/HTMLHead";
import Navigation from "../../components/Layout/Navigation";
import styles from "../../styles/portfolio.module.scss";
import Link from "next/link";
import PORTFOLIO from "../../constants/portfolio.json";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <HTMLHead />
      <main className={styles.main}>
        <Navigation />
        <div className="container">
          <h1>Portfolio</h1>
          <div className={styles.grid}>
            {PORTFOLIO.map((item, index) => (
              <Link href={item.link} className={styles.item} key={index}>
                <article>
                  <div className={styles.image}>
                    <Image
                      priority
                      alt={item.name}
                      src={`/img/portfolio/${item.image}`}
                      fill
                      quality={90}
                      style={{
                        objectFit: "cover",
                        zIndex: -1,
                        backgroundColor: "black",
                      }}
                      className={styles.imageImg}
                    />
                  </div>
                  <div className={styles.name}>
                    <h4>{item.name}</h4>
                  </div>
                  <div className={styles.tech}>
                    <p>{item.tech}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
