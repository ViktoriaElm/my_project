"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/ui/styles/nav-links.module.css'
import clsx from "clsx";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "courses",
    href: "/details/courses"
  },
]



export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            // className=`${styles.nav_links_link}`
            className={clsx(
              `${styles.nav_links_link}`,
              {
                'bg-sky-100 text-blue-600': pathname === link.href || pathname.startsWith(link.href),
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  );
}
