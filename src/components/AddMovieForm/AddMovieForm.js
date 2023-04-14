import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  // Destructing props
  const { movies, setMovies } = props;

  // Membuat state title
  const [title, setTitle] = useState("");

  // Membuat state data
  const [date, setDate] = useState("");

  // Membuat state picture
  const [picture, setPicture] = useState("");

  // Membuat state genre
  const [genre, setGenre] = useState("");

  // Membuat state title, date, genre, dan picture error/empty
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPictureError, setIsPictureError] = useState(false);
  const [isGenreError, setIsGenreError] = useState(false);

  // Membuat fungsi handleTitle
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  // Membuat fungsi handleDate
  function handleDate(e) {
    setDate(e.target.value);
  }

  // Membuat fungsi handlePicture
  function handlePicture(e) {
    setPicture(e.target.value);
  }

  // Membuat fungsi handleGenre
  function handleGenre(e) {
    setGenre(e.target.value);
  }

  function handleSubmit(e) {
    // Mencegah prilaku default: refresh page
    e.preventDefault();

    // Jika title kosong, maka set error title true
    if (title === "") {
      setIsTitleError(true);
    }
    // Jika date kosong, maka set error date true
    else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
    }
    // Jika picture kosong, maka set error picture true
    else if (picture === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsPictureError(true);
    }
    // Jika genre kosong, maka set error picture true
    else if (genre === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsPictureError(false);
      setIsGenreError(true);
    }
    // Jika tidak kosong, tambah data
    else {
      // Siapkan movie yang ingin diinput
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: "Movie",
        poster: picture,
        genre: genre,
      };

      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsPictureError(false);
      setIsGenreError(false);

      console.log(movie);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.movieform}>
        <div className={styles.movieform__imagesection}>
          <img
            className={styles.movieform__image}
            src="https://picsum.photos/270/270"
            alt=""
          />
        </div>
        <div className={styles.movieform__formsection}>
          <h2 className={styles.movieform__title}>Add Movie</h2>
          <form
            className={styles.movieform__form}
            onSubmit={handleSubmit}
            action=""
          >
            <div className={styles.movieform__titlegroup}>
              <label className={styles.movieform__formlabel}>Movie</label>
              <br />
              <input
                className={styles.movieform__forminput}
                onChange={handleTitle}
                type="text"
                value={title}
              />
              <br />
              {/**
               * Jika error title true: maka muncul error
               * Jika tidak, munculkan string kosong
               */}
              {isTitleError && <Alert>Title can't be empty</Alert>}
            </div>
            <div className={styles.movieform__dategroup}>
              <label className={styles.movieform__formlabel}>Year</label>
              <br />
              <input
                className={styles.movieform__forminput}
                onChange={handleDate}
                type="number"
                value={date}
              />
              <br />
              {/**
               * Jika error date true: maka muncul error
               * Jika tidak, munculkan string kosong
               */}
              {isDateError && <Alert>Date can't be empty</Alert>}
            </div>
            <div className={styles.movieform__picturegroup}>
              <label className={styles.movieform__formlabel}>Poster</label>
              <br />
              <input
                className={styles.movieform__forminput}
                onChange={handlePicture}
                type="text"
                value={picture}
                placeholder="Link here"
              />
              <br />
              {/**
               * Jika error picture true: maka muncul error
               * Jika tidak, munculkan string kosong
               */}
              {isPictureError && <Alert>Picture can't be empty</Alert>}
            </div>
            <div className={styles.movieform__genregroup}>
              <label className={styles.movieform__formlabel}>Genre</label>
              <br />
              <select
                className={styles.movieform__genre}
                name="genre"
                id="genre"
                onChange={handleGenre}
                value={genre}
                placeholder="genre"
              >
                <option value="" disabled hidden>
                  Choose genre
                </option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="comedy">Comedy</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
              </select>
              {isGenreError && <Alert>Please choose genre</Alert>}
            </div>
            <button className={styles.movieform__button}>Add</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
