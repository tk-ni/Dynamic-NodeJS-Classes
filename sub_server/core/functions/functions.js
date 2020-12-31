module.exports = {
    processReceivedClass: (clsString) => {

        //Get the keys and values from input
        let keys = Object.keys(clsString.instance);
        let values = Object.values(clsString.instance);

        //Create a temporary class
        let tempClass = class {
            constructor() {

                //Assign the keys and values to tempClass
                keys.map((key, i) => {
                    this[key] = values[i];
                })

                //Assign functions to tempClass using eval
                clsString.functions.map(func =>{
                    this[func.name] = eval(func.string);
                })
            }
        }

        //Rename tempClass to the input name
        Object.defineProperty(tempClass, 'name', {
            value: clsString.className
        });

        //Return the new constructor
        return tempClass;
    }
}