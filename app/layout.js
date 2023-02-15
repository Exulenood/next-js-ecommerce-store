import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <Link href="/">Home - </Link>
            <Link href="/">{`GO TO TEST-CART (${'0'} Items)`}</Link>
            <Link href="/testpass"> - Testing Site</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
//
