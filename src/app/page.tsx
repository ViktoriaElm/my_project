import styles from "@/app/ui/styles/home.module.css";
import { lusitana } from '@/app/ui/fonts';
import CourseComponent from "@/app/details/fetch-courses";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <MainBlock />
        <SecondBlock />
      </main>
    </>
  );
}

function MainBlock() {
  return (
    <div className={styles.start_page_box}>
      <div className={styles.main_title_box}>
        <div className={styles.title_box}>
          <span className={styles.first_word_title}>chord</span>
          <span className={styles.second_word_title}>surfer</span>
        </div>
        <p className={`${lusitana.className} ${styles.subtitle}`}>beautiful life</p>
      </div>
    </div>
  )
}

function SecondBlock() {
  return (
    // <div className={styles.start_page_courses_box}>
      <CourseComponent />
    // </div>
  )
}
