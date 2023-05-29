export interface INavigationLink {
    title: string;
    link: string;
    key: string;
  }

  export interface IUser {
  userId: string,
  username: string
  password: string
  fullName: string
  email: string
  numberPhone: string;
  address: string
}  

export interface IAuthData {
  user: IUser | null;
  isLoggedIn: boolean;
}
export interface ILoginResponse {
  data: {
    user: IUser;
  };
}

export interface IProductCategory {
  id:number,
  name: string
}

export interface IProduct {
  id: number
  name: string,
  description: string,
  price: string,
  image: string,
  quantityInStock: number,
  productCategory: IProductCategory,
}

export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

export interface ILoginState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

export interface IUserLogin {
  username: string,
  password: string
}

export interface IShoppingCart {
  id: string | number,
  userId: string,
  count: number,
  product: IProduct
}

export interface IAddToCartDto {
  userId: string | number,
  productId: string | number,
}