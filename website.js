if (window.openDatabase) {

    var mydb = openDatabase("clubs_db", "0.1", "Database of Clubs Registered", 1024 * 1024);
   
    mydb.transaction(function(t) {
        t.executeSql("CREATE TABLE IF NOT EXISTS clubsdata (email TEXT PRIMARY KEY, firstname TEXT, lastname TEXT, clubname TEXT, purpose TEXT, events TEXT, fundraisers TEXT, category INTEGER, image TEXT)"); //creates table 
	t.executeSql("CREATE TABLE IF NOT EXISTS users (email TEXT PRIMARY KEY, firstname TEXT, lastname TEXT, password TEXT)"); //creates table 

    });
} else {
    alert("WebSQL is not supported by your browser!"); 
}



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";  
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
function Academic() {
    var catt1 = ["Academic Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
	document.getElementById("thumbnail").className= "unhidden";
	    var dataimg4 = t.executeSql("SELECT image FROM clubsdata WHERE categories = 4");
    var src4 = document.getElementById("imgg").src;
    if (mydb) {
		mydb.transaction(function(t){
		src4.innerHTML = dataimg4;
		})
}	else {
		alert("db not found!");
	}	
}

function updateName(transaction, results) {
    //initialise the listitems variable
    var name = "";
    //get the car list holder ul
    var pop = document.getElementById("pop");
    //clear cars list ul
    pop.innerHTML = "";
    var i;
    //Iterate through the results
    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.name(i);
        prevname.innerHTML += row.name;
    }
}
//function to get the list of cars from the database

function Service() {
    var catt1 = ["Service Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
    document.getElementById("thumbnail").className= "unhidden";
    /*var src = document.getElementById("imgg").src;*/
    if (mydb) {
		mydb.transaction(function(t, results){
	/*	t.executeSql("SELECT image FROM clubsdata WHERE categories = 1", [], updateImg); */ 
		t.executeSql("SELECT clubname FROM clubsdata WHERE categories = 1", [], updateName);
		/*src.innerHTML = dataimg;*/
		})
}	else {
		alert("db not found!");
	}	
}
function Other() {
    var catt1 = ["Other Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
        document.getElementById("thumbnail").className= "unhidden";
    var dataimg7 = t.executeSql("SELECT image FROM clubsdata WHERE categories = 7");
    var src7 = document.getElementById("imgg").src;
    if (mydb) {
		mydb.transaction(function(t){
		src7.innerHTML = dataimg7;
		})
}	else {
		alert("db not found!");
	}
}
function SGA() {
    var catt1 = ["Student Government Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
        document.getElementById("thumbnail").className= "unhidden";
    var dataimg3 = t.executeSql("SELECT image FROM clubsdata WHERE categories = 3");
    var src3 = document.getElementById("imgg").src;
    if (mydb) {
		mydb.transaction(function(t){
		src3.innerHTML = dataimg3;
		})
}	else {
		alert("db not found!");
	}
}
function Social() {
    var catt1 = ["Social Awareness Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
        document.getElementById("thumbnail").className= "unhidden";
    var dataimg6 = t.executeSql("SELECT image FROM clubsdata WHERE categories = 1");
    var src6 = document.getElementById("imgg").src;
    if (mydb) {
		mydb.transaction(function(t){
		src6.innerHTML = dataimg6;
		})
}	else {
		alert("db not found!");
	}
}
function Honor() {
    var catt1 = ["Honor Societies", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
    document.getElementById("thumbnail").className= "unhidden"
    var dataimg2 = t.executeSql("SELECT image FROM clubsdata WHERE categories = 2");
    var src2 = document.getElementById("imgg").src;
    if (mydb) {
		mydb.transaction(function(t){
		src2.innerHTML = dataimg2;
		})
}	else {
		alert("db not found!");
	}	
}
function Hobby() {
    var catt1 = ["Hobby Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
        document.getElementById("thumbnail").className= "unhidden";
    var dataimg5 = t.executeSql("SELECT image FROM clubsdata WHERE categories = 1");
    alert(dataimg5)
    var src5 = document.getElementById("imgg").src;
    if (mydb) {
		mydb.transaction(function(t){
		src5.innerHTML = dataimg5;
		})
}	else {
		alert("db not found!");
	}
}
