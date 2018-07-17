/**
 * Created by adminpc on 18/7/10.
 */

// 最大面积的链接矩阵问题
class MaxRect
{
    constructor() {}
    static new(...args) {return new this(...args)}
    maxRectangle(ary)
    {
        let maxRes = 0
        let hArray = []
        for(let m = 0; m < ary.length; m++)
        {
            // 给出对应列号的数组
            hArray[m] = 0
        }
        let s = this
        for(let p = 0; p < ary[0].length; p++)
        {
            for(let q = 0; q < ary.length; q++)
            {
                // 每一位置，如果是1，则累计起来，不是直接是0
                hArray[q] = ary[q][p] == 1 ? hArray[q] + 1 : 0
            }
            // 对于以每一行结尾的矩阵，返回最大值
            let k = s.maxFromBottom(hArray)
            maxRes = Math.max(k, maxRes)
        }
        return maxRes
    }
    maxFromBottom(hArray)
    {
        let stack = []
        let maxRes = 0
        for(let i = 0; i < hArray.length; i++)
        {
            // 由小到大
            while (stack.length != 0 && hArray[i] <= hArray[stack[stack.length-1]])
            {
                let aim = stack.pop()
                // 左边界的确定
                let l = stack.length == 0 ? -1 : stack[0]
                // i没有结束，则i是右边界
                let curL = i-l-1
                let res = curL * hArray[aim]
                maxRes = Math.max(maxRes, res)
            }
            // 每一位的压栈
            stack.push(i)
        }
        // 出栈
        while (stack.length != 0)
        {
            let aim = stack.pop()
            let l = stack.length == 0 ? -1 : stack[0]
            // 右边界是数组长度
            let curL = hArray.length-l-1
            let res = curL*hArray[aim]
            maxRes = Math.max(maxRes, res)
        }
        return maxRes
    }
}

let log = console.log.bind(console)

let _main = function () {
    let m = MaxRect.new()
    let n = [[1, 1, 1, 1,], [0, 1, 1, 0,], [1, 0, 0, 1,],]
    let r = m.maxRectangle(n)
}
_main()
















