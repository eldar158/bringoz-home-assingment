import { Location } from './Location.model';
import { Task } from './Task.model'

export interface Driver {
  id: number;
  name: string,
  phone: string,
  email: string,
  location: Location,
  tasks: Task[],
}
