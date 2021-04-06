function draw_post(post_id){
    const post = getPost(post_id);
    const shares = post.shares;
    const comments = post.comments;
    const likes = post.likes;
    const user_id = userIDFromPostID(post_id);
    const user = getUser(user_id);
    const username = user.username;
    const contents =    '<li>' +
                            '<div id="post-wrapper" class="container">' +
                                '<hr>' +
                                '<div id="post-header" class="row">' +
                                    '<div id="profile" class="col-sm-1">' +
                                        '<img src="../userdata/profile_images/user' + user_id + '.jpg">' +
                                    '</div>' +
                                    '<div class="col-sm-10"><a id="username" href="user.html" onclick="save_user(' + user_id + ')">' + username + '</a></div>' +
                                    '<div id="options" class="col-sm-1">' +
                                    '<img class="util-button" src="../images/options.png" alt="Options Button">' +
                                    '</div>' +
                                    '</div>' +
                                    '<hr>' +
                                    '<div id="post">' +
                                        '<div id="left" class="col-sm-6">' +
                                            '<img src="../userdata/post_images/post' + post_id + 'a.jpg">' +
                                        '</div>' +
                                        '<div id="right" class="col-sm-6">' +
                                            '<img src="../userdata/post_images/post' + post_id + 'b.jpg">' +
                                        '</div>' +
                                    '</div>' +
                                '<hr>' +
                                '<div id="post-footer" class="row">' +
                                    '<div id="share" class="col-sm-4">' +
                                        '<img class="util-button" src="../images/share.png" alt="Share Button">' +
                                        '<br><span class="interactions">' + shares + '</span>' +
                                    '</div>' +
                                    '<div id="comment" class="col-sm-4">' +
                                        '<img class="util-button" src="../images/comment.png" alt="Comment Button">' +
                                        '<br><span class="interactions">' + comments + '</span>' +
                                    '</div>' +
                                    '<div id="like" class="col-sm-4">' +
                                        '<img class="util-button" src="../images/like0.png" alt="Like Button">' +
                                        '<br><span class="interactions">' + likes + '</span>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</li>';

    document.getElementById("post_list").children[0].innerHTML += contents;
}

function getPost(id){
    return post_list()[id];
}

function getUser(id){
    return user_list()[id];
}

function userIDFromPostID(post_id){
    const post = getPost(post_id);
    const user = post.user;
    return user;
}

function postListFromUserID(user_id){
    return getUser(user_id).posts;
}

function draw_post_list(user_id){
    console.log(user_id);
    const post_list = postListFromUserID(user_id);
    if(post_list.length == 0){
        console.log('no posts');
    }
    var contents = '';
    var post;
    for(var i = 0; i < post_list.length; i++){
        post_id = post_list[i];
        contents +=
        '<div class="col-sm-4">' +
            '<div class="post" onclick="visit_post(' + post_id + ')">' +
                '<img class="a" src="../userdata/post_images/post' + post_id + 'a.jpg" alt="">' +
                '<img class="b" src="../userdata/post_images/post' + post_id + 'b.jpg" alt="">' +
            '</div>' +
        '</div>';
    }
    console.log(contents);
    document.getElementById("row").innerHTML = contents;
}

function visit_post(post_id){
    sessionStorage.setItem('requested_post', post_id);
    window.location.href = "post.html"
}

function sorted_posts(){

}

function is_before(post_1, post_2){

}
