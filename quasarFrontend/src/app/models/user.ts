export class User {

  static userApi( obj: Object) {
    return new User(
      obj['id'],
      obj['email'],
      obj['first_name'],
      obj['last_name'],
      obj['avatar']

    );

  }

  constructor(
    public id: string,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string,
  ) {}

 get fullName () {
    return `${ this.first_name} ${ this.last_name}`;
  }

}
