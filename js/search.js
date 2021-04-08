function search(){
    var users = user_list();
    var results = [];

    var search = document.getElementById('search').value;
    if(search.length == 0) return;
    //remove spaces
    search_value = search.replace(/\s/g , '');

    var reg;
    var username;
    for(var i = 0; i < users.length; i++){
        username = users[i].username;
        reg = users[i].username.match(search);
        if(reg != null && reg.length > 0){
            results.push({
                    "id": users[i].id,
                    "pos" : reg.index,
                    "followers" : users[i].followers
            });
        }
    }

    results.sort(sort_followers);
    results.sort(sort_position);

    var contents = '';
    var beg;
    var mid;
    var end;
    var pos;
    var id;
    for(var i = 0; i < results.length; i++){
        id = results[i].id;
        username = users[id].username;
        pos = results[i].pos;
        beg = username.substring(0, pos);
        mid = username.substring(pos, pos + search.length);
        end = username.substring(pos + search.length, username.length);
        console.log(beg);
        console.log(mid);
        console.log(end);
        contents +=     '<li>' +
                            '<div class="container">' +
                                '<div class="row">' +
                                    '<div class="col-sm-2">' +
                                        '<div class="image-wrapper">' +
                                        '<img class="profile" src="../userdata/profile_images/user' + id + '.jpg" alt="user profile picture"/>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="col-sm-10">' +
                                    '<div class="name-wrapper">' +
                                        '<a href="user.html" onclick="save_user(' + id + ')">' + beg + '<b>' + mid + '</b>' + end + '</a>' +
                                    '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</li>';
    }

    document.getElementById('results').innerHTML = contents;

    console.log(results);
}

function sort_position(a, b) {
    if (a.pos < b.pos) {
        return -1;
    } else if (a.pos > b.pos) {
        return 1;
    } else {
        return 0;
    }
}

function sort_followers(a, b){
    if (a.followers < b.followers) {
        return 1;
    } else if (a.followers > b.followers) {
        return -1;
    } else {
        return 0;
    }
}
