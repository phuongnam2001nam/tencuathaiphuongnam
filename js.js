//đăng kí
function saveAccount(){
    var user=document.getElementById('tk').value;
    var pass=document.getElementById('mk').value;
    var repass=document.getElementById('rmk').value;
    if(pass !== repass){
        alert("Xác nhận mật khẩu không trùng khớp !!!");
        return false;
    }
    if(user.indexOf(" ")!==-1 || pass.indexOf(" ")!== -1){
        alert('Tài khoản hoặc mật khẩu không được có khoảng trắng!!!');
        //alert("Tài khoản hoặc mật khẩu không được có khoảng trắng!!!");
        return false;
    }
    var account = {
        username: user,
        password: pass,
        type    : 'User'
    };
    var checkAccount= true;
    var accounts = JSON.parse(localStorage.getItem('accounts'));
    if(localStorage.getItem('accounts')=== null){
        var accounts=[];
    }
    for(var i=0; i< accounts.length; i++){
        if(accounts[i].username=== user){
            alert("Tên tài khoản đã tồn tại ");
            checkAccount= false;
            break;
        }
    }
    if(checkAccount== true){
        accounts.push(account);
        localStorage.setItem('accounts',JSON.stringify(accounts));
        alert("Đăng ký thành công! Hãy đăng nhập để trải nghiệm");
    }
}
//đăng nhập
function checkLogin(){
    var user=document.getElementById('tk').value;
    var pass=document.getElementById('mk').value;
    var accounts = JSON.parse(localStorage.getItem('accounts'));
    var statusSingIn=false;
    for(var i=0;i<accounts.length;i++){
        if(user===accounts[i].username && pass===accounts[i].password){
            statusSingIn=true;
            sessionStorage.setItem('u',i);
            window.location.href='home.html';
        }
    }
    if(statusSingIn==false){
        alert("Tài khoản hoặc mật khẩu không hợp lệ");
    }
}
//