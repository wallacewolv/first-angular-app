export class UserViewModel implements User {
  id!: string;
  name!: string;
  avatar!: string;

  constructor(user: User) {
    Object.assign(this, user);
  }
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}
