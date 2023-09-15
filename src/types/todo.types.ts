export interface ITodo {
  id: number;
  name: string;
  isDone: boolean;
}

export interface ITodoData extends Omit<ITodo, "id"> {}
