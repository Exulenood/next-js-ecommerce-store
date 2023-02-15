import { cookies } from 'next/headers';
import { insertTestCart } from '../testdatabase';
import TestCrudExe from './testCrudExecute';

export default async function TestCRUD() {
  const testCookie = cookies().get('cookiePass');
  console.log(testCookie);
  console.log(typeof testCookie);

  let testCookieParsed = [];

  if (testCookie) {
    testCookieParsed = JSON.parse(testCookie.value);
    console.log(testCookieParsed);
    const productId = testCookieParsed.testID;
    const cartAmount = testCookieParsed.testQuan;
    const timestamp = testCookieParsed.timestamp;
    console.log(productId);
    console.log(cartAmount);
    console.log(timestamp);
    await insertTestCart(productId, cartAmount, timestamp);
    return <TestCrudExe />;
  }

  // const showTestCart = await getTestCart();
  // console.log(showTestCart);

  return (
    <div>
      <h1>Test-CART</h1>
      <h3>lll</h3>
      {/* <h3>{`Testoutput: ${passedTestCart[0]}, ${passedTestCart[1]}, ${passedTestCart[2]}`}</h3> */}
      <TestCrudExe />
    </div>
  );
}
