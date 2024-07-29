import "./style.css";
import { Bpp } from "@uio/package-b";
import init, { greet } from "uio-wasm-demo";

function testWasm() {
  init().then(() => {
    console.log("done");
    console.log(greet());
  });
}

function testLibrary() {
  const bpp = new Bpp();
  console.log(bpp.app.name);
}

testWasm();
testLibrary();

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello WASM!</h1>
  </div>
`;
