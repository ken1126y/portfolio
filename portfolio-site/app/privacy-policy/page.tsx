import styles from "./privacy-policy.module.css";

export default function AboutSitePage() {

    const privacyLists = [
        {   
            id: 1,
            title: "はじめに",
            content: "当サイトは、個人が運営するポートフォリオ兼ブログサイトです。利用者のプライバシーを尊重し、個人情報の適切な管理に努めます。"
        },
        {   
            id: 2,
            title: "個人情報の収集について",
            content: "当サイトでは、お問い合わせフォームをご利用いただく際に、氏名・メールアドレスなどの個人情報をご提供いただく場合があります。取得した情報は、お問い合わせへの回答や必要な連絡を行う目的でのみ利用し、それ以外の目的では利用しません。"
        },
        {
            id: 3,
            title: "Cookieについて",
            content: "当サイトでは、利便性向上や利用状況の分析のためにCookieを利用する場合があります。Cookieによって収集される情報には、個人を特定する情報は含まれません。利用者はブラウザの設定によりCookieを無効化できます。"

        },
        {
            id: 4,
            title: "アクセス解析ツールについて",
            content: "当サイトでは、サイト改善のためアクセス解析ツールを利用する場合があります。アクセス解析ツールではCookieを使用して匿名のトラフィックデータを収集することがありますが、個人を特定するものではありません。"
        },
        {
            id: 5,
            title: "外部サイトへのリンクについて",
            content: "当サイトには外部サイトへのリンクが含まれる場合があります。リンク先サイトにおける個人情報の取り扱いについては、各サイトのプライバシーポリシーをご確認ください。当サイトではnote等の外部サービスへのリンクを掲載する場合があります。"
        },
        {
            id: 6,
            title: "著作権について",
            content: "当サイトに掲載されている文章・画像等の著作物の著作権は、特別な記載がない限り当サイト運営者に帰属します。法令で認められる場合を除き、無断転載・無断使用を禁止します。"
        },
        {
            id: 7,
            title: "免責事項",
            content: "当サイトに掲載する情報については、可能な限り正確な内容を提供するよう努めていますが、その正確性・安全性を保証するものではありません。当サイトの情報を利用することで生じた損害等について、一切の責任を負いません。"
        },
        {
            id: 8,
            title: "プライバシーポリシーの変更",
            content: "本ポリシーは必要に応じて変更することがあります。変更後の内容は本ページに掲載した時点で効力を有するものとします。"
        }
    ];

    return (
        <div className={styles["privacy-policy-layout"]}>
        <div className={styles["privacy-policy-layout__overview"]}>
            <h2 className={styles["privacy-policy-layout__header"]}>プライバシーポリシー</h2>
            <div className={styles["privacy-policy-layout__columns"]}>
                <ul className={styles["privacy-policy-list"]}>
                    {
                        privacyLists.map((privacyList) => {
                            return (
                                <li className={styles["privacy-policy-card"]}>
                                    <div className={styles["privacy-policy-card__title"]}>{privacyList.id}.{privacyList.title}</div>
                                    <div className={styles["privacy-policy-card__content"]}>{privacyList.content}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </div>
    );
}