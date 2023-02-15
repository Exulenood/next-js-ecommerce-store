CREATE TABLE test_items (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar (30) NOT NULL,
  type varchar (30) NOT NULL,
  price varchar (20) NOT NULL,
  image_file_Name varchar (30) NOT NULL
);

INSERT INTO test_items
  (name, type, price, image_file_Name)
VALUES
  ('Testitem 1','Testtype 1',111,'TI1img.png'),
  ('Testitem 2','Testtype 2',222,'TI2img.png'),
  ('Testitem 3','Testtype 3',333,'TI3img.png'),
  ('Testitem 4','Testtype 4',444,'TI4img.png');

SELECT * FROM test_items;
