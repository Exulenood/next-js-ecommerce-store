import './global.scss';
import Link from 'next/link';
import { getSumCartAmount } from './databaseInterface';

export default async function RootLayout({ children }) {
  const sumCartAmount = await getSumCartAmount();

  function sumAmount() {
    if (sumCartAmount.totalAmount === null) {
      return 'currently empty';
    } else {
      return `(${sumCartAmount.totalAmount} Items)`;
    }
  }

  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <Link href="/">Home - </Link>
            <Link href="/cart">{`GO TO CART (${sumAmount()})`}</Link>
            <Link href="/testpass"> - Testing Site</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
//
