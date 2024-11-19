import styles from "@/app/ui/styles/navigation.module.css";
import Image from 'next/image';
import NavLinks from "@/app/ui/components/navigation/nav-links"

export function Navigation() {
    return (
        <nav className={styles.navigation_main_box}>
            <div className={styles.navigation_icon_box}>
                <Image
                    src="/telegram.png"
                    width={28}
                    height={28}
                    className={styles.navigation_icon_telegram}
                    alt="Background"
                />
                <Image
                    src="/whatsapp.png"
                    width={30}
                    height={30}
                    className={styles.navigation_icon_whatsapp}
                    alt="Background"
                />
            </div>
            <div className={styles.navigation_links_box}>
            <NavLinks/>
            </div>
        </nav>
    )
}
