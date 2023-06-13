

export interface IUser {
  id: number;
  name: string
  username: string
  email: string
  // address: any[]
  phone: string
  website: string
  // company: any[]
    
}


export interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
}