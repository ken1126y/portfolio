
import styles from "./product.module.css";
import { Info, Bell, ShieldCheck, Link as LinkIcon, ArrowRight } from 'lucide-react';

export default function ProductPage() {


  const products= [
    {
      id: 1,
      title: "Example",
      url: "https://example.com",
      thumbnail: "/images.png",
      description: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
      technologies: [
      { name: "HTML", usagePercentage: 80 },
      { name: "JS", usagePercentage: 67 },
      { name: "React", usagePercentage: 60 },
      { name: "Figma", usagePercentage: 53 }
      ]
    },
    {
      id: 2,
      title: "Example2",
      url: "https://example2.com",
      thumbnail: "./youtube_img.png",
      description: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル2",
      technologies: [
      { name: "HTML", usagePercentage: 80 },
      { name: "JS", usagePercentage: 67 },
      { name: "React", usagePercentage: 60 },
      { name: "Figma", usagePercentage: 53 }
      ]
    },
    {
      id: 3,
      title: "Example2",
      url: "https://example2.com",
      thumbnail: "/images.png",
      description: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル2",
      technologies: [
      { name: "HTML", usagePercentage: 80 },
      { name: "JS", usagePercentage: 67 },
      { name: "React", usagePercentage: 60 },
      { name: "Figma", usagePercentage: 53 }
      ]
    }
  ]

  return (
    <div className={styles['product-layout']}>
      <div className={styles['product-layout__overview']}>
        <div className={styles['product-layout__header']}>サイト一覧</div>
        <div className={styles['product-layout__intro']}>Web制作や個人開発を通じて制作した作品を紹介しています。また、各プロジェクトで使用した技術については、ソースコード量を基準に使用割合を算出しています。</div>
        <div className={styles['product-layout__works']}>
          {products.map(product => 
            (
              <div className={styles['product-card']} key={product.id}>
                <div className={styles['product-card__header']}>
                  <div className={styles['product-card__title-group']}>
                    <div className={styles['product-card__title']}>{product.title}</div>
                    <div className={styles['product-card__note']}>サブタイトル</div>
                  </div>
                  <div className={styles['product-card__link-group']}>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['product-card__link']}
                    >
                      {product.url}
                      <img src="/arrow-up-right.svg" alt="" />
                    </a>

                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['product-card__link-arrow']}
                    >
                      <img src="/arrow-up-right.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className={styles['product-card__thumbnail']}><img src={product.thumbnail} alt={`${product.title}のサムネイル`} /></div>
                <div className={styles['product-card__body']}>
                  <div className={styles['product-card__description']}>{product.description}</div>
                  <div className={styles['product-card__tech-stack']}>
                    <div className={styles['product-card__tech-label']}>関連技術</div>
                      {product.technologies.map(technology => (
                        <div className={styles['product-card__tech-row']} key={technology.name}>
                          <div className={styles['product-card__tech-item']}>{technology.name}</div>
                          <div className={styles['product-card__tech-usage']}>
                            <div className={styles['product-card__tech-track']}>
                              <div className={styles['product-card__tech-bar']} style={{ width: `${technology.usagePercentage}%` }}></div>
                            </div>
                            <div className={styles['product-card__tech-value']}>{technology.usagePercentage}%</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}