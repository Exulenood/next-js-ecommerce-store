import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getTestItems } from './testdatabase';

export default async function TestPassPage() {
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
