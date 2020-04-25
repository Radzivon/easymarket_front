export class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
  isBlock: boolean;

  constructor() {
  }

  setBlock(isBlock){
    this.isBlock = isBlock;
  }
}
