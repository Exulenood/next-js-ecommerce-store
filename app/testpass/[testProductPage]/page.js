import Image from 'next/image';
import { getTestItem } from '../testdatabase';
import TestCartPass from './testCartPass.js';

export default async function TestItemPage(props) {
  const singleProduc = await getTestItem(props.params.testProductPage);
  console.log(singleProduc);

  return (
    <div>
      <h1>Test Item Page / Item {singleProduc.id}</h1>
      <h2>{singleProduc.name}</h2>
      <div>{`${singleProduc.price} €`}</div>
      <Image
        src={`/${singleProduc.imageFileName}`}
        alt={`Image of ${singleProduc.name}`}
        width="200"
        height="100"
      />
      <br />
      <TestCartPass />
    </div>
  );
}
