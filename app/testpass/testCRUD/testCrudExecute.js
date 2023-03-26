'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getTestCookie, removeTestCookie, setTestCookie } from '../testCookies';

export default function TestCrudExe() {
  // type TestQuanReturnvalue =

  useEffect(() => {
    removeTestCookie('cookiePass');
  }, []);
  const [testID, setTestID] = useState('');
  const [testQuan, setTestQuan] = useState('');
  const router = useRouter();

  function passToServer() {
    const existingTestCookie = getTestCookie('cookiePass');
    console.log(testID);
    console.log(testQuan);
    if (!existingTestCookie) {
      setTestCookie('cookiePass', {
        testID: testID,
        testQuan: testQuan,
        timestamp: new Date().valueOf(),
      });
    } else {
      removeTestCookie('cookiePass');
      setTestCookie('cookiePass', {
        testID: testID,
        testQuan: testQuan,
        timestamp: new Date().valueOf(),
      });
    }
    console.log(existingTestCookie);
    console.log(typeof existingTestCookie);
    router.refresh();
  }

  return (
    <div>
      <h4>Input Product ID</h4>
      <input
        value={testID}
        type="number"
        min="1"
        onChange={(event) => setTestID(event.target.value)}
      />
      <h4>Input Quantity</h4>
      <input
        value={testQuan}
        type="number"
        min="1"
        onChange={(event) => setTestQuan(event.target.value)}
      />
      <br />
      <br />
      <button onClick={() => passToServer()}>pass to SC</button>
    </div>
  );
}
