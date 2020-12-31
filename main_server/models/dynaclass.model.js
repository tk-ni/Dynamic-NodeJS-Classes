class DynaClass{
    constructor(){
        this.foo = 'foo';
        this.bar = 'bar';
    }

    getFoo = () =>{
        return this.foo;
    }

    setFoo = (str) =>{
        this.foo = str;
    }

    getBar = () =>{
        return this.bar;
    }

    setBar = (str) =>{
        this.bar = str;
    }
}

module.exports = DynaClass;