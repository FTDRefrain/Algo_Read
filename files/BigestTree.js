/**
 * Created by adminpc on 18/7/12.
 */

// 找到二叉树中的最大搜索二叉树
class Node
{
    constructor(val)
    {
        this.value = val
        this.left = null
        this.right = null
    }
    static new(...args) {return new this(...args)}
}

class TreeInfo
{
    constructor(maxsize, node, min, max)
    {
        // 设定需要返回的信息
        this.maxsize = maxsize
        this.maxHead = node
        this.min = min
        this.max = max
    }
    static new(...args) {return new this(...args)}
}

class  BigestTree
{
    constructor() {}
    static new(...args) {return new this(...args)}
    process(head)
    {
        if(head == null)
        {
            // basecase设定
            return TreeInfo.new(0, null, Number.MAX_VALUE, Number.MIN_VALUE)
        }
        let s = this
        // 左右结果的黑盒处理
        let leftNodeInfo = s.process(head.left)
        let rightNodeInfo = s.process(head.right)
        // 解决黑盒的过程
        // 计算是否自己是最大树
        let containItself = 0
        if(leftNodeInfo.max < head.value &&
            rightNodeInfo.min > head.value &&
            leftNodeInfo.maxHead == head.left &&
            rightNodeInfo.maxHead == head.right)
        {
            containItself = rightNodeInfo.maxsize + 1 + leftNodeInfo.maxsize
        }
        // 最大节点个数，左边，右边和自己比较
        let maxsize = Math.max(Math.max(leftNodeInfo.maxsize, rightNodeInfo.maxsize), containItself)
        // 是自己这颗树，自己是最大节点，否则是左右中个数最多的那个
        let maxHead = leftNodeInfo.maxsize > rightNodeInfo.maxsize ? leftNodeInfo.maxHead : rightNodeInfo.maxHead
        if(maxsize == containItself) {maxHead = head}
        // 信息封装返回
        return TreeInfo.new(maxsize, maxHead,
            Math.min(Math.min(leftNodeInfo.min, rightNodeInfo.min), head.value),
            Math.max(Math.max(leftNodeInfo.max, rightNodeInfo.max), head.value))
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
    let run = BigestTree.new()
    let r = run.process(a)
    // log(r)

}
_main()



