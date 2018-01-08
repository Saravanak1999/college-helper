var subjects=document.querySelectorAll("li");
var info=document.querySelector("#info");
var buttons=document.querySelectorAll("button");
var object;
var temp;	//to store the name of the pdf
var sub;	//to store the current active subject and disable the previously active subject

//To show the contents of the selected the subject
for(i=0;i<subjects.length;i++){
	subjects[i].addEventListener("click",function(){
		//Show the contents available
		document.querySelector("#contents").classList.remove("disable");
		if(sub!=undefined){sub.classList.remove("active");}				//removes text decoration from previously selected subject
		this.classList.add("active");									//adds text decoration to the currently selected subject
		info.textContent=this.textContent;								//displays the name of the slected subject
		sub=this;														//stores currently active subject

		//To update the url of Notes section
		object=document.querySelectorAll("#Notes>div>div>object");
		for(i=0;i<object.length;i++){
			object[i].data=this.textContent+(i+1)+".pdf";
		}

		//To update the url of Important Questions section
		object=document.querySelectorAll("#Important_Questions>div>div>object");
		for(i=0;i<object.length;i++){
			object[i].data=this.textContent+"imp"+(i+1)+".pdf";
		}
		
		//To update the url of MCQ section
		object=document.querySelectorAll("#MCQ>div>div>object");
		for(i=0;i<object.length;i++){
			object[i].data=this.textContent+"mcq"+(i+1)+".pdf";
		}

		//To update the url of Cheat Sheet section
		object=document.querySelectorAll("#Cheat_Sheet>div>div>object");
		for(i=0;i<object.length;i++){
			object[i].data=this.textContent+"cheat sheet"+(i+1)+".pdf";
		}

		//To disable the visibility of contents below the buttons when a subject is clicked
		for(i=1;i<buttons.length;i++){
			temp="#"+buttons[i].textContent;
			document.querySelector(temp).classList.add("disable");
		}

	});
}

// To toggle the visibility of the Contents below the buttons
for(i=1;i<buttons.length;i++){
	buttons[i].addEventListener("click",function(){
		temp="#"+this.textContent;
		document.querySelector(temp).classList.toggle("disable");

	});
}

// Since bootstrap 4 doesn't automatically go back from the hambergur in mobile devices
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
