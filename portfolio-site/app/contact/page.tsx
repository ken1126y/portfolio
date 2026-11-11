import styles from "./contact.module.css";
import { createElement } from 'react';

export default function ContactPage() {

    const formFields = [
        {
            id: 1,
            label: 'お名前',
            tag: 'input',
            type: 'text',
            placeholder: '例）山田 太郎',
            className: 'contact-form__input'
        },
        {
            id: 2,
            label: 'メールアドレス',
            placeholder: 'example@example.com',
            tag: 'input',
            type: 'email',
            className: 'contact-form__input'
        },
        {
            id: 3,
            label: 'お問い合わせ内容',
            tag: 'textarea',
            placeholder: 'ご相談内容や希望のご連絡方法など、ご都合のいい内容をご記入ください。',
            className: 'contact-form__textarea'
        },
        {
            id: 4,
            label: 'お電話番号',
            tag: 'input',
            type: 'tel',
            placeholder: '090-1234-5678',
            className: 'contact-form__input'
        },
        {
            id: 5,
            label: 'ファイルなど',
            tag: 'input',
            type: 'file',
            placeholder: '',
            className: 'contact-form__input',
            multiple: 'multiple'
        }
    ]

    const privacySections = [
    {
        id: 1,
        title: "1. 取得する個人情報",
        body: "当サイトは、お問い合わせの際に、お名前、メールアドレス、お電話番号、お問い合わせ内容、添付ファイルを取得します。",
    },
    {
        id: 2,
        title: "2. 利用目的",
        body: "取得した個人情報は、お問い合わせへの回答および必要なご連絡のためにのみ利用します。それ以外の目的には利用しません。",
    },
    {
        id: 3,
        title: "3. 第三者への提供",
        body: "次の場合を除き、ご本人の同意なく個人情報を第三者に提供しません。",
        list: ["法令に基づく場合", "人の生命、身体または財産の保護のために必要な場合"],
    },
    {
        id: 4,
        title: "4. 安全管理",
        body: "取得した個人情報は、漏えい、滅失、毀損を防ぐため、適切に管理します。",
    },
    {
        id: 5,
        title: "5. 保存期間",
        body: "お問い合わせへの対応が完了した後、必要な期間を経て適切に削除します。",
    },
    {
        id: 6,
        title: "6. 開示・訂正・削除のご請求",
        body: "ご自身の個人情報の開示、訂正、削除をご希望の場合は、お問い合わせフォームまたは下記の連絡先までご連絡ください。ご本人確認のうえ、合理的な期間内に対応します。",
    },
    {
        id: 7,
        title: "7. プライバシーポリシーの変更",
        body: "必要に応じて本ポリシーの内容を変更することがあります。変更後の内容は、当サイトに掲載した時点から効力を生じます。",
    },
    ];

    return (
        <div className={styles['contact-layout']}>
            <div className={styles['contact-layout__overview']}>
                <h2 className={styles['contact-layout__header']}>お問い合わせ</h2>
                <div className={styles['contact-layout__columns']}>
                    <form className={styles['contact-form']}>
                        <h3 className={styles['contact-form__header']}>フォーム</h3>
                        <div className={styles['contact-form__meta']}>お問い合わせ内容をご入力ください</div>
                        <div className={styles['contact-form__rows']}>
                        {
                            formFields.map(formField => {
                                return (
                                    <label key={formField.id} className={styles['contact-form__row']}>
                                        <div key={formField.id} className={styles['contact-form__label']}>{formField.label}</div>
                                        {createElement(formField.tag, {
                                            key: formField.id,
                                            type: formField.type,
                                            placeholder: formField.placeholder,
                                            multiple: formField.multiple ? true : false,
                                            className: styles[formField.className]
                                        })}
                                    </label>
                                );
                            })
                        }
                        </div>
                        <button className={styles['contact-form__actions']} >送信する</button>
                    </form>
                </div>
            </div>
            <div className={styles['privacy-policy']}>
                <h3 className={styles['privacy-policy__header']}>プライバシーポリシー</h3>
                <div className={styles['privacy-policy__description']}>お問い合わせフォームを通じて取得する個人情報について、以下のとおり取り扱います。</div>
                <div className={styles['privacy-policy__content']}>
                    {
                        privacySections.map((privacySection) => {
                            return (
                                <div key={privacySection.id} className={styles['privacy-policy__section']}>
                                    <div className={styles['privacy-policy__title']}>{privacySection.title}</div>
                                    <div className={styles['privacy-policy__body']}>{privacySection.body}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}