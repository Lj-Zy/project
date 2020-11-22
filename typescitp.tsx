class Student{
   fullName:string;
   constructor(public firstName, public middleInitial, public lastName){
      this.fullName = firstName + " " + middleInitial + " "+lastName;
   }
}

interface Person{
   firstName:string;
   lastName :string;
}

function greeter(person:Person){
   return  person.firstName + person.lastName+ this.middleInitial;
}

let user = new Student("李杰", "李滢","喜欢");

document.body.innerHTML = greeter(user);