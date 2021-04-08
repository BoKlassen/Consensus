function get_accounts() {
    const account_list = localStorage.getItem('account_list');
    if(account_list == null){
        return [];
    }
    return JSON.parse(account_list);
}

function create_account() {
  document.querySelector('form.form').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirm = document.getElementById('confirm').value;

        var account_list = JSON.parse(localStorage.getItem('account_list'));
        if(account_list == null) account_list = [];
        console.log(account_list);

        if (password.length < 8) {
            document.getElementById("error").innerHTML = "Passwords must be at least 8 characters.";
            document.getElementById("error").style.display = "block";
            return false;
        }else if (password != confirm) {
            document.getElementById("error").innerHTML = "Passwords do not match!";
            document.getElementById("error").style.display = "block";
            return false;
        }else if (account_list.includes(username)) {
            document.getElementById("error").innerHTML = "Account already exists.";
            document.getElementById("error").style.display = "block";
            return false;
        }else{
            account_list.push(username);
            localStorage.setItem('account_list', JSON.stringify(account_list));
            window.location.assign('login.html');
            return true;
        }
    })
}

function clear_accounts() {
    document.querySelector('form.form').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Cleared all accounts!');
        localStorage.setItem('account_list', '[]');
        return true;
    })
}

function redirect(location){
    window.location.assign(location);
}

function display_accounts() {
  document.querySelector('form.form').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem('account_list')));
  })
}

function verify_login(){
    const logged_in = sessionStorage.getItem('logged_in_user');
    console.log(logged_in);
    if(logged_in == null || logged_in == ''){
        window.location.replace('login.html');
    }
}

function logout(){
    sessionStorage.setItem('logged_in_user', '');
    window.location.href='login.html';
}

function login(){
    document.querySelector('form.form').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const account_list = get_accounts();

        if(username == null || username == undefined || username == "") {
            console.log('Account does not exist!');
            document.getElementById("error").innerHTML = "Enter a Username";
            document.getElementById("error").style.display = "block";
            return false;
        }

        if(!account_list.includes(username)) {
            console.log('Account does not exist!!!!');
            document.getElementById("error").innerHTML = "Account does not exist!";
            document.getElementById("error").style.display = "block";
            return true;
        }


        sessionStorage.setItem('logged_in_user', username);
        window.location.assign("index.html");
        return true;
    })
}
