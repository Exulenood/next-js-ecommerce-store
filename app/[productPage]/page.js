import { cookies } from 'next/headers';
import Image from 'next/image';
import {
  addToCartDatabase,
  getProductById,
  searchExistingCartEntry,
} from '../databaseInterface';
import InputAndPass from './inputAndPass';

export default async function DedicatedProductPage(props) {
  const currentId = parseInt(props.params.productPage);
  // const singleProduct = await getProductById(props.params.productPage);
  const singleProduct = await getProductById(currentId);
  const addCartCookie = cookies().get('cartAdd');
  let cartActualize;
  // console.log(addCartCookie);
  // console.log(typeof addCartCookie);
  // console.log(singleProduct);

  if (addCartCookie) {
    const cartCookieParsed = JSON.parse(addCartCookie.value);
    const positionPrice = cartCookieParsed.quantity * singleProduct.price;
    const alreadyAdded = await searchExistingCartEntry(
      cartCookieParsed.timestamp,
    );
    if (alreadyAdded === false) {
      // console.log(cartCookieParsed.id);
      // console.log(cartCookieParsed.quantity);
      // console.log(typeof cartCookieParsed.quantity);
      // console.log(cartCookieParsed.timestamp);
      await addToCartDatabase(
        cartCookieParsed.id,
        cartCookieParsed.quantity,
        cartCookieParsed.timestamp,
        positionPrice,
      );
      cartActualize = new Date().valueOf();
    } else {
      console.log('cart entry already exists!');
    }
    // console.log(cartCookieParsed);
  }

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
      <InputAndPass currentId={currentId} cartActualize={cartActualize} />
    </div>
  );
}
