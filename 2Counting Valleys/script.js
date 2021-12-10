function countingValleys(n, s) {
    let currLevel = 0;
    let valleys = 0;
    
    for (let i = 0; i < s.length; i++) {
        //update the current level
        if (s[i] === 'U') {
            currLevel += 1;
            if (currLevel == 0) {
                valleys += 1;
            }
        } else {
            currLevel -= 1;
        }
        
        
    }
    
    return valleys;

}