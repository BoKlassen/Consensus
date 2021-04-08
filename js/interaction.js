function a_stat(post_id){
    const a = count_a_votes(post_id);
    const b = count_b_votes(post_id);
    if(a == 0 && b == 0) return 0;
    const res = Math.round(100*a/(a + b));
    console.log(res);
    return res;
}

function b_stat(post_id){
    const a = count_a_votes(post_id);
    const b = count_b_votes(post_id);
    if(a == 0 && b == 0) return 0;
    return 100 - a_stat(post_id);
}

function count_a_votes(post_id){
    const posts = post_list();
    if(did_vote_a(post_id)){
        return posts[post_id].a + 1;
    }
    return posts[post_id].a;
}

function count_b_votes(post_id){
    const posts = post_list();
    if(did_vote_b(post_id)){
        return posts[post_id].b + 1;
    }
    return posts[post_id].b;
}
