import styles from "./news.module.css";

export default function NewsPage() {

  const newsLists = [
    {
      id: 1,
      type: '改修情報',
      date: '2025-11-26',
      content: '一部UIの改善を行いました。'
    },
    {
      id: 2,
      type: '開発情報',
      date: '2025-11-26',
      content: '新しいサイトが公開されました。Productページよりご確認いただけます。'
    },
    {
      id: 3,
      type: '運営者情報',
      date: '2025-11-26',
      content: '体調不良のためしばらくの更新をお休みします。'
    },
    {
      id: 4,
      type: '更新情報',
      date: '2025-11-26',
      content: '新しく記事が４件公開されています。'
    },
    {
      id: 5,
      type: '開発情報',
      date: '2025-11-26',
      content: 'お知らせお知らせお知らせお知らせ'
    },
    {
      id: 6,
      type: '開発情報',
      date: '2025-11-26',
      content: 'お知らせお知らせお知らせお知らせ'
    }
  ]

  return (
    <div className={styles['news-layout']}>
        <div className={styles['news-layout__overview']}>
          <h2 className={styles['news-layout__header']}>お知らせ</h2>
          <div className={styles['news-layout__intro']}>サイトの更新情報をお知らせします。</div>
          <div className={styles['news-layout__columns']}>
            <ul className={styles['news-list']}>
              { newsLists.map((newsList) => {
                return (
                  <li key={newsList.id} className={styles['news-card']}>
                    <div
                      key={newsList.id}
                      className={`${styles['news-card__type']} ${
                        styles[
                          {
                            '改修情報': 'news-card__type--repair',
                            '開発情報': 'news-card__type--development',
                            '運営者情報': 'news-card__type--operation',
                            '更新情報': 'news-card__type--update',
                          }[newsList.type] || ''
                        ]
                      }`}
                    >
                      {newsList.type}
                    </div>
                    <div key={newsList.id} className={styles['news-card__date']}>{newsList.date}</div>
                    <div key={newsList.id} className={styles['news-card__content']}>{newsList.content}</div>
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
        </div>
    </div>
  );
}