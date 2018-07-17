/**
 * Created by adminpc on 18/7/7.
 */
// 塔罗牌递归
class TaLuoPai
{
    constructor() {}
    static new(...args) {return new this(...args)}
    process(n, from, to, help)
    {
        let s = this
        if(n == 1)
        {
            log('move ' + n + ' from ' + from + ' to ' + to)
        } else {
            // 将n-1作为一个整体，从from移动到help
            s.process(n-1, from, help, to)
            // 将n从from移动到to
            log('move ' + n + ' from ' + from + ' to ' + to)
            // 将n-1从help移动到to
            s.process(n-1, help, to, from)
        }
    }
}

class SeqPrint
{
    constructor() {}
    static new(...args) {return new this(...args)}
    // 字符串子集打印问题
    printSeq(str, i, res)
    {
        let s = this
        if(i == str.length) {log(res);return}
        // 每一个位置出现或者不出现，从头开始递归
        s.printSeq(str, i+1, res)
        s.printSeq(str, i+1, res + str[i])
    }
    // 字符串所有顺序问题
    randSeq(str, start, end)
    {
        let s = this
        if(start == end) {log(str); return}
        // 字符串的所有排序，将首位和后面交换
        for(let i = start+1; i < end; i++)
        {
            s.swapWay(str, start, i)
            s.randSeq(str, start+1, end)
            s.swapWay(str, i, start)
        }

    }
    swapWay(ary, p, q)
    {
        let tmp = ary[p]
        ary[p] = ary[q]
        ary[q] = tmp
    }
}
// 矩阵最小路径问题
class SmallRoute
{
    constructor() {}
    static new(...args) {return new this(...args)}
    // 暴力枚举
    walk(matrix, p, q)
    {
        let s = this
        // 到最后一个点，返回该值
        if((p == matrix.length - 1) && (q == matrix[0].length - 1)) {return matrix[p][q]}
        if(p == matrix.length - 1)
        {
            // 到底部，返回该值+右边的和
            return matrix[p][q] + s.walk(matrix, p, q+1)
        }
        if(q == matrix[0].length - 1)
        {
            // 到右边界，返回该值+下边的和
            return matrix[p][q] + s.walk(matrix, p+1, q)
        }
        let right = s.walk(matrix, p+1, q)
        let down = s.walk(matrix, p, q+1)
        // 返回该值+左边和右边中小的那个
        return matrix[p][q] + Math.min(right, down)
    }
}
// 数组中的元素组合是否能做到和是给定值
class AimCount
{
    constructor() {}
    static new(...args) {return new this(...args)}
    aimCount(ary, i, sum, aim)
    {
        let s = this
        // 终止条件
        if(i == ary.length) {return sum==aim}
        // 返回值只能是是否存在，使用||来判断
        return s.aimCount(ary, i+1, sum, aim) || s.aimCount(ary, i+1, sum+ary[i], aim)
    }
}


let log = console.log.bind(console)

let _main = function () {
    let a = AimCount.new()
    let n = [1, 3, 2, 7, 9,]
    log(a.aimCount(n, 0, 0, 22))
}
_main()


