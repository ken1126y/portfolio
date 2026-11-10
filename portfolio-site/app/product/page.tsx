import styles from "./product.module.css";

export default function ProductPage() {
  const products= [
    {
      title: "Example",
      URL: "https://example.com",
      thumbnail: "/images.png",
      description: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
      technologies: [
      { name: "HTML / CSS", level: 80 },
      { name: "JavaScript", level: 67 },
      { name: "React", level: 60 },
      { name: "Figma", level: 53 }
      ]
    },
    {
      title: "Example2",
      URL: "https://example2.com",
      thumbnail: "/images.png",
      description: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル2",
      technologies: [
      { name: "HTML / CSS", level: 80 },
      { name: "JavaScript", level: 67 },
      { name: "React", level: 60 },
      { name: "Figma", level: 53 }
      ]
    },
    {
      title: "Example2",
      URL: "https://example2.com",
      thumbnail: "/images.png",
      description: "サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル2",
      technologies: [
      { name: "HTML / CSS", level: 80 },
      { name: "JavaScript", level: 67 },
      { name: "React", level: 60 },
      { name: "Figma", level: 53 }
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
              <div className={styles['product-card']} key={product.title}>
                <div className={styles['product-card__header']}>
                  <div className={styles['product-card__title-group']}>
                    <div className={styles['product-card__title']}>{product.title}</div>
                    <div className={styles['product-card__note']}>サブタイトル</div>
                  </div>
                  <a href={product.URL} className={styles['product-card__link']}>{product.URL}<img src="/arrow-up-right.svg" alt="" /></a>
                </div>
                <div className={styles['product-card__thumbnail']}><img src={product.thumbnail}/></div>
                <div className={styles['product-card__body']}>
                  <div className={styles['product-card__description']}>{product.description}</div>
                  <div className={styles['product-card__tech-stack']}>
                    <div className={styles['product-card__tech-label']}>関連技術</div>
                      {product.technologies.map(technology => (
                        <div className={styles['product-card__tech-row']} key={technology.name}>
                          <div className={styles['product-card__tech-item']}>{technology.name}</div>
                          <div className={styles['product-card__tech-track']}>
                            <div className={styles['product-card__tech-bar']} style={{ width: `${technology.level}%` }}></div>
                          </div>
                          <div className={styles['product-card__tech-value']}>{technology.level}%</div>
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