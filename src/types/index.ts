export type TTodoItem = {
  text: string;
  status: 'active' | 'complete';
};

export type TFilter = 'all' | 'active' | 'complete';