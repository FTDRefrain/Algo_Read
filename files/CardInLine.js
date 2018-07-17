/**
 * Created by adminpc on 18/7/15.
 */

// 翻牌子问题
class CardInLine
{
    constructor(ary)
    {
        this.i = 0
        this.j = ary.length-1
        this.ary = ary
    }
    static new(...args) {return new this(...args)}
    process()
    {
        let s = this
        if(s.ary.length == 0) {return 0}
        return Math.max(s.firstWay(0, s.ary.length-1), s.secondWay(0, s.ary.length-1))
    }
    // i代表左边界，j代表右边界
    firstWay(i, j)
    {
        let s = this
        if(i == j) {return s.ary[i]}
        // 先手的话，返回左边加上后手另一边和最大的
        return Math.max(s.ary[i] + s.secondWay(i+1, j), s.ary[j] + s.secondWay(i, j-1))
    }
    secondWay(i, j)
    {
        let s = this
        if(i == j) { return 0}
        // 后手的话，留的就是下一步先手最小的
        return Math.min(s.firstWay(i+1, j), s.firstWay(i, j-1))
    }
}
let log = console.log.bind(console)
let _main = function () {
    let a = [1, 40, 5, 7,]
    let c = CardInLine.new(a)
    log(k)
}
_main()