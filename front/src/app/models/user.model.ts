import { defaultsDeep } from 'lodash';
import {Programme} from './programme.model';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  taille: number;
  poids: number;
  programme: Programme;

  constructor(user?: Partial<User>) {
    defaultsDeep(this, user);
  }
}
