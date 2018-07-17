/**
 * Created by adminpc on 18/7/11.
 */

// 给定数组和目标和，求最长子数组的所有元素和是目标和
class LongestSumArray
{
    constructor() {}
    static new(...args) {return new this(...args)}
    sumLength(ary, aimSum)
    {
        let resMap = []
        let sum = 0
        let len = 0
        resMap[0] = -1
        for(let i = 0; i < ary.length; i++)
        {
            sum += ary[i]
            if(resMap[sum-aimSum] != null)
            {
                len = Math.max((i - resMap[sum-aimSum]), len)
            }
            if(resMap[sum] == null)
            {
                resMap[sum] = i
            }
        }
        return len
    }
    mostEOR(ary)
    {
        let eor = 0
        // 存每一位0的个数
        let count = []
        // 存每一个位置运算结果
        let eorMap = []
        // JS数组长度不设置不能自动伸展
        eorMap.length = ary.length
        for(let c = 0; c < ary.length; c++) {count[c] = 0}
        let res = 0
        // 把-1放进去
        eorMap[0] = -1
        for(let i = 0; i < ary.length; i++)
        {
            // 最后一位是0则是上一位个数+1，
            // 最后一位是不是0，则是找到第K位是sum的或者就是上一位个数
            eor ^= ary[i]
            if(eorMap[eor] != null)
            {
                let pre = eorMap[eor]
                count[i] = pre == -1 ? 1 : (count[pre] + 1)
            }
            if(i > 0)
            {
                // 不是0的时候，要比较大小
                count[i] = Math.max(count[i-1], count[i])
            }
            eorMap[eor] = i
            // 记录最大的值
            res = Math.max(res, count[i])
        }
        return res
    }
}
let log = console.log.bind(console)
let _main = function () {
    let l = LongestSumArray.new()
    let n = [3, 0, 0, 1,]
    let r = l.mostEOR(n)
    log(r)
}
_main()
