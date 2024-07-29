export { foo, Status } from './foo'
export class App  {
    name: string;
    // foo: Status;
    constructor(name?: string) {
        this.name = name || ''
        // this.foo = foo
    }
}