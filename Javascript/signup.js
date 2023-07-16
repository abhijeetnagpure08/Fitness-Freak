function submitform(){
  
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
  
    localStorage.setItem("user-username", JSON.stringify(user));
    localStorage.setItem("user-password", JSON.stringify(pass));
  
  }
  