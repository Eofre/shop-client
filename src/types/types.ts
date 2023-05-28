export interface INavigationLink {
    title: string;
    link: string;
    key: string;
  }

  export interface IUser {
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
