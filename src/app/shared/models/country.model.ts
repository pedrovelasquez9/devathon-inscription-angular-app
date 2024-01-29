import { Deserializable } from '../interfaces/deserializable.interface';

export class Country implements Deserializable<Country> {
  constructor(
    public name?: any,
    public flags?: any
  ) {}

  deserialize(input: any): Country {
    Object.assign(this, input);
    return this;
  }
}
