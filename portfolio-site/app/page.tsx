import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles["blog-layout"]}>
      <div className={styles["blog-layout__main"]}>
        <h2 className={styles["article-list__header"]}>記事一覧</h2>
        <ul className={styles["article-list"]}>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          <li className={styles["article-card"]}></li>
          
        </ul>
        <div className={styles.pagination}>
          <div className={styles["pagination__header"]}>
            <div className={styles["pagination__title"]}>現在のページ</div>
            <div className={styles["patination__count"]}>1/13</div>
          </div>
          <div className={styles["pagination__controls"]}>
            <div className={styles["pagination__prev"]}>&lt; PREV</div>
            <div className={styles["pagination__pages"]}>
              <button className={`${styles["pagination__page"]} ${styles["pagination__page--current"]}`}>1</button>
              <button className={styles["pagination__page"]}>2</button>
              <button className={styles["pagination__page"]}>3</button>
              <button className={styles["pagination__page"]}>4</button>
              <div className={styles["pagination__ellipsis"]}>...</div>
              <button className={styles["pagination__page"]}>5</button>
            </div>
            <div className={styles["pagination__next"]}>NEXT &gt;</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles["search-form"]}>
          <input type="text" placeholder="Search..." className={styles["search-form__field"]}></input>
          <button className={styles["search-form__submit"]}><img src="search-form__icon.svg" className={styles["search-form__icon"]}/></button>
        </div>
        <div className={styles["profile-card"]}>
          <div className={styles["profile-card__avatar"]}><img src="S__81567755.jpg" className={styles["profile-card__avatar-image"]}/></div>
          <p className={styles["profile-card__bio"]}>2004年生まれ、福井県出身。上京後の勤務先倒産、その後の闘病を経て、従来通りの働き方が難しくなりました。現在は身寄りもない東京で、体調と向き合いながら生活のために、個人でWebに関わる活動を行っています。 </p>
          <Link href="/about" className={styles["profile-card__footer"]}>プロフィールを見る →</Link>
        </div>
      </div>
    </div>
  );
}