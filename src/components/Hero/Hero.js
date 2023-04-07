import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__leftside}>
          <h2 className={styles.hero__title}>Spider-Man</h2>
          <h3 className={styles.hero__genre}>Genre: Romance, Drama</h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            cupiditate assumenda ullam molestiae. Natus fugiat tenetur, tempora
            beatae aut repellat odio minus fugit, possimus, rem quod delectus!
            Ad, reprehenderit vero!
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__rightside}>
          <img
            className={styles.hero__image}
            src="https://picsum.photos/600/300"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
