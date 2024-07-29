import './style.css'
import { Bpp } from '@uio/package-b'


// import { Bpp} from '@uio/package-b'
import init, { greet } from "uio-wasm-demo"

await init()
function run() {
  console.log('start')
  // init().then(() => {
  // console.log('done')

  // console.log( greet())
  // })
  console.log( greet())

}

run()
const ia = new Bpp()

console.log(ia.app.name)


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello WASM!</h1>
  </div>
`

