import { Product } from './Product';

export interface User{
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  cartItems: Product[]
}
