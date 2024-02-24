"use client";
import CHARACTERS from "../../utilities/constants.utilities";
import styles from "../../styles/details.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Details = ({ character }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className={styles.main_container}>
      <button className={styles.back_btn} onClick={() => goBack()}>
        {"<"} Back
      </button>
      <div className={styles.detail_wrapper}>
        <Image
          src={character.imgUrl}
          width={300}
          height={300}
          alt="character details"
          className={`${styles.character_img} char_img`}
        />
        <div>
          <div className={styles.character_name}>{character.name}</div>
          <div className={styles.description}>{character.description}</div>
        </div>
      </div>
    </div>
  );
};

export function getStaticProps({ params }) {
  const character = CHARACTERS.find(
    (character) => character.path === params.character
  );

  return { props: { character } };
}

export function getStaticPaths() {
  const paths = CHARACTERS.map((character) => ({
    params: { character: character.path },
  }));
  return { paths, fallback: false };
}

export default Details;
