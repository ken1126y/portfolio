import styles from "./contact.module.css";
import { createElement } from 'react';
import { Info, Bell, ShieldCheck, Link as LinkIcon} from 'lucide-react';

export default function ContactPage() {

    const othersLists = [
        {
            id: 1,
            icon: <Info size={36} />,
            title: 'このサイトについて',
            description: 'サイトの目的や、掲載しているコンテンツについて紹介します。'
        },

        {
            id: 2,
            icon: <Bell size={36} />,
            title: 'お知らせ',
            description: 'サイトの更新情報をお知らせします。'
        },

        {
            id: 3,
            icon: <ShieldCheck size={36} />,
            title: 'プライバシーポリシー',
            description: '個人情報の取り扱いについて掲載しています。'
        },
        {
            id: 4,
            icon: <LinkIcon size={36} />,
            title: 'リンク',
            description: 'SNSや関連サイトへのリンクをまとめています。'
        },
    ]

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
        </div>
    )
}