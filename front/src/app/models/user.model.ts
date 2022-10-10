import { defaultsDeep } from 'lodash';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  taille: number;
  poids: number;

  constructor(user?: Partial<User>) {
    defaultsDeep(this, user);
  }
}
