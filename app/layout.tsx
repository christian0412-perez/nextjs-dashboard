import '@/app/ui/global.css';
import { inter , lusitana,roboto, rubik ,rubik2} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <body className={`${rubik2.className} antialiased`}>{children}</body>

    </html>
  );
}
