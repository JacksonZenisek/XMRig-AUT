function hideuparrow(){
    let arrow1 = document.getElementById("mobilemenubut_alt");
    let arrow2 = document.getElementById("mobilemenubutup_alt");
    let arrowpic = document.getElementById("arrowic2_alt");
    if(arrow1.style.display === "none"){

        arrow1.style.display = "block";
        arrow2.style.display = "none";
        arrowpic.style.display = "none";
    }else{
        arrow1.style.display = "none";
        arrow2.style.display = "block";
        arrowpic.style.display = "block";
    }
};

function showuparrow(){
    let arrow1 = document.getElementById("mobilemenubut_alt");
    let arrow2 = document.getElementById("mobilemenubutup_alt");
    let arrowpic = document.getElementById("arrowic2_alt");
    if(arrow1.style.display === "block"){

        arrow1.style.display = "none";
        arrow2.style.display = "block";
        arrowpic.style.display = "block";
    }else{
        arrow1.style.display = "block";
        arrow2.style.display = "none";
        arrowpic.style.display = "none";
    }
};

function showmobilemenu(){
    let mobilemenu = document.getElementById("mobilemenu_container_alt");

    if(mobilemenu.style.display === "block"){

        mobilemenu.style.display = "none";
    }else{
        mobilemenu.style.display = "block";
    }
};

function hidemobilemenu(){
    let mobilemenu = document.getElementById("mobilemenu_container_alt");

    if(mobilemenu.style.display === "none"){

        mobilemenu.style.display = "block";
    }else{
        mobilemenu.style.display = "none";
    }
}

function mobilemenuslideon(){
    let mobilemenu2 = document.getElementById("mobilemenu_container_alt");
    mobilemenu2.style.height = "600px";
}