/**
 * Created by adminpc on 18/7/16.
 */

// 环形链表，约瑟夫报数问题
class JohnKill
{
    constructor(ary, m)
    {
        this.ary = ary
        this.m = m
    }
    static new(...args) {return new this(...args)}
    process()
    {
        let s = this
        let c = s.ary.length
        // 找到砍掉的位置
        let r = s.getKill(s.ary.length, s.m)
        返回活下的位置
        return s.getLive(c, r)
    }
    getLive(n, r)
    {
        let s = this
        if(n == 1) {return 1}
        let oldIndex = (s.getLive(n-1) - 1 + r) % r + 1
        return oldIndex
    }
    getKill(x, m)
    {
        let s = this
        let r = (x-1) % m + 1
        return r
    }
}

let log = console.log.bind(console)
let _main = function () {
    let a = [1, 2, 3, 4,]
    let j = JohnKill.new(a, 2)
    let r = j.process()
    log(r)
}
_main()