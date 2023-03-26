CREATE TABLE checkout_merge (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_id varchar (2) NOT NULL,
  product_name varchar (50) NOT NULL,
  image_name varchar (30) NOT NULL,
  cart_amount varchar (10) NOT NULL,
  price varchar (10) NOT NULL,
  timestamp varchar (30) NOT NULL
);
