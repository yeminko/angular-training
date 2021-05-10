import { Item } from '../item';

export class Print {
  constructor(
    public items: Item[],
    public total: number,
    public paid: number,
    public charged: number
  ) {}
}
