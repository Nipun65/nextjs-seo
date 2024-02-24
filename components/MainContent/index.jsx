import Image from "next/image";
import CHARACTERS from "@/utilities/constants.utilities";
import Link from "next/link";
import styles from "@/styles/page.module.css";

const MainContent = () => {
  return (
    <>
      <h1 className={styles.main_tag}>
        Exploring the Characters of Dunder Mifflin
      </h1>
      <div className={styles.characters_wrapper}>
        {CHARACTERS.map((character, index) => {
          return (
            <Link
              className={styles.character_img}
              href={character.path}
              key={index}
            >
              <Image
                src={character.imgUrl}
                width={300}
                height={300}
                alt="character"
                className={`char_img`}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default MainContent;
