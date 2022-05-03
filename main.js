// let personObj = new Object();
// personObj.firstName="Beck";
// personObj.lastName="Don Don";
// personObj.age=23;
// personObj.eyeColor="red";
// personObj.smile = function(){
//     console.log("^__________^");
// };
// 方法2
// personObj={firstName:"Beck",lastName:"Don Don",age:23,eyeColor:"red",
// smile:function(){
//     console.log("-_-|||");
// };
// 方法3
function person(firstName,lastName,age,eyeColor){
    this.firstName=firstName;
    this.age=age;
    this.lastName=lastName;
    this.eyeColor=eyeColor;
    this.smile=function(){
        console.log("^o^");
    };
}
var newBorn = new person("Beck",23,"DonDon","red");
newBorn.smile();
