class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a -b)

        let res = []

        for(let i = 0; i < nums.length; i++){
            if(nums[i] == nums[i -1]){
                continue
            }

            let target = -1 * nums[i]
            let m = i  + 1
            let r = nums.length - 1 

            while ( m < r){ 
                let sum = nums[m] + nums[r]

                if( sum < target){
                    m++
                } else if ( target < sum){
                    r--
                }else if (target == sum){
                    res.push([nums[i], nums[m], nums[r]])
                    m++
                    r--

                    while ( m<r && nums[m] == nums[m-1]){
                        m++
                    }

                    while ( m < r && nums[r] == nums[r+1]){
                        r--
                    }
                }
            }
            
        }
        return res 

    }
}
