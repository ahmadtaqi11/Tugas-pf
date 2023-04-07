import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  return (
    <div className={styles.container}>
      <section className={styles.movieform}>
        <div className={styles.movieform__imagesection}>
          <img
            className={styles.movieform__image}
            src="https://picsum.photos/300/300"
            alt=""
          />
        </div>
        <div className={styles.movieform__formsection}>
          <h2 className={styles.movieform__title}>Add Movie</h2>
          <form className={styles.movieform__form} action="">
            <label className={styles.movieform__formlabel}>Movie</label>
            <br />
            <input className={styles.movieform__forminput} type="text" />
            <br />
            <label className={styles.movieform__formlabel}>Year</label>
            <br />
            <input className={styles.movieform__forminput} type="text" />
            <br />
            <button className={styles.movieform__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
