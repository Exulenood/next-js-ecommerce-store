import { cookies } from 'next/headers';
import Image from 'next/image';
import { Fragment } from 'react';
import {
  clearCart,
  deleteCartItem,
  getAllCartPositions,
  getAllProducts,
  getCartTotalPrice,
  getSumCartAmount,
} from '../databaseInterface';
import DeleteCartPosition from './deleteCartPosition';
import PurgeCart from './purgeCart';

// async function getProductData(id) {
//   const getProductObject = await getProductById(id);
//   return getProductObject;
// }

export default async function CartPage() {
  const allProducts = await getAllProducts();
  const cartProducts = await getAllCartPositions();
  const sumCartAmount = await getSumCartAmount();
  const cartTotalPrice = await getCartTotalPrice();
  // console.log(allProducts[0].id);
  // console.log(typeof allProducts[0].id);
  // console.log(cartProducts);
  const purgeCart = cookies().get('purgeCart');
  const deleteItem = cookies().get('deleteItem');
  let acknolegedPurge;
  let acknolegedDelete;

  function getProductObj(id) {
    const productInformation = allProducts.find((product) => {
      return product.id === id;
    });
    return productInformation;
  }

  function pcOrPcs(amount) {
    if (parseInt(amount) === 1) {
      return 'pc';
    } else {
      return 'pcs';
    }
  }

  // const productInformation = allProducts.find((product) => {
  //   return product.id === 5;
  // });

  // console.log(cartTotalPrice);

  if (purgeCart) {
    await clearCart();
    acknolegedPurge = new Date().valueOf();
  }

  if (deleteItem) {
    const deleteItemParsed = JSON.parse(deleteItem.value);
    await deleteCartItem(deleteItemParsed.id);
    acknolegedDelete = new Date().valueOf();
  }

  return (
    <div>
      <h1>CART</h1>

      {cartProducts.map((cartproduct) => {
        return (
          <Fragment key={cartproduct.productId}>
            <h2>
              {getProductObj(parseInt(cartproduct.productId)).productName}
            </h2>
            <div>
              Price: {getProductObj(parseInt(cartproduct.productId)).price}{' '}
              Funds
            </div>
            <Image
              src={`/${getProductObj(parseInt(cartproduct.productId)).imgTn}`}
              alt={`Image of ${
                getProductObj(parseInt(cartproduct.productId)).productName
              }`}
              width="80"
              height="80"
            />
            <div>
              {`Amount: ${cartproduct.cartAmount}
              ${pcOrPcs(cartproduct.cartAmount)}.`}
            </div>
            <DeleteCartPosition
              acknolegedDelete={acknolegedDelete}
              currentId={cartproduct.productId}
            />
            <br /> <br />
          </Fragment>
        );
      })}
      <div>
        <br /> <br /> <br />
        Total Amount:{' '}
        {`${sumCartAmount.totalAmount} ${pcOrPcs(
          sumCartAmount.totalAmount,
        )}.`}{' '}
      </div>
      <div>{`Total Price: ${cartTotalPrice.totalPrice} funds`}</div>

      <PurgeCart acknolegedPurge={acknolegedPurge} />
    </div>
  );
}

//   id: '1000',
//   productId: '1',
//   cartAmount: '1',
//   timestamp: '1676628752008'

//   id: 1,
//   productCode: '1',
//   productName: 'RT-5 Flea Solid Fuel Booster',
//   thrustAtm: '163 kN',
//   thrustVac: '192 kN',
//   spImpulseAtm: '1372,9 m/s',
//   spImpulseVac: '1618,1 m/s',
//   mass: '1,5 t (Start)',
//   maxTemp: '2000 K',
//   prodText: 'While considered by some to be little more than "a trash bin full of boom", The RT-5 can be seen in use at many space programs, perhaps possibly because it is the only option for many space programs, but nevertheless, this small booster provides a nice kick to lift small payloads to considerable heights. Use with caution, though. Once lit, solid fuel motors cannot be put out until the fuel runs out.',
//   price: '200',
//   imgTn: 'Img_SB_1_tn.png',
//   imgEx1: 'Img_SB_1_ex1.png',
//   imgEx2: 'Img_SB_1_ex2.png'
