/**
 * Created by adminpc on 18/7/14.
 */

// 最大异或值
class Node
{
    constructor()
    {
        this.nextNodes = []
    }
    static new(...args) {return new this(...args)}
}

class TriTree
{
    constructor()
    {
        this.head = Node.new()
    }
    static new(...args) {return new this(...args)}
    addNum(num)
    {
        let s = this
        // 对象里面变量一个改变另一个也变
        let cur = s.head
        // 每一个数字有32位组成，头部是正负
       for(let i = 31; i >= 0; i--)
       {
           // 将二进制右移，找到对应的位置，&1的话只留下当前位置
           let n = ((num >> i) & 1)
           // 看树有没有这个通路
           cur.nextNodes[n] = cur.nextNodes[n] == null ? Node.new() : cur.nextNodes[n]
           // 往下一层走
           cur = cur.nextNodes[n]
       }
    }
    // 传入之前的最大值eor
    maxEor(eor)
    {
        let s = this
        let cur = s.head
        let res = 0
        for(let move = 31; move >= 0; move--)
        {
            let site = (eor >> move) & 1
            // a^b=c =>> a^c=b
            // 头部的话，相同结果才大；其他位置，不同结果大
            let best = move == 31 ? site : (site^1)
            // 判断是否能选到理想值
            best = cur.nextNodes[best] == null ? (best^1) : best
            // 将两个结果运算后，进行位移动，然后通过|运算，使得原位置的0没有干扰
            res |= ((site ^ best) << move)
            cur = cur.nextNodes[best]
        }
        return res
    }
}


class MaxEor
{
    constructor() {}
    static new(...args) {return new this(...args)}
    process(ary)
    {
        if(ary.length == 0 || ary.length == null) {return 0}
        let s = this
        let t = TriTree.new()
        t.addNum(0)
        let eor = 0
        let max = Number.MIN_VALUE
        for(let i = 0; i < ary.length; i++)
        {
            // 计算前面的eor值
            eor ^= ary[i]
            max = Math.max(max, t.maxEor(eor))
            t.addNum(ary[i])
        }
        return max
    }
}

let log = console.log.bind(console)

let _main = function () {
    let a = [1, 2, 3, 4]
    let m = MaxEor.new()
    let r = m.process(a)
    // log(r)
}
_main()





