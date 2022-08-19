export interface Stamp {
  id: number;
  title: string;
  content: string;
  path: string;
}

export type NewStamp = Omit<Stamp, 'id'>;
