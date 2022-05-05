var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//strictFunctionTypes
function helloName(x) {
    console.log("Hello," + x.toLowerCase());
}
// will catch error with function syntax 
// type StringOrNumberName = (ns: string | number) => void;
// let func: StringOrNumberName = helloName;
// func(10);
var inputName = "Ron";
helloName(inputName);
var m = {
    func: helloName
};
//strictNullChecks
var users = [
    { name: "Ron", age: 25 },
    { name: "Pieces", age: 5 }
];
var loggedInUsername = "Ron";
//error version
// const loggedInUser = users.find(u => u.name === loggedInUsername);
var loggedInUser = users.find(function (u) { return u.name === loggedInUsername; });
console.log(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.age);
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
var UserAccount = /** @class */ (function () {
    function UserAccount(name, email) {
        this.accountType = "user";
        this.name = name;
        this.email = email;
    }
    return UserAccount;
}());
var studentList = [
    { id: 1, name: "Ron", age: 25, gender: "Male" },
    { id: 2, name: "Pieces", age: 3, gender: "Male" },
];
var newList = __spreadArray([], studentList, true);
console.log(studentList[0] === newList[0]); // same referce object
console.log(studentList === newList);
newList[0].name = "Alice Alice";
console.log(studentList[0].name);
var myStudent = {
    id: 1,
    name: "Ron"
}; // as const
myStudent.name = "Pieces";
console.log(myStudent.name);
var e = {
    name: "hello",
    id: 1,
    email: "",
    phone: "",
    credit: 200000,
    issueDay: new Date("2017/02/02")
};
console.log(e);
//Duplicate identifier 'Contact'
// type Contact = {
//     facebook: string;
// };
//optional or default parameter
function getLength(numberList) {
    if (numberList === void 0) { numberList = []; }
    return Array.isArray(numberList) ? numberList.length : 0;
}
function makeDate(mOrTimestamp, d, y) {
    if (d != undefined && y != undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5, 5);
console.log(d1, d2);
//const d3 = makeDate(1, 3);
//
function fail(msg) {
    throw new Error(msg);
}
function testExample(x) {
    if (typeof x === "string") {
    }
    else if (typeof x === "number") {
    }
    else {
        x; // has type never!
    }
}
function createStudent(id, name, age) {
    console.log(id, name, age);
}
function createStudentObj(_a) {
    var id = _a.id, name = _a.name, age = _a.age;
    // const {id, name, age} = student;
    console.log(id, name, age);
}
function createStudentInterface(_a) {
    var id = _a.id, name = _a.name, age = _a.age;
    console.log(id, name, age);
}
createStudentInterface({
    id: 1,
    name: "Ron",
    age: 18
});
//enum
//static data on Front End | for one way, not data from API | need reverse use union types
// type MediaTypes = "application/json" | "application/xml"
var Status;
(function (Status) {
    Status[Status["PENDING"] = 0] = "PENDING";
    Status[Status["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    Status[Status["DONE"] = 2] = "DONE";
    Status[Status["CANCELLED"] = 3] = "CANCELLED";
})(Status || (Status = {}));
//Status[Status["Pending"] = 0] = "Pending" only for number enum 
//can assign any number to your enum variable
var Status1 = 10;
console.log(Status.PENDING);
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["JSON"] = "application/json";
    MediaTypes["XML"] = "application/xml";
})(MediaTypes || (MediaTypes = {}));
console.log(MediaTypes.JSON);


