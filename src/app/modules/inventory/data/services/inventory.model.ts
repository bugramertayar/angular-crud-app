export interface Inventory {
  id?:string;
  name?:string | null;
  stockQuantity?:number | null;
  category?:string | null;
  brand?:string | null;
  creationTime?:Date | null;
}
