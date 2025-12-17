// products.controller.ts
import { Request, Response, NextFunction } from 'express';
import {
  getPublishedProducts,
  getPublishedProductBySlug,
} from './products.service';

export function getPublished(req: Request, res: Response, next: NextFunction) {
  try {
    const products = getPublishedProducts();
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
    const product = getPublishedProductBySlug(slug);
    res.json(product);
  } catch (err) {
    next(err);
  }
}
