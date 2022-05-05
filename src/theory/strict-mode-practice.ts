//strictFunctionTypes
function helloName(x: string){
    console.log("Hello," + x.toLowerCase());
}

// will catch error with function syntax 
// type StringOrNumberName = (ns: string | number) => void;
// let func: StringOrNumberName = helloName;
// func(10);
var inputName:string = "Ron"
helloName(inputName);

// normal with object method
type Methodish = {
    func(x: string | number): void;
};

const m:Methodish = {
    func: helloName,
};

// m.func(10);
interface Users{
    name: string,
    age: number
}

//strictNullChecks
const users = [
    {name: "Ron", age: 25},
    {name: "Pieces", age: 5}
]

var loggedInUsername: string = "Ron";
//error version
// const loggedInUser = users.find(u => u.name === loggedInUsername);

const loggedInUser: Users | undefined = users.find(u => u.name === loggedInUsername);
console.log(loggedInUser?.age)
//Object is possibly 'undefined'.ts(2532)

//strictPropertyInitialization, email has type string | undefined or must initialize 
// class UserAccount{
//     name: string;
//     accountType = "user";
//     email: string;
//     address: string | undefined;
//     constructor(name: string){
//         this.name = name;
//     }
// }

class UserAccount{
    //readonly id: number; set when initialize 
    name: string;
    accountType = "user";
    email: string;
    address: string | undefined; //address"?: string;
    constructor(name: string, email:string){
        this.name = name;
        this.email = email;
    }
}

interface Student{
    id: number,
    name: string,
    age: number,
    gender: string
}

const studentList: Student[] = [
    {id: 1, name:"Ron", age: 25, gender: "Male"},
    {id: 2, name:"Pieces", age: 3, gender: "Male"},
]

const newList = [...studentList];
console.log(studentList[0] === newList[0]) // same referce object
console.log(studentList === newList)
newList[0].name = "Alice Alice";
console.log(studentList[0].name);

const myStudent = {
    id: 1,
    name: "Ron"
}// as const

myStudent.name = "Pieces";
console.log(myStudent.name);


//Type alias, union, type intersection / interface extends


interface BusinessParter{
    name: string;
    credit: number;
}

interface Identity{
    name: string;
    id: number;
}

type Contact = {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
interface Customer extends BusinessParter, Contact {}
// name is repeated, it will be normal when both are defined as same type
interface EmployeeFull extends Identity, Contact, BusinessParter {} 

//interface merging not type alias
interface Identity{
    issueDay: Date;
}
const e: EmployeeFull = {
    name: "hello",
    id: 1,
    email: "",
    phone: "",
    credit: 200000,
    issueDay: new Date("2017/02/02"),
}

console.log(e)

//Duplicate identifier 'Contact'
// type Contact = {
//     facebook: string;
// };


//optional or default parameter
function getLength(numberList: number[] = []) : number{
    return Array.isArray(numberList) ? numberList.length : 0;
}


function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?:number): Date{
    if (d != undefined && y != undefined){
        return new Date(y, mOrTimestamp, d);
    }else{
        return new Date(mOrTimestamp)
    }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
console.log(d1, d2)
//const d3 = makeDate(1, 3);

//
function fail(msg: string): never{
    throw new Error(msg);
}

function testExample(x: string | number){
    if (typeof x === "string"){

    }else if (typeof x === "number"){

    }else{
        x; // has type never!
    }
}



function createStudent(id: number, name: string, age: number){
    console.log(id, name, age);
}
function createStudentObj({id, name, age}: {id: number, name: string, age: number}){
    // const {id, name, age} = student;
    console.log(id, name, age);
}


interface Student{
    id: number;
    name: string;
    age: number;
}

function createStudentInterface({id, name, age}: Student){
    console.log(id, name, age);
}

createStudentInterface({
    id: 1,
    name: "Ron",
    age: 18,
} as Student);


//enum
//static data on Front End | for one way, not data from API | need reverse use union types
// type MediaTypes = "application/json" | "application/xml"
enum Status{
    PENDING, 
    IN_PROGRESS,
    DONE,
    CANCELLED
}
//Status[Status["Pending"] = 0] = "Pending" only for number enum 
//can assign any number to your enum variable
const Status1: Status = 10;

console.log(Status.PENDING);

enum MediaTypes{
    JSON = "application/json",
    XML = "application/xml"
}

console.log(MediaTypes.JSON);


interface StudentGeneric{
    id: number;
    name: string;
    gender: string;
}

interface ListGeneric<T> {
    length: number;
    [index: string]: T | number;
}

const studentListGeneric : ListGeneric<StudentGeneric> = [
    {id: 1, name:"Ron", gender: "Male"},
    {id: 2, name:"Pieces", gender: "Male"},
]

const numberListGeneric : ListGeneric<number> = [
    2, 3, 4, 5, 6, 7, 8
]

console.log(studentListGeneric);
console.log(numberListGeneric);



type mappedTypes = {
    [Key in keyof StudentGeneric]: boolean
}

type Getters<T> = {
    [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property]
}

type lazyPerson = Getters<StudentGeneric>;
