import styles from "./about-site.module.css";

export default function AboutSitePage() {

  const aboutSiteSections = [
    {
      id: 1,
      title: "サイトの概要",
      content:
        "当サイトは、学習記録やWeb開発に関する情報、趣味などを発信する個人ブログサイトです。",
    },
    {
      id: 2,
      title: "制作理由",
      content:
        "Web系のポートフォリオを作りたいと思ったことが制作のきっかけです。プロフィールやスキル、制作物をまとめて紹介できるサイトを作ることにしました。また、ブログ機能も取り入れることで、ポートフォリオとしてだけでなく、情報を発信できる場所にしたいと考えました。",
    },
    {
      id: 3,
      title: "掲載内容",
      content:
        "ブログでは、プログラミングの勉強やWeb開発についてだけでなく、普段の生活であったことや趣味についても書いています。技術的な内容ばかりにするつもりはなく、そのとき興味を持ったことや、誰かに共有したいと思ったことなども自由に取り上げています。",
    },
    {
      id: 4,
      title: "各ページについて",
      content:
        "ブログでは記事の一覧、プロフィールでは自分の経歴やスキルを確認できます。プロダクトにはこれまでに作ったWebサイトやアプリケーションを掲載しています。また、お問い合わせにはフォームを設置しているので、連絡が必要な場合はこちらから送信できます。",
    },
    {
      id: 5,
      title: "運営方針",
      content:
        "更新頻度を無理に決めるのではなく、自分のペースで少しずつ更新していく予定です。文章やデザインについても、最初から完璧を目指すのではなく、実際に使いながら気になった部分を修正していきます。使いやすく、見やすいサイトになるように改善を続けていきたいです。",
    },
    {
      id: 6,
      title: "外部サービスについて",
      content:
        "当サイトでは、情報の発信や制作物の公開などに外部サービスを利用しています。ブログ記事については、外部のプラットフォームであるnoteを利用しており、記事へのリンクを当サイト内に掲載しています。また、GitHubなどのサービスを通じて、制作物やソースコードを公開する場合があります。各サービスの利用にあたっては、それぞれの運営元が定める利用規約やプライバシーポリシーをご確認ください。",
    },
  ];

  return (
    <div className={styles["about-site-layout"]}>
      <div className={styles["about-site-layout__overview"]}>
        <h2 className={styles["about-site-layout__header"]}>このサイトについて</h2>
        <div className={styles["about-site-layout__columns"]}>
          {
            aboutSiteSections.map((aboutSiteSection) => {
              return (
                <section className={styles["about-section-columns"]}>
                  <h3 className={styles["about-section-columns__title"]}>{aboutSiteSection.title}</h3>
                  <p className={styles["about-section-columns__content"]}>{aboutSiteSection.content}</p>
                </section>
              )
            })
          }
         </div>
      </div>
    </div>
  );
}