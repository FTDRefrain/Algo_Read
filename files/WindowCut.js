/**
 * Created by adminpc on 18/7/9.
 */
// 生成窗口最大值数组
class WindowCut
{
    constructor() {}
    static new(...args) {return new this(...args)}
    getWinCut(ary, w)
    {
        let s = this
        let num = 0
        let res = []
        let qMax = []
        for(let i = 0; i < ary.length; i++)
        {
            // 将最后一位和当前位置比较
            while(ary[qMax[qMax.length-1]] <= ary[i] && (qMax.length != 0))
            {
                // 小于则弹出
                qMax.pop()
            }
            qMax.push(i)
            // window的头是否过了首位
            if(qMax[0] == i - w)
            {
                qMax.shift()
            }
            // 当前位置过了窗户长度，开始记录结果
            if(i >= w-1)
            {
                res[num++] = ary[qMax[0]]
            }
        }
        return res
    }
}
/*给定数组和目标数，求所有子数组，
使得子数组的最大值减去最小值小于目标O(N)*/
class AryCount
{
    constructor() {}
    static new(...args) {return new this(...args)}
    countArray(ary, aim)
    {
        let qmin = []
        let qmax = []
        let L = 0
        let R = 0
        let res = 0
        while (L < ary.length)
        {
            // 先扩展右边界
            while (R < ary.length)
            {
                while (ary[R] <= ary[qmin[qmin.length-1]] && (qmin.length != 0))
                {
                    // 存最小值
                    qmin.shift()
                }
                qmin.push(R)
                while (ary[R] >= ary[qmax[qmax.length-1]] && (qmax.length != 0))
                {
                    // 存最大值
                    qmax.shift()
                }
                qmax.push(R)
                // 排除错误结果
                if(ary[qmax[0]] - ary[qmin[0]] > aim)
                {
                    break
                }
                R++
            }
            // 左边界控制
            if(qmin[0] == L)
            {
                qmin.shift()
            }
            if(qmax[0] == L)
            {
                qmax.shift()
            }
            // 存下固定开头的数组数量
            res += R-L
            L++
        }
        return res
    }
}

let log = console.log.bind(console)

let _main = function () {
    let w = AryCount.new()
    let a = [1, 2, 7, 3, 4, 4, 6,]
    let c = w.countArray(a, 3)
    log(c)
}
_main()