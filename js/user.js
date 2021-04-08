function save_user(user_id) {
    sessionStorage.setItem('requested_user', user_id);
    return draw_user_profile(user_id);
}

function load_user() {
    const user_id = sessionStorage.getItem('requested_user');
    console.log('uid: ' + user_id);
    console.log('ss: ' + sessionStorage.getItem('logged_in_user'));
    if(user_id == sessionStorage.getItem('logged_in_user')){
        draw_self_profile(user_id);
        draw_self_posts();
    }else{
        draw_user_profile(user_id);
        draw_post_list(user_id);
    }
}

function draw_user_profile(user_id){
    const user = getUser(user_id);
    const username = user.username;
    const followers = user.followers;
    const following = user.following;
    const bio = user.bio;
    const contents =    "<div class='grid-container'>" +
                        "<div class='profile-picture' id='profile-picture'><img src='../userdata/profile_images/user" + user_id + ".jpg'>" +
                        "<br>" +
                        "<b></b>" +
                        "</div>" +
                        "<div class='info'>" +
                        "<p><b>" + username + "</b></p>" +
                        "<br>" +
                        "<p>Followers: " +  followers + "&ensp;&ensp;&ensp;&ensp; Following: " + following  +"</p>" +
                        "<br>" +
                        "<p><b>" + user.name + "</b></p>" +
                        "<br>" +
                        "<p>" + bio + "</p>" +
                        "</div>" +
                        "</div>";

    document.getElementById("profile-wrapper").innerHTML = contents;
}

function visit_self(){
    const user_id = sessionStorage.getItem('logged_in_user');
    sessionStorage.setItem('requested_user', user_id);
    window.location.assign('user.html');
}

function draw_self_profile(user_id){
    const contents =    "<div class='grid-container'>" +
                        "<div class='profile-picture' id='profile-picture'><img src='../images/default_user.svg'>" +
                        "<br>" +
                        "<b></b>" +
                        "</div>" +
                        "<div class='info'>" +
                        "<p><b>" + user_id + "</b></p>" +
                        "<br>" +
                        "<p>Followers: 0" +
                        "&ensp;&ensp;&ensp;&ensp; Following: 0" +
                        "</p>" +
                        "<br>" +
                        "<p><b>Your Name</b></p>" +
                        "<br>" +
                        "<p>Your bio</p>" +
                        "</div>" +
                        "</div>";
    document.getElementById("profile-wrapper").innerHTML = contents;
}

function draw_self_posts(){
    document.getElementById("post-wrapper").innerHTML = '<div id="no-posts"><span>You don\'t have any posts yet.</span></div>';
}
