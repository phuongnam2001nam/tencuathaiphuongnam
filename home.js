function home(){
    var accounts = JSON.parse(localStorage.getItem('accounts'));
    var u=accounts[sessionStorage.getItem('u')].username;
    alert("Hello "+u+"!!!");
}