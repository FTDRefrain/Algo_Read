/**
 * Created by adminpc on 18/7/15.
 */

// 给定数组，正负不定，求小于或者等于目标的最长子数组
class MaxLength
{
    constructor(){}
    static new(...args) {return new this(...args)}
    maxProcess(ary, aim)
    {
        let s = this
        // 存该位置到最后一位的最小和
        let minCount = []
        minCount[ary.length-1] = ary[ary.length-1]
        // 最小和的index
        let minCountIndex = []
        minCountIndex[ary.length-1] = ary.length-1
        for(let i = ary.length -2; i >= 0; i--)
        {
            // 前一位是负的，加在一起
            if(minCount[i+1] < 0)
            {
                minCount[i] = ary[i] + minCount[i+1]
                minCountIndex[i] = minCountIndex[i+1]
            } else {
                minCount[i] = ary[i]
                minCountIndex[i] = i
            }
        }
        let right = 0
        let sum = 0
        let maxLength = 0
        for(let start = 0; start < ary.length; start++)
        {
            // 从0开始，跳位置
            while (right < ary.length && sum + minCount[right] <= aim)
            {
                sum += minCount[right]
                right = minCountIndex[right] + 1
            }
            // 是否有右边界，有则左缩
            sum -= right > start ? ary[start] : 0
            // 判断最长
            maxLength = Math.max(maxLength, (right-start))
            // 防止开头不动
            right = Math.max(start+1, right)
        }
        return maxLength
    }
}

let log = console.log.bind(console)

let _main = function () {
    let a = [1, 4, -7, 8,]
    let m = MaxLength.new()
    let r = m.maxProcess(a, 6)

}
_main()