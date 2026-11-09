import Image from "next/image";

export default function Home() {
  return (
    <div className="blog-layout">
      <div className="blog-layout__main">
        <h2 className="article-list__header">記事一覧</h2>
        <ul className="article-list">
          <li className="article-card"></li>
        </ul>
        <div className="pagination">
          <div className="pagination__header">
            <div className="pagination__title">現在のページ</div>
            <div className="patination__count">1/13</div>
          </div>
          <div className="pagination__controls">
            <div className="pagination__prev">&lt; PREV</div>
            <div className="pagination__pages">
              <button className="pagination__page pagination__page--current">1</button>
              <button className="pagination__page">2</button>
              <button className="pagination__page">3</button>
              <button className="pagination__page">4</button>
              <button className="pagination__ellipsis">...</button>
              <button className="pagination__page">5</button>
            </div>
            <div className="pagination__next">NEXT &gt;</div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="search-form">
          <input type="text" placeholder="Sarch..." className="search-form__field"></input>
          <button className="search-form__submit"><img src="search-form__icon.svg" className="search-form__icon"/></button>
        </div>
        <div className="profile-card">
        <div className="profile-card__avatar"><img src="S__81567755.jpg" className="profile-card__avatar-image" /></div>
        <p className="profile-card__bio">2004年生まれ、福井県出身。上京後の勤務先倒産、その後の闘病を経て、従来通りの働き方が難しくなりました。現在は身寄りもない東京で、体調と向き合いながら生活のために、個人でWebに関わる活動を行っています。 </p>
        <div className="profile-card__footer">プロフィールを見る →</div>
      </div>
      </div>
    </div>
  );
}
