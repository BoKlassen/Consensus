function a_vote(post_id){
    var a_votes = get_a_votes();
    var b_votes = get_b_votes();

    remove_vote(a_votes, post_id);
    remove_vote(b_votes, post_id);

    a_votes.push(post_id);

    a_str = JSON.stringify(a_votes);
    b_str = JSON.stringify(b_votes);
    sessionStorage.setItem('a_votes', a_str);
    sessionStorage.setItem('b_votes', b_str);

    document.getElementById('post' + post_id + 'a').style.border = "8px solid green";
    document.getElementById('post' + post_id + 'a').style.opacity = "1";
    document.getElementById('post' + post_id + 'b').style.border = "1px solid black";
    document.getElementById('post' + post_id + 'b').style.opacity = "0.7";
}

function b_vote(post_id){
    var a_votes = get_a_votes();
    var b_votes = get_b_votes();

    remove_vote(a_votes, post_id);
    remove_vote(b_votes, post_id);

    b_votes.push(post_id);

    a_str = JSON.stringify(a_votes);
    b_str = JSON.stringify(b_votes);
    sessionStorage.setItem('a_votes', a_str);
    sessionStorage.setItem('b_votes', b_str);

    document.getElementById('post' + post_id + 'b').style.border = "8px solid green";
    document.getElementById('post' + post_id + 'b').style.opacity = "1";
    document.getElementById('post' + post_id + 'a').style.border = "1px solid black";
    document.getElementById('post' + post_id + 'a').style.opacity = "0.7";
}

function get_a_votes(){
    var a_str = sessionStorage.getItem('a_votes');
    var a_votes = JSON.parse(a_str);

    if(!Array.isArray(a_votes)){
        return [];
    }else{
        return a_votes;
    }
}

function get_b_votes(){
    var b_str = sessionStorage.getItem('b_votes');
    var b_votes = JSON.parse(b_str);

    if(!Array.isArray(b_votes)){
        return [];
    }else{
        return b_votes;
    }
}

function remove_vote(votes, post_id){
    const len = votes.length;
    if(len === undefined || !Array.isArray(votes)){
        return [];
    }
    for(var i = 0; i < votes.length; i++){
        if(votes[i] == post_id){
            votes.splice(i, 1);
        }
    }
    return votes;
}

function refresh_votes(){
    const a_votes = get_a_votes();
    const b_votes = get_b_votes();
    var post_id;

    for(var i = 0; i < a_votes.length; i++){
        post_id = a_votes[i];
        document.getElementById('post' + post_id + 'a').style.border = "8px solid green";
        document.getElementById('post' + post_id + 'a').style.opacity = "1";
        document.getElementById('post' + post_id + 'b').style.border = "1px solid black";
        document.getElementById('post' + post_id + 'b').style.opacity = "0.7";
    }
    for(var i = 0; i < b_votes.length; i++){
        post_id = b_votes[i];
        document.getElementById('post' + post_id + 'b').style.border = "8px solid green";
        document.getElementById('post' + post_id + 'b').style.opacity = "1";
        document.getElementById('post' + post_id + 'a').style.border = "1px solid black";
        document.getElementById('post' + post_id + 'a').style.opacity = "0.7";
    }
}
