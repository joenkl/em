import { IContainer } from "./IContainer";

class Container implements IContainer {

    private services;

    constructor(){
        this.services = {};
    }

    service(name: any, cb: any){
        Object.defineProperty(this, name, {
            get: () => {
                if(!this.services.hasOwnProperty(name)){
                    this.services[name] = cb(this);
                }

                return this.services[name];
            },
            configurable: true,
            enumerable: true
        });

        return this;
    }
}

export default Container;
