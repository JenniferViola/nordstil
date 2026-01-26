-- DROP TABLES (in correct dependency order)

DROP TABLE IF EXISTS category_products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS hero;
DROP TABLE IF EXISTS spots;

-- CREATE TABLES

-- PRODUCTS
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sku TEXT NOT NULL UNIQUE,
  published_date TEXT,
  title TEXT NOT NULL,
  brand TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT NOT NULL,
  img_url TEXT NOT NULL,
  color_name TEXT,
  color_hex TEXT,
  featured BOOLEAN NOT NULL DEFAULT 0,
  slug TEXT NOT NULL UNIQUE
);

-- CATEGORIES
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  img_url TEXT,
  slug TEXT NOT NULL UNIQUE
);

-- CATEGORY_PRODUCTS JOIN TABLE (M:N)
CREATE TABLE category_products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  UNIQUE (category_id, product_id),
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- HERO
CREATE TABLE hero (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tagline TEXT NOT NULL,
  title TEXT NOT NULL,
  text TEXT NOT NULL,
  img_url TEXT NOT NULL,
  link_url TEXT NOT NULL,
  active BOOLEAN NOT NULL DEFAULT 0
);

-- SPOTS
CREATE TABLE spots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  img_url TEXT NOT NULL,
  link_url TEXT NOT NULL
);

-- INSERT DATA

INSERT INTO products (
  sku,
  published_date,
  title,
  brand,
  price,
  description,
  img_url,
  color_name,
  color_hex,
  featured,
  slug
) VALUES
('SKU001', '2025-11-06', 'T-Shirt', 'CottonWear', 199,
 'Soft cotton t-shirt with relaxed fit.',
 '../images/products/tshirt.webp',
 'Soft White', '#F5F5F3', 1, 'tshirt'),

('SKU002', '2025-11-06', 'Floral Coat', 'PreppyStyle', 949,
 'Long, lightweight coat with black floral print.',
 '../images/products/floral-coat.webp',
 'Charcoal Black', '#2B2B2B', 1, 'floral-coat'),

('SKU003', '2025-11-06', 'Leather Boots', 'RuggedWear', 1499,
 'Durable boots with lace-up design.',
 '../images/products/leather-boots.webp',
 'Warm Brown', '#6F4E37', 1, 'leather-boots'),

('SKU004', '2025-11-06', 'Plaid Scarf', 'CozyWraps', 249,
 'Warm scarf made from soft acrylic yarn.',
 '../images/products/plaid-scarf.webp',
 'Muted Yellow', '#b4a863', 1, 'plaid-scarf'),

('SKU005', '2025-11-06', 'Floral Dress', 'SunBloom', 749,
 'Light and flowy dress with floral pattern.',
 '../images/products/floral-dress.webp',
 'Cream White', '#eee8d7', 1, 'floral-dress'),

('SKU006', '2025-11-06', 'Leather Belt', 'Form&Fit', 299,
 'Genuine leather belt with silver buckle.',
 '../images/products/leather-belt.webp',
 'Dark Cognac', '#5A3A28', 1, 'leather-belt'),

('SKU007', '2025-11-06', 'Sneakers', 'WalkEase', 999,
 'Minimalist sneakers with rubber sole.',
 '../images/products/sneakers.webp',
 'Off White', '#EFEFEA', 0, 'sneakers'),

('SKU008', '2025-11-06', 'Beanie', 'ColdProof', 199,
 'Knitted beanie made from warm acrylic.',
 '../images/products/beanie.webp',
 'Soft Black', '#1E1E1E', 0, 'Beanie'),

('SKU009', '2025-11-06', 'Plaid Shirt', 'CasualVibe', 399,
 'Button-up shirt with classic plaid pattern.',
 '../images/products/plaid-shirt.webp',
 'Dusty Blue', '#6E8CA0', 0, 'plaid-shirt'),

('SKU010', '2025-11-06', 'Wristwatch', 'TimeKeeper', 2499,
 'Classic wristwatch with stainless steel band.',
 '../images/products/wristwatch.webp',
 'Silver', '#C9CCD1', 0, 'wristwatch'),

('SKU011', '2025-11-06', 'Plaid Jacket', 'FormalEdge', 1299,
 'Tailored plaid jacket with notched lapels.',
 '../images/products/plaid-jacket.webp',
 'Dark Blue', '#284b64', 0, 'plaid-jacket'),

('SKU012', '2025-11-06', 'Denim Jacket', 'UrbanEdge', 899,
 'Light-wash denim jacket with metal buttons.',
 '../images/products/denim-jacket.webp',
 'Washed Blue', '#7A9BBE', 0, 'denim-jacket'),

('SKU013', '2025-11-06', 'Knit Sweater', 'WarmThreads', 699,
 'Crewneck sweater made from soft wool blend.',
 '../images/products/knit-sweater.webp',
 'Soft Grey', '#B0B0B0', 1, 'knit-sweater'),

('SKU014', '2025-11-06', 'Leather Jacket', 'MotoStyle', 1599,
 'Fitted leather jacket with zippered pockets.',
 '../images/products/leather-jacket.webp',
 'Deep Black', '#141414', 0, 'leather-jacket'),

('SKU015', '2025-11-06', 'Ankle Boots', 'ChicStep', 1299,
 'Stylish ankle boots with block heel.',
 '../images/products/ankle-boots.webp',
 'Glossy Black', '#242424', 0, 'ankle-boots'),

('SKU016', '2025-11-06', 'Ribbed V-Neck Sweater', 'CozyLayer', 499,
 'Comfortable ribbed pullover with V-neckline.',
 '../images/products/ribbed-v-neck-sweater.webp',
 'Off-White', '#e9e1cb', 1, 'ribbed-v-neck-sweater');


-- CATEGORIES DATA
INSERT INTO categories (title, img_url, slug) VALUES
('Tops', '/../images/categories-tops.png', 'tops'),
('Sweaters', '/../images/categories-sweaters.png', 'sweaters'),
('Bottoms', '/../images/categories-bottoms.png', 'bottoms'),
('Dresses', '/../images/categories-dresses.png', 'dresses'),
('Outerwear', '/../images/categories-outerwear.png', 'outerwear'),
('Shoes', '/../images/categories-shoes.png', 'shoes'),
('Accessories', '/../images/categories-accessories.png', 'accessories');

-- CATEGORY_PRODUCTS DATA
INSERT INTO category_products (category_id, product_id) VALUES
(1, 1),
(1, 9),
(1, 16),
(2, 13),
(2, 16),
(4, 5),
(5, 2),
(5, 11),
(5, 12),
(5, 14),
(6, 3),
(6, 7),
(6, 15),
(7, 4),
(7, 6),
(7, 10);

-- HERO DATA
INSERT INTO hero (
  tagline,
  title,
  text,
  img_url,
  link_url,
  active
) VALUES (
  'New Collection · from 499 SEK',
  'Timeless Scandinavian design',
  'Carefully crafted pieces inspired by Nordic simplicity. Designed to last, made to be worn every day.',
  '../images/hero/hero1.webp',
  '/shop',
  1
);
-- ../images/
-- SPOTS DATA
INSERT INTO spots (title, subtitle, img_url, link_url) VALUES
('Best Sellers', 'Shop our most popular items.', '../images/spots/spot1.webp', '/'),
('Knitwear', 'Cozy knitwear for chilly days.', '../images/spots/spot2.webp', '/'),
('New Arrivals', 'Check out the latest arrivals.', '../images/spots/spot3.webp', '/');


