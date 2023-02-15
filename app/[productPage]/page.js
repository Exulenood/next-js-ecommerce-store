import Image from 'next/image';
import { getProductById } from '../../databaseInterface';

export default async function DedicatedProductPage(props) {
  const singleProduct = await getProductById(props.params.productPage);
  console.log(singleProduct);

  return (
    <div>
      <h2>{singleProduct.productName}</h2>
      <Image
        src={`/${singleProduct.imgTn}`}
        alt={`Image of ${singleProduct.productName}`}
        width="250"
        height="250"
      />
      <div>
        <p>{singleProduct.prodText}</p>
      </div>
      <div>{`Price (excl. VAT): ${singleProduct.price} Funds`}</div>
      <h4>Specifications:</h4>
      <table>
        <tbody>
          <tr>
            <td>Thrust (at Sealevel):</td>
            <td>{singleProduct.thrustAtm}</td>
          </tr>
          <tr>
            <td>Thrust (Vacuum):</td>
            <td>{singleProduct.thrustVac}</td>
          </tr>
          <tr>
            <td>Specific Impulse (at Sealevel):</td>
            <td>{singleProduct.spImpulseAtm}</td>
          </tr>
          <tr>
            <td>Specific Impulse (Vacuum):</td>
            <td>{singleProduct.spImpulseVac}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>Mass:</td>
            <td>{singleProduct.mass}</td>
          </tr>
          <tr>
            <td>Max. Temperature:</td>
            <td>{singleProduct.maxTemp}</td>
          </tr>
        </tbody>
      </table>
      <Image
        src={`/${singleProduct.imgEx1}`}
        alt={`Image of ${singleProduct.productName} in action`}
        width="600"
        height="400"
      />
      <Image
        src={`/${singleProduct.imgEx2}`}
        alt={`Image of ${singleProduct.productName} in action`}
        width="600"
        height="400"
      />

    </div>
  );
}
