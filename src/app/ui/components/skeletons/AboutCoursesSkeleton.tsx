import styles from "@/app/ui/styles/courses-skeleton.module.css";
import Image from "next/image";

export default function AboutCoursesSkeleton() {
    const length = 5;
    const sceletonCards = Array.from(
        { length }, (_, index) => <SceletonCard key={index} />
    )
    return (
        <div
            className={styles.skeleton_box}>
            {sceletonCards}
        </div>
    );
}

function SceletonCard() {
    return (

        <div
            className={styles.card_skeleton}>
            <Image
                src="/img-loading.jpg"
                width={200}
                height={150}
                className={styles.card_sceleton_image}
                alt="image" />

            <Image
                src="/line-loading.png"
                width={110}
                height={20}
                className={styles.card_sceleton_title}
                alt="title" />

            <Image
                src="/line-loading.png"
                width={130}
                height={15}
                className={styles.card_sceleton_text}
                alt="title" />
            <Image
                src="/line-loading.png"
                width={100}
                height={15}
                className={styles.card_sceleton_text}
                alt="title" />
        </div>
    )
}
