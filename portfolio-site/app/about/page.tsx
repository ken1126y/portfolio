import Image from "next/image";
import styles from "./about.module.css";
import { Info, Bell, ShieldCheck, Link as LinkIcon, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const skillStacks = [
    {
      name: 'Languages',
      skills: ['HTML', 'CSS', 'JS', 'PHP'],
      levels: [82, 78, 65, 40]
    },
    {
      name: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Laravel'],
      levels: [55, 45, 35]
    },
    {
      name: 'Development Tools',
      skills: ['Git', 'VSCode'],
      levels: [45, 80]
    },
    {
      name: 'Development Environment',
      skills: ['WSL2', 'Docker', 'Linux'],
      levels: [50, 35, 35]
    }
  ];
  
  return (
    <div className={styles['profile-layout']}>
      <div className={styles['profile-layout__overview']}>
        <h2 className={styles['profile-layout-header']}>プロフィール</h2>
        <div className={styles['profile-layout__columns']}>
          <div className={styles['sidebar']}>
            <div className={styles['profile-card']}>
              <div className={styles['profile-card__avatar']}>
                <img src="/S__81567755.jpg" className={styles['profile-card__avatar-image']} alt="プロフィール画像" />
              </div>
              <p className={styles['profile-card__bio']}>
                2004年生まれ、福井県出身。上京後の勤務先倒産、その後の闘病を経て、従来通りの働き方が難しくなりました。現在は身寄りもない東京で、体調と向き合いながら生活のために、個人でWebに関わる活動を行っています。
              </p>
              <div className={styles['profile-card__social-links']}>
                <a href="" className={styles['profile-card__social-icon']}><img src='instagram.png' /></a>
                <a href="" className={styles['profile-card__social-icon']}><img src='note.png' /></a>
                <a href="" className={styles['profile-card__social-icon']}><img src='github.png' /></a>
              </div>
            </div>
          </div>
          <div className={styles['profile-history']}>
            <h3 className={styles['profile-history__title']}>これまでの経歴</h3>
            <div className={styles['profile-history__body']}>
              <p>
                新卒でIT企業に就職するために上京しました。
                専門学校ではWeb開発を中心に学び、卒業後はインターンでお世話になっていた企業への入社が決まりました。
                学生時代に学んできた知識を実際の仕事で活かせることに期待していました。
              </p>
              <br/>
              <p>
                入社後はコードの修正や書類作成などを担当し、実務を通して少しずつ仕事を覚えていきました。
                しかし、入社からわずか数ヶ月で勤務先が倒産。予期せぬ形でキャリアが中断することとなりました。
              </p>
              <br/>
              <p>
                次の道を探すべく再就職に向けて活動を進めていた矢先、今度は国家指定難病である潰瘍性大腸炎を発症し、半年以上の長期入院を余儀なくされました。
                入院中はアルバイトや就職活動も続けられず、退院後の生活についても考え直す必要がありました。
              </p>
              <br/>
              <p>
                治療を経て退院したものの、現在も治療を続けており、体調面への影響から以前のように週5日・決まった時間で通勤して働くような「従来通りの働き方」を維持することが難しくなりました。
                東京という土地で、収入源を絶たれた上に身寄りもない状態に直面し、これからの生存や生活の立て直しについて深く向き合わざるを得なくなりました。
              </p>
              <br/>
              <p>
                そうした状況の中で、自分の体調やペースに合わせて収入を得る方法を探すようになり、Webに関わるフリーランスとしての活動を始めました。
                これまで学んできたWeb開発の知識を活かしながら、個人でできる仕事や活動の幅を広げようと取り組んでいます。
              </p>
              <br/>
              <p>
                限られた体力や時間の中で、何ができるか、どうすれば他者に価値を提供できるかを模索しながら、現在も日々の学習や個人開発に取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['tech-stack']}>
        <h2 className={styles['tech-stack__header']}>スキルスタック</h2>
          {skillStacks.map((skillStack) => {
            return (
              <div className={styles['tech-stack__chart']} key={skillStack.name}>
                <h3 className={styles['tech-stack__meta']}>{skillStack.name}</h3>
                <ul className={styles['tech-stack__rows']}>
                  {skillStack.skills.map((skill, index) => (
                    <li className={styles['tech-stack__row']} key={skill}>
                      <div className={styles['tech-stack__label']}>{skill}</div>
                      <div className={styles['tech-stack_track']}>
                        <div className={styles['tech-stack__bar']}style={{ width: `${skillStack.levels[index]}%` }}></div>
                      </div>
                      <div className={styles['tech-stack__value']}>{skillStack.levels[index]}%</div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}