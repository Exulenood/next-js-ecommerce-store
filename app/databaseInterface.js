import { cache } from 'react';
import { sql } from '../connect';

// Product Database Functions

export const getAllProducts = cache(async () => {
  const allProducts = await sql`
  SELECT
    *
  FROM
    products
  `;
  return allProducts;
});

export const getProductById = cache(async (id) => {
  const product = await sql`
  SELECT
    *
  FROM
    products
  WHERE
  product_code = ${id}
  `;
  return product[0];
});

// Cart Database Functions

export async function getAllCartPositions() {
  const allPositions = await sql`
  SELECT * FROM cart
  `;
  return allPositions;
}

export const getCartPositionById = cache(async (productId) => {
  const cartPosition = await sql`
  SELECT
    *
  FROM
    cart
  WHERE
  product_id = ${productId}
  `;
  return cartPosition[0];
});

export const searchExistingCartEntry = cache(async (timestamp) => {
  const cartAdd = await sql`
  SELECT
    *
  FROM
    cart
  WHERE
  timestamp = ${timestamp}
  `;
  if (cartAdd[0] === undefined) {
    return false;
  }
});

export async function addToCartDatabase(
  productId,
  cartAmount,
  timestamp,
  positionPrice,
) {
  const existingId = await sql`
  SELECT
    *
  FROM
    cart
  WHERE
  product_id = ${productId}
  `;
  if (existingId[0] === undefined) {
    await sql`
    INSERT INTO cart
      (product_id, cart_amount, position_price, timestamp)
    VALUES
      (${productId}, ${cartAmount}, ${positionPrice}, ${timestamp})
      `;
    console.log(`${cartAmount} pcs of Item ${productId} added to cart!`);
  } else {
    const existingPosition = await getCartPositionById(productId);
    const newTotalprice = positionPrice + existingPosition.positionPrice;
    const newAmount =
      parseInt(cartAmount) + parseInt(existingPosition.cartAmount);
    await sql`
    UPDATE
      cart
    SET
       cart_amount = ${newAmount},
       position_price =${newTotalprice},
       timestamp = ${timestamp}
    WHERE
        product_id = ${productId}
    RETURNING *
    `;
    console.log(
      `${cartAmount}pcs added to Position of Item ${productId} (now total of ${newAmount})! `,
    );
  }
}

export async function clearCart() {
  await sql`
      DELETE FROM cart
  `;
  await sql`
      ALTER SEQUENCE cart_id_seq RESTART
  `;
  await sql`
      UPDATE cart SET id = DEFAULT
  `;
}

export async function deleteCartItem(productId) {
  await sql`
  DELETE FROM cart
  WHERE
  product_id = ${productId}
  `;
}

export async function getSumCartAmount() {
  const sumCartAmount = await sql`
  SELECT SUM(cart_amount) AS total_amount
  FROM cart
    `;
  return sumCartAmount[0];
}

export async function getCartTotalPrice() {
  const totalPrice = await sql`
  SELECT SUM(position_price) AS total_price
  FROM cart
    `;
  return totalPrice[0];
}

// // checkout merge

// export async function addToCheckoutMerge(
//   productId,
//   productName,
//   imageName,
//   cartAmount,
//   price,
//   timestamp,
// ) {
//   const existingId = await sql`
//   SELECT
//     *
//   FROM
//     checkout_merge
//   WHERE
//   product_id = ${productId}
//   `;
//   if (existingId[0] === undefined) {
//     await sql`
//     INSERT INTO checkout_merge
//       (product_id, product_name, image_name, cart_amount, price, timestamp)
//     VALUES
//       (${productId},${productName},${imageName}, ${cartAmount}, ${price},${timestamp})
//       `;
//     console.log(`added to Checkout merge: ${productId},${productName},${imageName}, ${cartAmount}, ${price},${timestamp}`);
//   } else {
//     const existingPosition = await getCartPositionById(productId);
//     const newAmount =
//       parseInt(cartAmount) + parseInt(existingPosition.cartAmount);
//     await sql`
//     UPDATE
//       cart
//     SET
//        cart_amount = ${newAmount},
//        timestamp = ${timestamp}
//     WHERE
//         product_id = ${productId}
//     RETURNING *
//     `;
//     console.log(
//       `${cartAmount}pcs added to Merge position of Item ${productId} (now total of ${newAmount})! `,
//     );
//   }
// }
