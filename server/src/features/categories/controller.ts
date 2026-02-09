// categories.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as service from './service';

export function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = service.getCategories();
    res.json(categories);
  } catch (err) {
    next(err);
  }
}

export function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id: number = Number(req.params.id);
    if (Number.isNaN(id)) throw new Error('Invalid id');

    const category = service.getCategoryById(id);
    res.json(category);
  } catch (err) {
    next(err);
  }
}

export function deleteCategory(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const categoryId = Number(req.params.id);

    if (Number.isNaN(categoryId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    const removeProduct = service.deleteCategoryById(categoryId);
    return res.json(removeProduct);
  } catch (err) {
    next(err);
  }
}

export function getProducts(req: Request, res: Response, next: NextFunction) {
  try {
    const id: number = Number(req.params.id);
    if (Number.isNaN(id)) throw new Error('Invalid id');

    const products = service.getProductsForCategory(id);
    res.json(products);
  } catch (err) {
    next(err);
  }
}
