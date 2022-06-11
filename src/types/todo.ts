export interface Todo {
  id: number;
  body: string;
  isComplited: boolean;
  created_At: Date;
}

export type Mode = 'all' | 'complited' | 'active';
