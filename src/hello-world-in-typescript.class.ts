export class HelloWorldInTypescript {
  static HelloWorld() {
    let h1 = document.createElement("h1");
    h1.innerText = "Hello World in Typescript by Sam Mat!";
    document.body.appendChild(h1);

    let h2 = document.createElement("h2");
    h2.innerText = "The second header";
    document.body.appendChild(h2);
  }
}