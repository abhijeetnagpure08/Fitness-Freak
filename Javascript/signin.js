function LoginData(){
    
    let User = document.getElementById("user").value;
    let Pass = document.getElementById("pass").value;

    let userData = JSON.parse(localStorage.getItem("user-username")) || [];
    let passwordData = JSON.parse(localStorage.getItem("user-password")) || [];

    // let userData = JSON.parse(localStorage.getItem("username")) || [];
    
    if(User == userData){
        if(Pass == passwordData){
            window.location.assign("index.html");
            alert("Login Successfully");

        }else {
            alert("Invalid Password");
        }
    }else{
        alert("Invalid Credentials");
    }
}
