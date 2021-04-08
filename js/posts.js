function draw_post(post_id){
    const post = getPost(post_id);
    const shares = post.shares;
    const comments = post.comments;
    const likes = post.likes;
    const caption = post.caption;
    const user_id = userIDFromPostID(post_id);
    const user = getUser(user_id);
    const username = user.username;
    const contents =    '<li>' +
                            '<div id="post-wrapper" class="container">' +
                                '<div id="post-header" class="row">' +
                                    '<div id="profile" class="col-sm-2">' +
                                        '<img src="../userdata/profile_images/user' + user_id + '.jpg">' +
                                    '</div>' +
                                    '<div id="header-info" class="col-sm-9">' +
                                    '<a href="user.html" onclick="save_user(' + user_id + ')">' + username + '</a>' +
                                    '<hr>' +
                                      '<div id="caption">' +
                                          '<p>' + caption + '</p>' +
                                      '</div>' +
                                    '</div>' +
                                    '<div id="options" class="col-sm-1">' +
                                        '<img src="../images/options.png" alt="Options Button">' +
                                    '</div>' +
                                '</div>' +
                                    '<div id="post">' +
                                        '<div id="left" class="col-sm-6">' +
                                            '<img id="post' + post_id + 'a" src="../userdata/post_images/post' + post_id + 'a.jpg"  onclick="(a_vote(' + post_id + '))">' +
                                        '</div>' +
                                        '<div id="right" class="col-sm-6">' +
                                            '<img id="post' + post_id + 'b" src="../userdata/post_images/post' + post_id + 'b.jpg"  onclick="(b_vote(' + post_id + '))">' +
                                        '</div>' +
                                        '<div id="stat' + post_id + 'a" class="col-sm-6">' +
                                            '<span>' + a_stat(post_id) + '% (' + count_a_votes(post_id) + ' votes)</span>' +
                                        '</div>' +
                                        '<div id="stat' + post_id + 'b" class="col-sm-6">' +
                                            '<span>' + b_stat(post_id) + '% (' + count_b_votes(post_id) + ' votes)</span>' +
                                        '</div>' +
                                    '</div>' +
                                '<div id="post-footer" class="row">' +
                                    '<div class="col-sm-2"></div>' +
                                    /* SHARE BUTTON */
                                    '<div class="col-sm-1">' +
                                        '<img class="util-button" src="../images/share.svg" alt="Share Button">' +
                                    '</div>' +
                                    '<div id="share" class="col-sm-1">' +
                                        '<span class="interactions">' + shares + '</span>' +
                                    '</div>' +
                                    '<div class="col-sm-1"></div>' +
                                    /* COMMENT BUTTON */
                                    '<div class="col-sm-1">' +
                                        '<img class="util-button" src="../images/comment.svg" alt="Comment Button" onclick="like(' + post_id + ')">' +
                                    '</div>' +
                                    '<div id="comment" id="comment" class="col-sm-1">' +
                                        '<span class="interactions">' + comments + '</span>' +
                                    '</div>' +
                                    '<div class="col-sm-1"></div>' +
                                    /* LIKE BUTTON */
                                    '<div class="col-sm-1">' +
                                        '<img class="util-button" src="../images/like0.svg" alt="Like Button">' +
                                    '</div>' +
                                    '<div id="like" class="col-sm-1">' +
                                        '<span class="interactions">' + likes + '</span>' +
                                    '</div>' +
                                    '<div class="col-sm-2"></div>' +
                                '</div><hr>' +
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
            '<div id="' + post_id + '" class="post" onclick="visit_post(' + post_id + ')">' +
                '<img id="img' + post_id + 'a" class="a" src="../userdata/post_images/post' + post_id + 'a.jpg" alt="">' +
                '<img id="img' + post_id + 'b" class="b" src="../userdata/post_images/post' + post_id + 'b.jpg" alt="">' +
            '</div>' +
        '</div>';
    }
    console.log(contents);
    document.getElementById("row").innerHTML = contents;

    const a_votes = get_a_votes();
    console.log('a_votes: ' + a_votes);
    const b_votes = get_b_votes();
    console.log('b_votes: ' + b_votes);

    for(var i = 0; i < post_list.length; i++){
        post_id = post_list[i];
        if(a_votes.includes(post_id) || b_votes.includes(post_id)){
            document.getElementById(post_id).style.borderTop = '4px solid #FFCB14';
            document.getElementById(post_id).style.borderBottom = '4px solid #FFCB14';
        }

        if(a_votes.includes(post_id)){
            document.getElementById('img' + post_id + 'b').style.opacity = '75%';
            document.getElementById('img' + post_id + 'a').style.opacity = '100%';
        }else if(b_votes.includes(post_id)){
            document.getElementById('img' + post_id + 'a').style.opacity = '75%';
            document.getElementById('img' + post_id + 'b').style.opacity = '100%';
        }
    }
}

function visit_post(post_id){
    sessionStorage.setItem('requested_post', post_id);
    window.location.href = "post.html"
}

function sorted_posts(){

}

function is_before(post_1, post_2){

}
