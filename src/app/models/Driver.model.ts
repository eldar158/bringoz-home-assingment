import { location } from './location.model';
import { task } from './task.model';

export interface Driver {
  name: string,
  phone: string,
  email: string,
  location: location,
  tasks: task,
}
