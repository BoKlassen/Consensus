function a_vote(post_id){
    var a_votes = get_a_votes();
    var b_votes = get_b_votes();

    if(a_votes.includes(post_id)){
        remove_vote(a_votes, post_id);
        a_default(post_id);
    }else{
        a_votes.push(post_id);
        remove_vote(b_votes, post_id);

        a_style(post_id);
    }

    a_str = JSON.stringify(a_votes);
    b_str = JSON.stringify(b_votes);
    sessionStorage.setItem('a_votes', a_str);
    sessionStorage.setItem('b_votes', b_str);

    console.log('a_votes: ' + a_votes);
    console.log('b_votes: ' + b_votes);

    refresh_vote(post_id);
}

function b_vote(post_id){
    var a_votes = get_a_votes();
    var b_votes = get_b_votes();

    if(b_votes.includes(post_id)){
        remove_vote(b_votes, post_id);

        b_default(post_id);
    }else{
        b_votes.push(post_id);
        remove_vote(a_votes, post_id);

        b_style(post_id);
    }

    a_str = JSON.stringify(a_votes);
    b_str = JSON.stringify(b_votes);
    sessionStorage.setItem('a_votes', a_str);
    sessionStorage.setItem('b_votes', b_str);

    console.log('a_votes: ' + a_votes);
    console.log('b_votes: ' + b_votes);

    refresh_vote(post_id);
}

function did_vote_a(post_id){
    const a_votes = get_a_votes();
    console.log('a');
    return a_votes.includes(post_id);
}

function did_vote_b(post_id){
    const b_votes = get_b_votes();
    return b_votes.includes(post_id);
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
        a_style(post_id);
    }
    for(var i = 0; i < b_votes.length; i++){
        post_id = b_votes[i];
        b_style(post_id);
    }
}

function refresh_vote(post_id){
    const a_votes = get_a_votes();
    const b_votes = get_b_votes();

    document.getElementById('stat' + post_id + 'b').children[0].innerHTML = b_stat(post_id) + '% (' + count_b_votes(post_id) + ' votes)';
    document.getElementById('stat' + post_id + 'a').children[0].innerHTML = a_stat(post_id) + '% (' + count_a_votes(post_id) + ' votes)';
}

function a_style(post_id){
    document.getElementById('post' + post_id + 'a').style.borderTop = "8px solid #FFCB14";
    document.getElementById('post' + post_id + 'a').style.borderRight = "6px solid #FFCB14";
    document.getElementById('post' + post_id + 'a').style.borderBottom = "8px solid #FFCB14";
    document.getElementById('post' + post_id + 'a').style.borderLeft = "6px solid #FFCB14";
    document.getElementById('post' + post_id + 'a').style.opacity = "1";
    document.getElementById('post' + post_id + 'b').style.border = "none";
    document.getElementById('post' + post_id + 'b').style.opacity = "0.5";
}

function b_style(post_id){
    document.getElementById('post' + post_id + 'b').style.borderTop = "8px solid #FFCB14";
    document.getElementById('post' + post_id + 'b').style.borderRight = "6px solid #FFCB14";
    document.getElementById('post' + post_id + 'b').style.borderBottom = "8px solid #FFCB14";
    document.getElementById('post' + post_id + 'b').style.borderLeft = "6px solid #FFCB14";
    document.getElementById('post' + post_id + 'b').style.opacity = "1";
    document.getElementById('post' + post_id + 'a').style.border = "none";
    document.getElementById('post' + post_id + 'a').style.opacity = "0.5";
}

function a_default(post_id){
    document.getElementById('post' + post_id + 'a').style.border = "none";
    document.getElementById('post' + post_id + 'a').style.opacity = "1";
}

function b_default(post_id){
    document.getElementById('post' + post_id + 'b').style.border = "none";
    document.getElementById('post' + post_id + 'b').style.opacity = "1";
}
