// products/controller.ts
import { Request, Response, NextFunction } from 'express';
import * as service from './service';
import { Product } from './types';

export async function getPublished(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const searchQuery = req.query.query as string | undefined;
    let products;

    if (searchQuery && searchQuery.length > 0) {
      products = service.searchPublishedProducts(searchQuery);
    } else {
      products = service.getPublishedProducts();
    }

    res.json(products);
  } catch (err) {
    next(err);
  }
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    let products;

    products = service.getAllProducts();

    res.json(products);
  } catch (err) {
    next(err);
  }
}

export function getFeatured(req: Request, res: Response, next: NextFunction) {
  try {
    let products = service.getFeaturedProducts();

    res.json(products);
  } catch (err) {
    next(err);
  }
}

export function getPublishedBySlug(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const slug = req.params.slug;
    const product = service.getPublishedProductBySlug(slug);
    res.json(product);
  } catch (err) {
    next(err);
  }
}

export function getProductWithCategories(
  req: Request<{ slug: string }>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { slug } = req.params;
    if (!slug) {
      return res.status(400).json({ message: 'Missing slug' });
    }

    const productWithCategories = service.getProductCategoriesBySlug(slug);

    if (!productWithCategories) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.json(productWithCategories);
  } catch (err) {
    next(err);
  }
}

export function getCategory(req: Request, res: Response, next: NextFunction) {
  try {
    const productId = Number(req.params.id);
    if (Number.isNaN(productId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    const productWithCategories = service.getCategoriesByProduct(productId);

    return res.json(productWithCategories);
  } catch (err) {
    next(err);
  }
}

export function deleteProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const productId = Number(req.params.id);
    console.log('API recieved:', productId);
    if (Number.isNaN(productId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    const removeProduct = service.deleteProductById(productId);
    return res.json(removeProduct);
  } catch (err) {
    next(err);
  }
}

export function postProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const productData: Product = req.body;
    console.log('Controller recieved:', productData);
    const newProduct = service.postNewProduct(productData);

    res.status(201).json({
      message: 'Product added successfully!',
    });
  } catch (err) {
    next(err);
  }
}
