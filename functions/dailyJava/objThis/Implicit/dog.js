//Create a dog object that has hungry, tired, playful
//Create the methods on that object : play, eat, sleep
//The play method decreases playful by 30 (Never less than 0), and increases hungry by 20 and tired by 10,
//The eat method decreases hungry by 30 (Never less than 0) and increases tired by 20
//The sleep method decreases tired by 30 (Never less than 0) and increases playful by 20
//Add a method that logs how hungry, tired, and playful your dog is
var dog = {
       hungry:90,
		   tired: 90,
		   playful:90,
		   play: function(){
		   	if(this.playful){
		   		this.playful-=30;
		   		this.hungry+=20;
          this.tired+=10;}
		   },
		   eat: function(){
		   	if(this.hungry){
		   		this.hungry-=30;
		   		this.tired+=20;}
		   },
		   sleep:function(){
		   	if(this.tired){
		   		this.tired-=30;
		   		this.playful+=20;}
		   },
       log:function(){
		   	console.log("Dog stats: "+
		   					this.hungry,
		   					this.tired,
		   					this.playful);
        },
       next:function(){
         if(this.tired>100)this.sleep();
       }
};
dog.play();
dog.play();
dog.log();
