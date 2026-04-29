export interface Product {
  title: string;
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}
