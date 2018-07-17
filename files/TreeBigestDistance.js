/**
 * Created by adminpc on 18/7/12.
 */
// 二叉树最大路径问题
class Node
{
    constructor(val)
    {
        this.val = val
        this.right = null
        this.left = null
    }
    static new(...args) {return new this(...args)}
}

class TreeType
{
    constructor(maxDistance, h)
    {
        this.maxDistance = maxDistance
        this.h = h
    }
    static new(...args) {return new this(...args)}
}

class TreeBigestDistance
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
        let leftInfo = s.process(head.left)
        let rightInfo = s.process(head.right)
        // 用深度计算从左边经过该点到右边的最大距离
        let maxDistance = leftInfo.h + rightInfo.h + 1
        maxDistance = Math.max(Math.max(leftInfo.maxDistance, rightInfo.maxDistance), maxDistance)
        // 深度就是左右最大的加1
        let h = Math.max(leftInfo.h, rightInfo.h) + 1
        return TreeType.new(maxDistance, h)
    }
}

let log = console.log.bind(console)

let _main = function () {
    let a = Node.new('3')
    let b = Node.new('4')
    let c = Node.new('1')
    let d = Node.new('2')
    let e = Node.new('6')
    a.left = b
    a.right = c
    b.left = d
    b.right = e
    let run = TreeBigestDistance.new()
    let r = run.process(a)
    log(r)

}
// _main()




