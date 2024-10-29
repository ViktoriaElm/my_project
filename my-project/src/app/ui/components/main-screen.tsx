import styles from "@/app/ui/styles/screen.module.css";

export default function MainScreen() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.start_page_box}>
          <div className={styles.title_box}>
            <span className={styles.first_word_title}>chord</span>
            <span className={styles.second_word_title}>surfer</span>
          </div>
        </div>
      </main>
    </>
  );
}
