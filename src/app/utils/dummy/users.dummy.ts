import { User, UserViewModel } from "../model/user.model";

export const USERS_DUMMY = {
  get USERS(): Array<User> {
    return [
      new UserViewModel({
        id: 'u1',
        name: 'Jasmine Washington',
        avatar: 'user-1.jpg',
      }),
      new UserViewModel({
        id: 'u2',
        name: 'Emily Thompson',
        avatar: 'user-2.jpg',
      }),
      new UserViewModel({
        id: 'u3',
        name: 'Marcus Johnson',
        avatar: 'user-3.jpg',
      }),
      new UserViewModel({
        id: 'u4',
        name: 'David Miller',
        avatar: 'user-4.jpg',
      }),
      new UserViewModel({
        id: 'u5',
        name: 'Priya Patel',
        avatar: 'user-5.jpg',
      }),
      new UserViewModel({
        id: 'u6',
        name: 'Arjun Singh',
        avatar: 'user-6.jpg',
      }),
    ];
  }
}
