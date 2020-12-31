module.exports = {
    processClassForTransfer: (instance) =>{

        //Get the functions of an instance as an array
        const getFunctions = (instance) =>{
            let names = Object.getOwnPropertyNames(instance);
            let functions = [];
            for(n of names){
                if(typeof instance[n] == 'function'){
                    functions.push({
                        name: n,
                        string: instance[n].toString(),
                    })
                }
            }
            return functions;
        }

        //Return the transferable class string
        return {
            instance: instance,
            className: instance.constructor.name,
            functions: getFunctions(instance)
        }
    }
}