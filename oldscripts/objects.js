// sometimes a variable needs to hold more info than a single value.
//an obects is a collection of data, and can be accesssed indiviudally. 
//promotes reuse

var person = {
    firstName: "Christian",
    lastName: "Campbell",
    email: "live.com",
    phone: "606.367.9785",
    birthday: "08/30/1995",
    fullName : function() {
        return this.firstName + " " + this.lastName; //return this objects first name, and this last name in this object.
    }
};

function printDetails (p) { //brings p in with the function. 
    console.log(p.email); //variable sets the value 
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.birthday);
    console.log(p.fullName());
}

printDetails(person); //puts person in p (var)

var a = person.fullName(); //only gets out fill name
console.log(a); // sdnajndkjas