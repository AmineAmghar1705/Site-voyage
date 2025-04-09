// alert c'est un pop up
// console.log c'est dans la console
// pop-up 
alert("je suis une alerte");
console.log("its me ");
// le js est sensible a la casse il fair la difference entre la maj et les min
// 4 moyens de declarer une  variables
var x=5;
console.log(x);
let y=10;
console.log(y);
const z =5;
console.log(z);
x=6
console.log(x);
y=6;

console.log(y);
// z=6;
// console.log(z);

const voiture={type:"dacia",color:"marron"
};
console.log(voiture.type);
voiture.type="peugeot";
console.log(voiture.type);
n=80;
console.log(n);
var x=60;
console.log(x);
// let y=38;
// console.log(y);
// // cont z=58;
// console.log(z);
 // const change vde val et ne peut pas redefinir et redecla
 // let il peut redef mais pas redec
 // var il peut tout faire
 //  systeme de bloc let 
 var x="badie";
 var b=`je ${x}suis ${x}`;
 console.log(b);
 // ${x} pour injecter
 var g=document.getElementById('badieout');

 console.log(g);
 var h=document.getElementsByName('narimene');
 console.log(h);
g.style.color="pink";
var bout=document.getElementById('bout');
console.log(bout);

bout.addEventListener('click',function(){
	g.className="grand";
	g.style.color="red";
	g.innerHTML="<p> coucou</p>";
	
	
	 	console.log(g.textContent);
	 	
	 	
})
// function add(e){
// var elt=e.target;
// if(elt)

// }
