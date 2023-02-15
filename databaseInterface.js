import { sql } from './connect';

export async function getAllProducts() {
  const allProducts = await sql`
  SELECT * FROM products
  `;
  return allProducts;
}
