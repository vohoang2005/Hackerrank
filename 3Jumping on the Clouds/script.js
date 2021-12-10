function jumpingOnClouds(c) {
    // Write your code here
    let jumped = 0;
    for (let i = 0; i < c.length - 1; i++) {
        if (c[i + 2] === 0)i++;
            jumped++
    }
    return jumped;
}
