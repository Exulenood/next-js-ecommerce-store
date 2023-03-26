'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { removeCookie, setCookie } from '../cookiesFunctions';

export default function PurgeCart(props) {
  const router = useRouter();
  const acknolegedPurge = props.acknolegedPurge;
  useEffect(() => {
    removeCookie('purgeCart');
    router.refresh();
  }, [acknolegedPurge, router]);

  function purgeCart() {
    setCookie('purgeCart', {
      purgeAll: new Date().valueOf(),
    });
    router.refresh();
  }

  return (
    <div>
      <button onClick={() => purgeCart()}>Launch Order</button>
    </div>
  );
}
