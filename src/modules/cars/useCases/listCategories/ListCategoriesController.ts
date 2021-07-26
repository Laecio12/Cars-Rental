import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
  constructor(private listCategoriesUse: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUse.execute();
    return response.json(all);
  }
}

export { ListCategoryController };
