'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { removeCookie, setCookie } from '../cookiesFunctions';

export default function DeleteCartPosition(props) {
  const router = useRouter();
  const acknolegedDelete = props.acknolegedDelete;
  useEffect(() => {
    removeCookie('deleteItem');
    router.refresh();
  }, [acknolegedDelete, router]);

  function purgeCart() {
    setCookie('deleteItem', {
      id: props.currentId,
    });
    router.refresh();
  }

  return (
    <div>
      <button onClick={() => purgeCart()}>Delete Item</button>
    </div>
  );
}
