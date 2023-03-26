import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getAllProducts } from './databaseInterface';

export default async function HomePage() {
  const allProducts = await getAllProducts();

  // console.log(allProducts[0]);

  return (
    <div>
      <h1>P & J's Boosters and Engines</h1>
      <div>
        <h2>Our Products:</h2>
        {allProducts.map((product) => {
          return (
            <Fragment key={product.id}>
              <Link href={`/${product.id}`}>
                <h3>{product.productName}</h3>
              </Link>
              <Link href={`/${product.id}`}>
                <Image
                  src={`/${product.imgTn}`}
                  alt={`Image of ${product.name}`}
                  width="80"
                  height="80"
                />
              </Link>
              <table>
                <tbody>
                  <tr>
                    <td>Thrust (at Sealevel):</td>
                    <td>{product.thrustAtm}</td>
                  </tr>
                  <tr>
                    <td>Thrust (Vacuum):</td>
                    <td>{product.thrustVac}</td>
                  </tr>
                </tbody>
              </table>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
