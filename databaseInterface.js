import { sql } from './connect';

export async function getAllProducts() {
  const allProducts = await sql`
  SELECT
    *
  FROM
    products
  `;
  return allProducts;
}

export async function getProductById(id) {
  const product = await sql`
  SELECT
    *
  FROM
    products
  WHERE
    id = ${id}
  `;
  return product[0];
}
