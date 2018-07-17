/**
 * Created by adminpc on 18/7/12.
 */

/*公司的上下级关系是多叉树，直属上司来，则人不来，
每个人有最大活跃度，求整体最大的活跃度*/

class Node
{
    constructor(val)
    {
        this.val = val
        this.list = []
    }
    static new(...args) {return new this(...args)}
}

class TreeType
{
    constructor(comeRes, uncomeRes)
    {
        this.comeRes = comeRes
        this.uncomeRes = uncomeRes
    }
    static new(...args) {return new this(...args)}
}

class MaxHappy
{
    constructor() {}
    static new(...args) {return new this(...args)}
    process(head)
    {
        if(head == null)
        {
            return TreeType.new(0, 0)
        }
        let s = this
        let comeRes = head.val
        let uncomeRes = 0
        for(let i = 0; i < head.list.length; i++)
        {
            let child = s.process(head.list[i])
            let cComeRes = child.comeRes
            let cUnComeRes = child.uncomeRes
            comeRes += cUnComeRes
            uncomeRes += Math.max(cComeRes, cUnComeRes)
        }
        return TreeType.new(comeRes, uncomeRes)

    }
}

let log = console.log.bind(console)

let _main = function () {
    let a = Node.new(3)
    let b = Node.new(4)
    let c = Node.new(1)
    let d = Node.new(2)
    let e = Node.new(6)
    a.list[0] = b
    a.list[1] = c
    a.list[2] = d
    a.list[3] = e
    let run = MaxHappy.new()
    let r = run.process(a)
    log(r)

}
_main()




