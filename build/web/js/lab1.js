
x = [];
counter = 0;
targetUser = -1;
//abdalla




function addUser()
{
//    if (!$('#profileform')[0].checkValidity()) {
//        alert("Please Enter valid data");
//
//    } else {
        var userName = document.getElementById("userName").value;
        var teleph = document.getElementById("teleph").value;
        var email = document.getElementById("email").value;
        var personGender;
        if ($("#gender").val() == "male")
        {
            personGender = "male";
        } else
        {
            personGender = "female";
        }

        var textObject = {'name': userName, 'teleph': teleph, 'email': email, 'personGender': personGender};
        x.push(textObject);
        window.localStorage.setItem('textObject', JSON.stringify(x));
        //div

        var li = document.createElement("li");
        li.setAttribute("data-theme", "c");
        li.setAttribute("class", "ui-li-has-alt ui-li-has-thumb");
        li.setAttribute("id", counter);
        var div = document.createElement("div");
        div.setAttribute("class", "ui-btn-inner ui-li");

        var div2 = document.createElement("div");
        div2.setAttribute("class", "ui-btn-text");
        div.appendChild(div2);
        var a = document.createElement("a");
        a.setAttribute("href", "#Profile");
        a.setAttribute("class","ui-btn ui-btn-icon-notext ui-icon-phone");
        a.setAttribute("data-transition", "slidedown");
        a.setAttribute("class", "ui-link-inherit");
        var img = document.createElement("img");
        img.setAttribute("style", "width:150px ;height: 150px");
        if (personGender === "male")
        {
            img.setAttribute("src", "img/male.jpg");
        } else
        {
            img.setAttribute("src", "img/female.jpg");
        }
        img.setAttribute("class", "ui-li-thumb ui-corner-bl");
        a.appendChild(img);
        var span = document.createElement("span");
        span.setAttribute("class", "ui-li-heading");
        var text2 = document.createTextNode(userName);
        span.appendChild(text2);
        a.appendChild(span);
        div2.appendChild(a);
        var span2 = document.createElement("span");
        span2.setAttribute("class", "ui-icon-phone ui-btn-icon-right");
        div.appendChild(span2);
        li.appendChild(div);

//    div.style = "background-color:" + color;
//    huge_div.appendChild(div);

        div.id = counter;
        counter++;

        window.location="index.html";
        return false;
//    }
}


function choseFn(idUser) {
    window.location="index.html#Profile";
    targetUser = idUser;
    // var targetUserss = document.getElementById("targetID").value = x[idUser].name;
    $("#targetID").html(x[idUser].name);

    $("#profileImage").attr("style", "width:150px ;height: 150px");
    if (x[idUser].personGender === "female")
    {
        $("#profileImage").attr("src", "img/female.jpg");

    } else
    {
        $("#profileImage").attr("src", "img/male.jpg");
    }
    var a = document.createElement("a");

    a.setAttribute("href", "tel:+15555555555");
    a.setAttribute("data-role", "tel");
    a.setAttribute("data-icon", "phone");
    $("contentProfile1").append(a);

}
function deleteProfile() {

    delete x[targetUser];
    window.localStorage.setItem('textObject', JSON.stringify(x));
    location.reload();
}



function loadProfile() {
    var targetID = event.dataTransfer.getData("draggableID");
    document.getElementById("targetID").value = x[targetID].name;
}

function looad() {

    x = JSON.parse(localStorage.getItem('textObject'));		//bykml 3l array 3lshan lma y2fl w yft7 yb2a m3ah el array el 2dyma w bykml 3lyha 

    var myUL = document.getElementById("myUL");
    if (x != null) {
        counter = x.length;
        for (i = 0; i < x.length; i++) {
            if (x[i] != null) {
                
                if (x[i].personGender === "male")
                    var img = $("<img>").attr("src", "img/male.jpg");
                else
                    var img = $("<img>").attr("src", "img/female.jpg");
                var h = $("<h2></h2>").text(x[i].name);
                var a = $("<a></a>").attr("href", "tel:"+x[i].teleph);
                
                a.attr("data-role", "button");
                a.attr("data-icon", "phone");
                var outerA = $("<a></a>").attr("onclick", "choseFn(" + i + ");");
                a.addClass("ui-btn ui-btn-icon-notext ui-icon-phone");
                
                outerA.addClass("ui-btn");
                outerA.append(img);
                outerA.append(h);
                var li = $("<li></li>").append(outerA);
                li.append(a);
                li.addClass("ui-li-has-alt ui-li-has-thumb");
                $("#myUL").append(li)

            }
        }

    } else {
        x = new Array();
    }

}