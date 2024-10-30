import styles from "@/app/ui/styles/screen.module.css";
import { lusitana } from '@/app/ui/fonts';

export default function MainScreen() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.start_page_box}>
          <div className={styles.main_title_box}>
            <div className={styles.title_box}>
              <span className={styles.first_word_title}>chord</span>
              <span className={styles.second_word_title}>surfer</span>
            </div>
            <p className={`${lusitana.className} ${styles.subtitle}`}>beautiful life</p>
          </div>
        </div>
      </main>
    </>
  );
}
