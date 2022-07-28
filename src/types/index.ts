export type TTodoItem = {
  text: string,
  status: 'Active' | 'Complete'
}

export interface ITodoContext {
  showList: boolean,
  todos: Array<TTodoItem>;
}