
function showUserList(){
    if (localStorage.getItem('accounts')===null){
		return false;
	}
    var accounts = JSON.parse(localStorage.getItem('accounts'));
	var tr='<tr><th>STT</th><th>HỌ TÊN KH</th><th>TÊN ĐĂNG NHẬP</th><th>Xóa</th></tr>';
	for(var i=1; i<accounts.length;i++){
		tr+='<tr>'+
		'<td>'+i+'</td>'+
		'<td>'+accounts[i].password+'</td>'+
		'<td>'+accounts[i].username+'</td>'+
		'<td><button class="delete" onClick="deleteuser(\''+accounts[i].username+'\')">×</button></td></tr>';
	}
	document.getElementById('userlist').innerHTML=tr;
}
function deleteuser(usernamedelete){
    var accounts = JSON.parse(localStorage.getItem('accounts'));
	for(var i=0;i<accounts.length;i++){
		if(accounts[i].username == usernamedelete){
			if(confirm('Bạn có muốn xóa tài khoản này?')){
				accounts.splice(i, 1);
			}
		}
	}
    localStorage.setItem('accounts',JSON.stringify(accounts));
	showUserList();
}
// JavaScript Document