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
  slug
) VALUES
('SKU001', '2025-11-06', 'T-Shirt', 'CottonWear', 199,
 'Soft cotton t-shirt with relaxed fit.',
 'https://plus.unsplash.com/premium_photo-1690349404248-3ddd9be40eb1?...',
 'Soft White', '#F5F5F3', 'tshirt'),

('SKU002', '2025-11-06', 'Floral Coat', 'PreppyStyle', 949,
 'Long, lightweight coat with black floral print.',
 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?...',
 'Charcoal Black', '#2B2B2B', 'floral-coat'),

('SKU003', '2025-11-06', 'Leather Boots', 'RuggedWear', 1499,
 'Durable boots with lace-up design.',
 'https://plus.unsplash.com/premium_photo-1673367753702-362ea0bf5932?...',
 'Warm Brown', '#6F4E37', 'leather-boots'),

('SKU004', '2025-11-06', 'Plaid Scarf', 'CozyWraps', 249,
 'Warm scarf made from soft acrylic yarn.',
 'https://images.unsplash.com/photo-1738774106908-04ea849dec8e?...',
 'Muted Yellow', '#b4a863', 'plaid-scarf'),

('SKU005', '2025-11-06', 'Floral Summer Dress', 'SunBloom', 749,
 'Light and flowy dress with floral pattern.',
 'https://images.unsplash.com/photo-1759992878336-a5dd342ea245?...',
 'Cream White', '#eee8d7', 'floral-summer-dress'),

('SKU006', '2025-11-06', 'Leather Belt', 'Form&Fit', 299,
 'Genuine leather belt with silver buckle.',
 'https://images.unsplash.com/photo-1623393807193-e095f7944161?...',
 'Dark Cognac', '#5A3A28', 'leather-belt'),

('SKU007', '2025-11-06', 'Sneakers', 'WalkEase', 999,
 'Minimalist sneakers with rubber sole.',
 'https://images.unsplash.com/photo-1600411953419-53cc2faf0c81?...',
 'Off White', '#EFEFEA', 'sneakers'),

('SKU008', '2025-11-06', 'Black Beanie', 'ColdProof', 199,
 'Knitted beanie made from warm acrylic.',
 'https://images.unsplash.com/photo-1610737249253-1405407a33ad?...',
 'Soft Black', '#1E1E1E', 'black-beanie'),

('SKU009', '2025-11-06', 'Plaid Shirt', 'CasualVibe', 399,
 'Button-up shirt with classic plaid pattern.',
 'https://plus.unsplash.com/premium_photo-1723773910301-c91de3cdd855?...',
 'Dusty Blue', '#6E8CA0', 'plaid-shirt'),

('SKU010', '2025-11-06', 'Wristwatch', 'TimeKeeper', 2499,
 'Classic wristwatch with stainless steel band.',
 'https://images.unsplash.com/photo-1762331236910-6be44652a5f4?...',
 'Silver', '#C9CCD1', 'wristwatch'),

('SKU011', '2025-11-06', 'Plaid Jacket', 'FormalEdge', 1299,
 'Tailored plaid jacket with notched lapels.',
 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?...',
 'Dark Blue', '#284b64', 'plaid-jacket'),

('SKU012', '2025-11-06', 'Denim Jacket', 'UrbanEdge', 899,
 'Light-wash denim jacket with metal buttons.',
 'https://images.unsplash.com/photo-1626387133160-02364bcac6ed?...',
 'Washed Blue', '#7A9BBE', 'denim-jacket'),

('SKU013', '2025-11-06', 'Knit Sweater', 'WarmThreads', 699,
 'Crewneck sweater made from soft wool blend.',
 'https://images.unsplash.com/photo-1667586680656-6b8e381cddb5?...',
 'Soft Grey', '#B0B0B0', 'knit-sweater'),

('SKU014', '2025-11-06', 'Leather Jacket', 'MotoStyle', 1599,
 'Fitted leather jacket with zippered pockets.',
 'https://plus.unsplash.com/premium_photo-1698749344903-2639d1cc31a1?...',
 'Deep Black', '#141414', 'leather-jacket'),

('SKU015', '2025-11-06', 'Ankle Boots', 'ChicStep', 1299,
 'Stylish ankle boots with block heel.',
 'https://plus.unsplash.com/premium_photo-1671718110912-2bf5ce67d504?...',
 'Glossy Black', '#242424', 'ankle-boots'),

('SKU016', '2025-11-06', 'Hoodie', 'CozyLayer', 499,
 'Pullover hoodie with kangaroo pocket.',
 'https://images.unsplash.com/photo-1737139282698-b78009a06133?...',
 'Cream White', '#eee8d7', 'hoodie');


-- CATEGORIES DATA
INSERT INTO categories (title, img_url, slug) VALUES
('Tops', '/images/categories-tops.png', 'tops'),
('Sweaters', '/images/categories-sweaters.png', 'sweaters'),
('Bottoms', '/images/categories-bottoms.png', 'bottoms'),
('Dresses', '/images/categories-dresses.png', 'dresses'),
('Outerwear', '/images/categories-outerwear.png', 'outerwear'),
('Shoes', '/images/categories-shoes.png', 'shoes'),
('Accessories', '/images/categories-accessories.png', 'accessories');

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
  'New Collection',
  'Timeless Scandinavian design',
  'Carefully crafted pieces inspired by Nordic simplicity. Designed to last, made to be worn every day.',
  './images/hero1.webp',
  '/shop',
  1
);

-- SPOTS DATA
INSERT INTO spots (title, subtitle, img_url, link_url) VALUES
('Best Sellers', 'Shop our most popular items.', 'https://images.unsplash.com/photo-1738774107000-7847e9036795?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', '/'),
('Knitwear', 'Cozy and stylish knitwear for chilly days.', 'https://images.unsplash.com/photo-1760013529817-f50db943ffe2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', '/'),
('New Arrivals', 'Check out the latest arrivals.', 'https://images.unsplash.com/photo-1635866091268-87ca924abc9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=930', '/');


