var count =1;
function addData() {
    var title = document.getElementById("titleInput").value;
    var desc = document.getElementById("descInput").value;

    //This code is use to create the p tag
    var myPTag1 = document.createElement("p");
    var myPTag2 = document.createElement("p");

    //This code is use to create the content for any tags
    var myPTagContent1 = document.createTextNode(title);
    var myPTagContent2 = document.createTextNode(desc);
    
    // Adding the attribute for p tag
    myPTag1.setAttribute("style","color:black;font-size:12px;");
    myPTag2.setAttribute("style","color:black;font-size:12px;");
    
    myPTag1.setAttribute("id",count);
    myPTag2.setAttribute("id",count);

    //Add the cotent to p tag;
    myPTag1.appendChild(myPTagContent1);
    myPTag2.appendChild(myPTagContent2);

    count++;
    document.getElementById("xx").appendChild(myPTag1);
    document.getElementById("yy").appendChild(myPTag2);
    
    reset();
}

function reset() {
    document.getElementById("titleInput").value="";
    document.getElementById("descInput").value=""; 
}
