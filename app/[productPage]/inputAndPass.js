'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  getCookieClientSide,
  removeCookie,
  setCookie,
} from '../cookiesFunctions';

export default function InputAndPass(props) {
  const router = useRouter();
  const cartActualized = props.cartActualize;
  useEffect(() => {
    removeCookie('cartAdd');
    router.refresh();
  }, [cartActualized, router]);
  const [chosenQuantity, setChosenQuantity] = useState('');

  function addToCart() {
    const existCookie = getCookieClientSide('cartAdd');
    // console.log(props.productId);
    // console.log(chosenQuantity);
    // console.log(existCookie);

    if (!existCookie) {
      setCookie('cartAdd', {
        id: props.currentId,
        quantity: chosenQuantity,
        timestamp: new Date().valueOf(),
      });
    } else {
      removeCookie('cartAdd');
      setCookie('cartAdd', {
        id: props.currentId,
        quantity: chosenQuantity,
        timestamp: new Date().valueOf(),
      });
    }
    router.refresh();
  }

  // LAST STOP: TEST COOKIE SET

  return (
    <div>
      <h4>Quantity: </h4>
      <input
        value={chosenQuantity}
        type="number"
        min="1"
        onChange={(event) => setChosenQuantity(event.target.value)}
      />
      <button onClick={() => addToCart()}> add to Cart </button>
    </div>
  );
}
