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

export function defaultDriver(id:number): Driver {
  return {
    id: id,
    name: '',
    email: '',
    phone: '0-000-000-0000',
    location: {lat: 0, lng: 0},
    tasks: []
  }
}
