class Student{
   fullName:string;
   constructor(public firstName, public middleInitial, public lastName){
      this.fullName = firstName + " " + middleInitial + " "+lastName;
   }
}

interface Person{
   firstName:string;
   lastName :string;
   type : string;
}

function greeter(person:Person){
   return  person.firstName + person.lastName+ person.type;
}

let user = new Student("李杰", "李y", "喜欢", "好");

document.body.innerHTML = greeter(user);


