import { Key } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const articles = [
    {
      id: 1,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事タイトル',
      date: '2026-11-26'
    },
    {
      id: 2,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事のタイトル',
      date: '2026-11-26'
    },
    {
      id: 3,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事のタイトル',
      date: '2026-11-26'
    },
      {
      id: 4,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事のタイトル',
      date: '2026-11-26'
    },
    {
      id: 5,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事のタイトル',
      date: '2026-11-26'
    },

  ]

  const latestArticles = [
    {
      id: 1,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事タイトル',
      date: '2026-11-26'
    },
    {
      id: 1,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事タイトル',
      date: '2026-11-26'
    },
    {
      id: 1,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事タイトル',
      date: '2026-11-26'
    },
  ]

  const popularArticles = [
      {
      id: 1,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事タイトル',
      date: '2026-11-26'
    },
    {
      id: 1,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事タイトル',
      date: '2026-11-26'
    },
    {
      id: 1,
      img: '1636144476552-PSkUAKkMDI.webp',
      title: '記事タイトル',
      date: '2026-11-26'
    },
  ]

  return (
    <div className={styles["blog-layout"]}>
      <div className={styles["blog-layout__overview"]}>
        <h2 className={styles["article-list__header"]}>記事一覧</h2>
        <ul className={styles["article-list"]}>
          {
            articles.map((article) => {
              return (
                <li className={styles['article-card']}>
                  <div className={styles['article-card__img']}><img src={article.img} /></div>
                  <h3 className={styles['article-card__title']}>{article.title}</h3>
                  <div className={styles['article-card__date']}>{article.date}</div>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.pagination}>
          <div className={styles["pagination__header"]}>
            <div className={styles["pagination__title"]}>現在のページ</div>
            <div className={styles["pagination__count"]}>1/13</div>
          </div>
          <div className={styles["pagination__controls"]}>
            <div className={styles["pagination__prev"]}>&lt; PREV</div>
            <div className={styles["pagination__pages"]}>
              <button className={`${styles["pagination__page"]} ${styles["pagination__page--current"]}`}>1</button>
              <button className={styles["pagination__page"]}>2</button>
              <button className={styles["pagination__page"]}>3</button>
              <button className={styles["pagination__page"]}>4</button>
              <div className={styles["pagination__ellipsis"]}>...</div>
              <button className={styles["pagination__page"]}>13</button>
            </div>
            <div className={styles["pagination__next"]}>NEXT &gt;</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles["search-form"]}>
          <input type="text" placeholder="Search..." className={styles["search-form__field"]}></input>
          <button className={styles["search-form__submit"]}><img src="/search-form__icon.svg" alt="検索" className={styles["search-form__icon"]}/></button>
        </div>
        <div className={styles["profile-card"]}>
          <div className={styles["profile-card__avatar"]}><img src="/S__81567755.jpg" alt="プロフィール画像" className={styles["profile-card__avatar-image"]}/></div>
          <p className={styles["profile-card__bio"]}>2004年生まれ、福井県出身。上京後の勤務先倒産、その後の闘病を経て、従来通りの働き方が難しくなりました。現在は身寄りもない東京で、体調と向き合いながら生活のために、個人でWebに関わる活動を行っています。 </p>
          <Link href="/about" className={styles["profile-card__footer"]}>プロフィールを見る →</Link>
        </div>
       <div className={styles["latest-articles"]}>
          <h3 className={styles["latest-articles__header"]}>最新の記事</h3>
          <ul className={styles["latest-articles__list"]}>
            {latestArticles.map((latestArticle) => {
              return (
                <li key={latestArticle.id} className={styles["latest-article-card"]}>
                  <div className={styles["latest-article-card__img"]}><img src={latestArticle.img} /></div>
                  <div className={styles['latest-article-card__content']}>
                    <h3 className={styles["latest-article-card__title"]}>{latestArticle.title}</h3>
                    <div className={styles["latest-article-card__date"]}>{latestArticle.date}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles["popular-articles"]}>
          <h3 className={styles["popular-articles__header"]}>人気の記事</h3>
          <ul className={styles["popular-articles__list"]}>
            {popularArticles.map((popularArticle) => {
              return (
                <li key={popularArticle.id} className={styles["popular-article-card"]}>
                  <div className={styles["popular-article-card__img"]}>
                    <img src={popularArticle.img} />
                  </div>
                  <div className={styles["popular-article-card__content"]}>
                    <h3 className={styles["popular-article-card__title"]}>
                      {popularArticle.title}
                    </h3>
                    <div className={styles["popular-article-card__date"]}>
                      {popularArticle.date}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}