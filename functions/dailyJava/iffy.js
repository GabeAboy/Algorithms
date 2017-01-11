//iffys
var funcArray = [];
for( var i = 0; i <=5; i++ ){
 	(function( i ){
 		funcArray.push(
 			function(){ console.log( i ); }
 		);
 	})( i );
 }
 funcArray[0](); //0
 funcArray[1](); //1
 funcArray[2](); //2
 funcArray[3](); //3
 funcArray[4](); //4
 funcArray[5](); //5
