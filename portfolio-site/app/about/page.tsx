import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  console.log(styles);
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
                <a href="" className={styles['profile-card__social-icon']}><img src="" alt="" /></a>
                <a href="" className={styles['profile-card__social-icon']}><img src="" alt="" /></a>
                <a href="" className={styles['profile-card__social-icon']}><img src="" alt="" /></a>
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
        <div className={styles['tech-stack__chart']}>
          <h3 className={styles['tech-stack__meta']}>技術スタック</h3>
          <ul className={styles['tech-stack__rows']}>
            <li className={styles['tech-stack__row']}>
              <div className={styles['tech-stack__label']}>HTML/CSS</div>
              <div className={styles['tech-stack_track']}>
                <div className={styles['tech-stack__bar']}></div>
              </div>
              <div className={styles['tech-stack__value']}>80%</div>
            </li>
            <li className={styles['tech-stack__row']}>
              <div className={styles['tech-stack__label']}>JavaScript</div>
              <div className={styles['tech-stack_track']}>
                <div className={styles['tech-stack__bar']}></div>
              </div>
              <div className={styles['tech-stack__value']}>67%</div>
            </li>
            <li className={styles['tech-stack__row']}>
              <div className={styles['tech-stack__label']}>React</div>
              <div className={styles['tech-stack_track']}>
                <div className={styles['tech-stack__bar']}></div>
              </div>
              <div className={styles['tech-stack__value']}>60%</div>
            </li>
            <li className={styles['tech-stack__row']}>
              <div className={styles['tech-stack__label']}>Figma</div>
              <div className={styles['tech-stack_track']}>
                <div className={styles['tech-stack__bar']}></div>
              </div>
              <div className={styles['tech-stack__value']}>53%</div>
            </li>
            <li className={styles['tech-stack__row']}>
              <div className={styles['tech-stack__label']}>WordPress</div>
              <div className={styles['tech-stack_track']}>
                <div className={styles['tech-stack__bar']}></div>
              </div>
              <div className={styles['tech-stack__value']}>47%</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}