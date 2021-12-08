function sockMerchant(n, ar) {
    // Write your code here\
    var res = 0;
    ar.sort();
    for(let i = 0; i < ar.length; i++) {
        if(ar[i]==ar[i+1]) {
        i += 1
            res += 1     
        }
    }
return res;
}

