function save_user(user_id) {
    sessionStorage.setItem('requested_user', user_id);
    return create_user_profile(user_id);
}

function load_user() {
    console.log('in load user');
    return create_user_profile(sessionStorage.getItem('requested_user'));
}

function create_user_profile(user_id){
    console.log('in create profile');
    const user = getUser(user_id);
    const username = user.username;
    const followers = user.followers;
    const following = user.following;
    const bio = user.bio;
    const contents =    '<div>' +
                        username +
                        '</div>';

    document.getElementById("profile-wrapper").innerHTML = contents;
    return true;
}
