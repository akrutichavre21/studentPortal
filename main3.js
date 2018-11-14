
	function hide_tw() {
		if($( '#invalid' ).is(":visible"))
			$('#invalid').hide();
		if($( '#information' ).is(":visible"))
			$('#information').hide();
	}
	
	$(document).ready(function() {
		hide_tw();
		$('#submit').click(function()
		{
			hide_tw();
			rollNumber = document.getElementById("rollNumber").value;
		    if (rollNumber == "") 
		    {
		        alert("Please enter roll number.");
		    } 
		    else 
		    {
		    	var jersey_url = "http://localhost:8080/student_api/webapi/Student/students/" + rollNumber;
			    $.ajax({
			        url: jersey_url
			    }).then(function(data) {
			    	if(data != undefined) {
				    	console.log(data);
				    	$('#name').empty().append(data.name);
				       	$('#rollNumber1').empty().append(data.rollno);
				       	$('#DOB').empty().append(data.dob);
				       	$('#age').empty().append(data.age);
				       	$('#chemistryMarks').empty().append(data.chem);
				       	$('#mathematicsMarks').empty().append(data.maths);
				       	$('#physicsMarks').empty().append(data.phy);
				       	$('#information').show("slow");
				       	var imgUrl = "http://localhost:8080/student_api/webapi/Student/"+"download/image/"+data.rollno;
				       	$("#imageUrl").attr("src", imgUrl);
				       	$("#imageUrl").show();
			    	} else {
			    		$('#invalid').show("slow");
			    	}
			    });
			}
		});
	});
