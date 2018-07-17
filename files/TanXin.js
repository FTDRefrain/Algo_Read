/**
 * Created by adminpc on 18/7/5.
 */
// 贪心问题中的资金使用问题
class LessMoney
{
    constructor(n)
    {
        this.setup(n)
    }
    static new(...args) {return new this(...args)}
    setup(n)
    {
        n.sort(this.compareWay)
        this.moneyMain(n)
    }
    moneyMain(ary)
    {
        if(ary == null) {return}
        let pQ = []
        for(let i = 0; i < ary.length; i++) {pQ.push(ary[i])}
        let res = 0
        while(pQ.length > 1)
        {
            // 排好序的加和
            let p = pQ.shift()
            let q = pQ.shift()
            res = p + q
            pQ.unshift(res)
        }
        return pQ.shift()
    }
    // 比较器
    compareWay(a1, a2)
    {
        return a1 - a2
    }
}


