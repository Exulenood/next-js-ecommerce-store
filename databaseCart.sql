CREATE TABLE test_cart (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1000 INCREMENT BY 1000),
  product_id varchar (2) NOT NULL,
  cart_amount varchar (3) NOT NULL,
  timestamp varchar (30) NOT NULL
);


CREATE TABLE cart (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1000 INCREMENT BY 1000),
  product_id varchar (2) NOT NULL,
  cart_amount varchar (3) NOT NULL,
  timestamp varchar (30) NOT NULL
);

CREATE TABLE cart (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1000 INCREMENT BY 1000),
  product_id varchar (2) NOT NULL,
  cart_amount integer NOT NULL,
  timestamp varchar (30) NOT NULL
);

CREATE TABLE cart (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1000 INCREMENT BY 1000),
  product_id varchar (2) NOT NULL,
  cart_amount integer NOT NULL,
  position_price integer NOT NULL,
  timestamp varchar (30) NOT NULL
);

INSERT INTO test_cart
  (product_id, cart_amount, timestamp)
VALUES
  (7,10),
  (8,20);


SELECT * FROM test_cart;
