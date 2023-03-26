import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getTestItems } from './testdatabase';

export default async function TestPassPage() {
  type TestTypescript = {
    testNumber: number;
    testString: string;
    testBoolean?: boolean;
  };
  /**
   * TestBoolean is optional - so also a returned undefined is ok
   * this is an Typescript hint btw - it shows when hovered over the variable
   */

  const testTSO1: TestTypescript = {
    testNumber: 9999,
    testString: 'mestringy',
    testBoolean: true,
  };

  const testTSO2: TestTypescript = {
    testNumber: 1111,
    testString: 'mestringytoo',
    testBoolean: false,
  };

  const testTSO3: TestTypescript = {
    testNumber: 5555,
    testString: 'mestringyaswell',
  };

  const testTSOArray: TestTypescript[] = [testTSO1, testTSO2, testTSO3];

  console.log(testTSO1);
  console.log(testTSOArray);

  const testItems = await getTestItems();

  return (
    <div>
      <Link href="/testpass/testCRUD">
        <h3>TestCRUD</h3>
      </Link>
      <h1>Test-Items:</h1>
      {testItems.map((testItem) => {
        return (
          <Fragment key={testItem.id}>
            <Link href={`/testpass/${testItem.id}`}>
              <h3>{testItem.name}</h3>
            </Link>
            <h4>{testItem.type}</h4>
            <div>{`${testItem.price} €`}</div>
            <Link href={`/testpass/${testItem.id}`}>
              <Image
                src={`/${testItem.imageFileName}`}
                alt={`Image of ${testItem.name}`}
                width="200"
                height="100"
              />
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}
