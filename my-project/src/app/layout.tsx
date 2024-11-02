import "@/app/ui/styles/global.css";
import { inter } from '@/app/ui/fonts';
import { Navigation } from '@/app/ui/components/navigation/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
