CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_code varchar (5) NOT NULL,
  product_name varchar (50) NOT NULL,
  thrust_atm varchar (20) NOT NULL,
  thrust_vac varchar (20) NOT NULL,
  sp_impulse_atm varchar (20) NOT NULL,
  sp_impulse_vac varchar (20) NOT NULL,
  mass varchar (20) NOT NULL,
  max_temp varchar (20) NOT NULL,
  prod_text varchar (800) NOT NULL,
  price varchar (20) NOT NULL,
  img_tn varchar (30) NOT NULL,
  img_ex1 varchar (30) NOT NULL,
  img_ex2 varchar (30) NOT NULL
);

INSERT INTO products
  (product_code, product_name, thrust_atm, thrust_vac, sp_impulse_atm, sp_impulse_vac, mass, max_temp, prod_text, price, img_tn, img_ex1, img_ex2)

VALUES
  ('1','RT-5 Flea Solid Fuel Booster','163 kN','192 kN','1372,9 m/s','1618,1 m/s','1,5 t (Start)','2000 K','While considered by some to be little more than "a trash bin full of boom", The RT-5 can be seen in use at many space programs, perhaps possibly because it is the only option for many space programs, but nevertheless, this small booster provides a nice kick to lift small payloads to considerable heights. Use with caution, though. Once lit, solid fuel motors cannot be put out until the fuel runs out.','200','Img_SB_1_tn.png','Img_SB_1_ex1.png','Img_SB_1_ex2.png'),
  ('2','BACC Thumper Solid Fuel Booster','250 kN','300 kN','1716,2 m/s','2059,4 m/s','7,65 t (Start)','2200 K','Filled with a new, even more volatile fuel, the BACC offers semi-reliable performance at a good price.','850','Img_SB_2_tn.png','Img_SB_2_ex1.png','Img_SB_2_ex2.png'),
  ('3','S2-33 Clydesdale Solid Fuel Booster','2950 kN','3300 kN','2057,3 m/s','2304,6 m/s','1440 t (Start)','2200 K','The Clydesdale is not surprising just for its size. It is also amazing just how much thrust comes out of this motor - nothing else in its size class comes close.','18500','Img_SB_3_tn.png','Img_SB_3_ex1.png','Img_SB_3_ex2.png'),
  ('4','LV-909 Terrier Liquid Fuel Engine','14,78 kN','60 kN','833,6 m/s','3383,3 m/s','0,5 t','2000K','The 909 model was initially received with some skepticism by spacecraft engineers, as it defied the long-standing convention that "More Power!" is always better. Despite this, the 909 series has found its place in the spacecraft construction world, being particularly useful as a final stage and landing engine.','390','Img_LE_4_tn.png','Img_LE_4_ex1.png','Img_LE_4_ex2.png'),
  ('5','S3 KS-25 Vector Liquid Fuel Engine','935,51kN','1000 kN','2893 m/s','3089,1 m/s','4 t','2000K','Kerbodynes flagship engine, the KS-25 excels as a first stage engine through its high thrust-to-weight ratio and exceptional sea level efficiency. Kerbodyne engineers achieved this by running the engine in a staged combustion cycle and at extremely high chamber pressures. Special new alloys had to be invented to suppress the engines tendency to become a bomb. The single version is designed with very durable components and high reusability, as well as higher gimbal range, but because of that is also heavier than its expendable counterpart used in first stage clusters.','18000','Img_LE_5_tn.png','Img_LE_5_ex1.png','Img_LE_5_ex2.png'),
  ('6','KR-2L+ Rhino Liquid Fuel Engine','1205,88 kN','2000 kN','2010,4 m/s','3334,3 m/s','9 t','2000 K','This engine is Kerbodynes first attempt at a highly advanced engine. The engineers couldn not get it to produce full efficiency at sea level without the engine exploding, so it was repurposed as an upper stage engine. The experience gained here with high efficiency has been repurposed for later models, which feature multiple combustion chambers at higher pressure (that do not go boom). This engine is optimized for lighting mid-flight, although it still provides respectable power at sea level.','25000','Img_LE_6_tn.png','Img_LE_6_ex1.png','Img_LE_6_ex2.png');



CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_code varchar (5) NOT NULL,
  product_name varchar (50) NOT NULL,
  thrust_atm varchar (20) NOT NULL,
  thrust_vac varchar (20) NOT NULL,
  sp_impulse_atm varchar (20) NOT NULL,
  sp_impulse_vac varchar (20) NOT NULL,
  mass varchar (20) NOT NULL,
  max_temp varchar (20) NOT NULL,
  prod_text varchar (800) NOT NULL,
  price integer NOT NULL,
  img_tn varchar (30) NOT NULL,
  img_ex1 varchar (30) NOT NULL,
  img_ex2 varchar (30) NOT NULL
);

INSERT INTO products
  (product_code, product_name, thrust_atm, thrust_vac, sp_impulse_atm, sp_impulse_vac, mass, max_temp, prod_text, price, img_tn, img_ex1, img_ex2)

VALUES
  ('1','RT-5 Flea Solid Fuel Booster','163 kN','192 kN','1372,9 m/s','1618,1 m/s','1,5 t (Start)','2000 K','While considered by some to be little more than "a trash bin full of boom", The RT-5 can be seen in use at many space programs, perhaps possibly because it is the only option for many space programs, but nevertheless, this small booster provides a nice kick to lift small payloads to considerable heights. Use with caution, though. Once lit, solid fuel motors cannot be put out until the fuel runs out.','200','Img_SB_1_tn.png','Img_SB_1_ex1.png','Img_SB_1_ex2.png'),
  ('2','BACC Thumper Solid Fuel Booster','250 kN','300 kN','1716,2 m/s','2059,4 m/s','7,65 t (Start)','2200 K','Filled with a new, even more volatile fuel, the BACC offers semi-reliable performance at a good price.','850','Img_SB_2_tn.png','Img_SB_2_ex1.png','Img_SB_2_ex2.png'),
  ('3','S2-33 Clydesdale Solid Fuel Booster','2950 kN','3300 kN','2057,3 m/s','2304,6 m/s','1440 t (Start)','2200 K','The Clydesdale is not surprising just for its size. It is also amazing just how much thrust comes out of this motor - nothing else in its size class comes close.','18500','Img_SB_3_tn.png','Img_SB_3_ex1.png','Img_SB_3_ex2.png'),
  ('4','LV-909 Terrier Liquid Fuel Engine','14,78 kN','60 kN','833,6 m/s','3383,3 m/s','0,5 t','2000K','The 909 model was initially received with some skepticism by spacecraft engineers, as it defied the long-standing convention that "More Power!" is always better. Despite this, the 909 series has found its place in the spacecraft construction world, being particularly useful as a final stage and landing engine.','390','Img_LE_4_tn.png','Img_LE_4_ex1.png','Img_LE_4_ex2.png'),
  ('5','S3 KS-25 Vector Liquid Fuel Engine','935,51kN','1000 kN','2893 m/s','3089,1 m/s','4 t','2000K','Kerbodynes flagship engine, the KS-25 excels as a first stage engine through its high thrust-to-weight ratio and exceptional sea level efficiency. Kerbodyne engineers achieved this by running the engine in a staged combustion cycle and at extremely high chamber pressures. Special new alloys had to be invented to suppress the engines tendency to become a bomb. The single version is designed with very durable components and high reusability, as well as higher gimbal range, but because of that is also heavier than its expendable counterpart used in first stage clusters.','18000','Img_LE_5_tn.png','Img_LE_5_ex1.png','Img_LE_5_ex2.png'),
  ('6','KR-2L+ Rhino Liquid Fuel Engine','1205,88 kN','2000 kN','2010,4 m/s','3334,3 m/s','9 t','2000 K','This engine is Kerbodynes first attempt at a highly advanced engine. The engineers couldn not get it to produce full efficiency at sea level without the engine exploding, so it was repurposed as an upper stage engine. The experience gained here with high efficiency has been repurposed for later models, which feature multiple combustion chambers at higher pressure (that do not go boom). This engine is optimized for lighting mid-flight, although it still provides respectable power at sea level.','25000','Img_LE_6_tn.png','Img_LE_6_ex1.png','Img_LE_6_ex2.png');
