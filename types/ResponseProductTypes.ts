import { TBrand, TCategory } from "./ResponseCategory.types";
import { TImage, TResponseData } from "./global.types";

export interface TProduct extends TResponseData {
  name: string;

  category: TCategory;

  brand: TBrand;

  description: string;

  price: string;

  cover_image: TImage;

  images: TImage[];

  is_featured: boolean;

  new_arrival: boolean;
}