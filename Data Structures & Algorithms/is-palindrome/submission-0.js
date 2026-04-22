class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while(l<r){
            while (l < r && !this.isAplhaNumeric(s[l])){
                l++
            }

            while(r > l && !this.isAplhaNumeric(s[r])){
                r--
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()){
                return false
            }
            l++
            r--
        }
        return true
    }

    isAplhaNumeric(char){
        return(
        (char >= 'a' && char <= 'z')||
        (char >= 'A' && char <= 'z')||
        (char >= '0' && char <= '9')
        )
}

}


