var topic =["HTML", "CSS" , "GIT", "JAVASCRIT"]

var alltopic = topic[Math.floor(Math.random()* topic.length)]
/*
var x = 0;
for(x=0;x < topic.length;x++){
console.log(topic[x]); }*/
function listedtopic(){
    var x = 0
    for(x=0;x < topic.length;x++){
        console.log(topic[2])
    }
}


function newtopic(){
if (topic === "HTML"){
    console.log("lets study html!")
}else if(topic === "CSS"){
    console.log("lets study CSS!")
}else if(topic === "GIT"){
    console.log("lets Study GIT!")

}else if (topic === "JAVASCRIPT"){
    console.log("lets study Javascript")
}else{
    console.log("I have study all")
}
}

console.log("which topic shoul we leanr")
newtopic()

console.log("are we here to learn something")
listedtopic()

var shape = ["triangle","square","pentagon","circle"];


var x = 0;
for(var x=0;x < shape.length;x++){

    console.log(shape[x])
}

function newshape(){
    var x = 0
    for(x = 0; x <shape.length;x++){
        console.log(shape[3])
    }
}
newshape()

var studentinfo = ["james",54 , true];

function helloword(){
    console.log("I am a function key");
}
helloword()
