class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let len = height.length

        let maxLeft  = new Array(len).fill(0)
        maxLeft[0] = height[0]
        for(let i = 1; i < len; i++){
            maxLeft[i] = Math.max(maxLeft[i-1], height[i])
        }

        let maxRight = new Array(len).fill(0)
        maxRight[len - 1] = height[len -1]
        for (let i = len - 2; i > -1; i--){
            maxRight[i] = Math.max(maxRight[i+1], height[i])
        }

        let water = new Array(len).fill(0)
        for (let i = 0; i<len; i++){
            water[i] = Math.min(maxLeft[i], maxRight[i]) - height[i]

            if(water[i] < 0){
                water[i] = 0
            }
        }

        let total = 0
        for (let i = 0; i <len; i++){
            total += water[i]

        }
        return total
    }
}
