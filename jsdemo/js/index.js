class User {
  #login;
  #password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  getLogin() {
    console.log(this);
    return this.#login;
  }

  testPassword(password) {
    return this.#password === password;
  }
  display() {
    console.log(this.#login);
  }
}

class Admin extends User {
  #role;

  constructor(login, password, role) {
    super(login, password);
    this.#role = role;
  }
}
const user = new User("admin", "123456");

let panelParams = {
  title: "Title",
  height: 200,
  age: 30,
};

let x = 1;
let y = 2;
[x, y] = [y, x];

function func2(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
