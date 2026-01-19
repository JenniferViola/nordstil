// products.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as service from './products.service';

export function getPublished(req: Request, res: Response, next: NextFunction) {
  try {
    const products = service.getPublishedProducts();
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
      return res.status(400).json({ message: 'Invalid product id' });
    }
    const productWithCategories = service.getCategoriesByProduct(productId);

    return res.json(productWithCategories);
  } catch (err) {
    next(err);
  }
}
