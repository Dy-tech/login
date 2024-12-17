function redirect() {
    let server = "dy-tech.github.io/login-system";

    let preuser = "/?user="
    let getuser = document.getElementById("userfield").value;
    let user = preuser.concat(getuser);

    let prepass = "&pass=";
    let getpass = document.getElementById("passfield").value;
    let pass = prepass.concat(getpass);

    let userpass = user.concat(pass);
    let result = server.concat(userpass);
    
    location.replace(result)
  }