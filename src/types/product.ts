import { Category } from '@/types/category'
export interface Product {
    ID : string
    Name : string
    Price : number
    Quantity : number
    Description : string
    Category : Category
}