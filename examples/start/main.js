import './style.css'
import { Bpp} from '@uio/package-b/lib/main'
const ia = new Bpp()

console.log(ia.app.name)


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
  </div>
`

