import { sql } from './testconnect';

export async function getTestItems() {
  const testItems = await sql`
  SELECT * FROM test_items
  `;
  return testItems;
}

export async function getTestItem(id) {
  const testItem = await sql`
  SELECT
    *
  FROM
    test_items
  WHERE
    id = ${id}
  `;
  return testItem[0];
}

export async function getTestCart() {
  const testCart = await sql`
  SELECT * FROM test_cart
  `;
  return testCart;
}

export async function updateTestCart(productId, cartAmount, timestamp) {
  const testUpdateCart = await sql`
  UPDATE
    test_cart
  SET
    product_id = ${productId},
    cart_amount = ${cartAmount},
    timestamp = ${timestamp}
  WHERE
    id = ${productId}
  RETURNING *
  `;
  return testUpdateCart;
}

export async function insertTestCart(productId, cartAmount, timestamp) {
  const testInsertCart = await sql`
INSERT INTO test_cart
  (product_id, cart_amount, timestamp)
VALUES
  (${productId}, ${cartAmount}, ${timestamp})
  `;
  return testInsertCart;
}
