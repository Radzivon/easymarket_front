export class Cargo {
  private _id: number;
  private _name: string;
  private _weight: number;
  private _width: number;
  private _length: number;
  private _height: number;
  private _location: string;
  private _cargoCondition: string;
  private _transportationCost: number;
  private _isPaid: boolean;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get cargoCondition(): string {
    return this._cargoCondition;
  }

  set cargoCondition(value: string) {
    this._cargoCondition = value;
  }

  get transportationCost(): number {
    return this._transportationCost;
  }

  set transportationCost(value: number) {
    this._transportationCost = value;
  }

  get isPaid(): boolean {
    return this._isPaid;
  }

  set isPaid(value: boolean) {
    this._isPaid = value;
  }
}
