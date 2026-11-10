import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  console.log(styles);

  const skillStacks = [
    {
      name: 'Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
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
                <a href="" className={styles['profile-card__social-icon']}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg></a>
                <a href="" className={styles['profile-card__social-icon']}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Wantedly</title><path d="M18.453 14.555c-.171-.111-.658-.764-2.006-3.982a9.192 9.192 0 0 0-.237-.526l-.274-.664-2.362-5.702H8.85l2.362 5.702 2.362 5.706 2.181 5.267a.196.196 0 0 0 .362 0l2.373-5.682a.1.1 0 0 0-.037-.119zm-8.85 0c-.171-.111-.658-.764-2.006-3.982a8.971 8.971 0 0 0-.236-.525l-.276-.665-2.36-5.702H0l2.362 5.702 2.362 5.706 2.181 5.267a.196.196 0 0 0 .362 0l2.374-5.682a.098.098 0 0 0-.038-.119ZM24 6.375a2.851 2.851 0 0 1-2.851 2.852 2.851 2.851 0 0 1-2.852-2.852 2.851 2.851 0 0 1 2.852-2.851A2.851 2.851 0 0 1 24 6.375Z"/></svg></a>
                <a href="" className={styles['profile-card__social-icon']}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Note</title><path d="M0 .279c4.623 0 10.953-.235 15.498-.117 6.099.156 8.39 2.813 8.468 9.374.077 3.71 0 14.335 0 14.335h-6.598c0-9.296.04-10.83 0-13.759-.078-2.578-.814-3.807-2.795-4.041-2.097-.235-7.975-.04-7.975-.04v17.84H0Z"/></svg></a>
              </div>
            </div>
          </div>
          <div className={styles['profile-history']}>
            <h3 className={styles['profile-history__title']}>これまでの経歴</h3>
            <p className={styles['profile-history__body']}>
              新卒での上京、勤務先の倒産、病気による長期入院と体調の変化を経て、現在はWebに関わる活動を行っています。<br/>
              特別な実績や誇れるようなスキルがあるわけではありませんが、自身の体調と向き合いながら、日々できることを一つずつ積み重ねています。このサイトは、これまでの過程で得た知識の整理や制作物、日々の思考を客観的に記録・蓄積していく場所として運営しています。<br/>
              <br/>
              新卒でIT企業に就職するために上京しました。エンジニアとしての第一歩を踏み出そうとしていた矢先、入社からわずか数ヶ月で勤務先が倒産。予期せぬ形でキャリアが中断することとなりました。<br/>
              <br/>
              次の道を探すべく再就職に向けて活動を進めていた矢先、今度は病気を患い、半年以上の長期入院を余儀なくされました。<br/>
              治療を経てようやく退院できたものの、病気の後遺症や体調面への影響から、以前のように週5日・決まった時間で通勤して働くような「従来通りの働き方」を維持することが難しくなりました。東京という土地で、収入源を絶たれた上に身寄りもない状態に直面し、これからの生存や生活の立て直しについて深く向き合わざるを得なくなりました。<br/>
              <br/>
              社会的な選択肢が限られる中で、自分の体調やペースを自己管理しながら収入を得る手段として、Webに関わるフリーランスとしての活動を開始しました。<br/>
              限られた体力や時間の中で、何ができるか、どうすれば他者に価値を提供できるかを模索しながら、現在も日々の仕事と学習に取り組んでいます。
            </p>
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