import Image from 'next/image';
import { getTestItem } from '../testdatabase';
import TestCartPass from './testCartPass.js';

export default async function TestItemPage(props) {
  const singleProduct = await getTestItem(props.params.testProductPage);
  console.log(singleProduct);

  return (
    <div>
      <h1>Test Item Page / Item {singleProduct.id}</h1>
      <h2>{singleProduct.name}</h2>
      <div>{`${singleProduct.price} €`}</div>
      <Image
        src={`/${singleProduct.imageFileName}`}
        alt={`Image of ${singleProduct.name}`}
        width="200"
        height="100"
      />
      <br />
      <TestCartPass />
    </div>
  );
}
