/**
 * Created by adminpc on 18/7/2.
 */
class Node
{
    constructor(n)
    {
        this.name = n
        this.link = null
        this.left = null
        this.right = null
    }
    static new(...args)
    {
        return new this(...args)
    }
}

class Stack
{
    constructor()
    {
        this.maxHead = new Node()
        this.maxHead = null
    }
    static new()
    {
        return new this()
    }
    isEmpty()
    {
        return this.maxHead == null
    }

    push(i)
    {
        this.oldNode = this.maxHead
        this.maxHead = new Node()
        this.maxHead.name = i
        this.maxHead.link = this.oldNode
    }
    pop()
    {
        let i = this.maxHead.name
        this.maxHead = this.maxHead.link
        return i
    }
}
// 二叉树的先，中，后序遍历
class TreeInorder
{
    constructor(n)
    {
        this.tree = n
        this.stack = Stack.new()
    }
    static new(...args)
    {
        return new this(...args)
    }
    inOrderRecursive(tree)
    {
        let s = this
        if(tree == null) {return}
        // log(s.tree.name) 先序
        s.inOrderRecursive(tree.left)
        // log(s.tree) 中序
        s.inOrderRecursive(tree.right)
        // log(s.tree) 后序
    }
    preInorderStack()
    {
        let s = this
        let tree = s.tree
        if(tree != null)
        {
            s.stack.push(tree)
            while(!s.stack.isEmpty())
            {
                tree = s.stack.pop()
                log(tree.name)
                if(tree.right != null) {s.stack.push(tree.right)}
                if(tree.left != null) {s.stack.push(tree.left)}
            }
        }
    }
    inorderStack()
    {
        let s = this
        let tree = s.tree
        while(!s.stack.isEmpty() || tree != null)
        {
            // 先压入左边
            if(tree != null)
            {
                s.stack.push(tree)
                tree = tree.left
            } else {
                tree = s.stack.pop()
                log(tree.name)
                tree = tree.right
            }
        }

    }
    postInorderStack()
    {
        let s = this
        let tree = s.tree
        let aux = Stack.new()
        if(tree != null)
        {
            s.stack.push(tree)
            while(!s.stack.isEmpty())
            {
                tree = s.stack.pop()
                aux.push(tree)
                if(tree.left != null) {s.stack.push(tree.left)}
                if(tree.right != null) {s.stack.push(tree.right)}
            }
        }
        while(!aux.isEmpty())
        {
            let a = aux.pop()
            log(a)
        }
    }
}
// 二叉树的序列化和反序列化
class TreeTrans
{
    constructor(n)
    {
        this.tree = n
        this.aux = n
    }
    static new(...args) {return new this(...args)}

    serialBy(head)
    {
        let s = this
        let str = ''
        let aux = head
        if(aux == null) {return '#!'}
        str = aux.name + '!'
        str += s.serialBy(aux.left)
        str += s.serialBy(aux.right)
        return str
    }
    reSerialBy(n)
    {
        let s = this
        s.ary = []
        for(let i = 0; i < n.length; i = i+2)
        {
            s.ary[i/2] = n[i]
        }
        s.i = 0
        let r = this.reOrder()
        return r
    }
    reOrder()
    {
        let s = this
        // 用全局变量调出，也可用队列弹出
        let headVal = s.ary[s.i++]
        if(headVal == '#') {return null}
        let tree = Node.new(headVal)
        tree.left = s.reOrder()
        tree.right = s.reOrder()
        return tree
    }

}
// 判断是否为平衡二叉树
class BalanceTree
{
    constructor() {}
    static new(...args) {return new this(...args)}
    balance(head)
    {
        if(head == null) {return [true, 0]}
        let s = this
        let aryLeft = s.balance(head.left)
        if(!aryLeft[0]) {return [false, 0]}
        let aryRight = s.balance(head.right)
        if(!aryRight[0]) {return [false, 0]}
        if(Math.abs(aryRight[1] - aryLeft[1]) > 1) {return [false, 0]}
        return [true, Math.max(aryLeft[1], aryRight[1]) + 1]
    }
}
// 判断是否为完全二叉树
class IsCBT
{
    constructor() {}
    static new(...args) {return new this(...args)}
    judging(head)
    {
        let ary = []
        ary.push(head)
        let leaf = false
        while(ary.length != 0)
        {
            head = ary.pop()
            let l = head.left
            let r = head.right
            if((l == null && r != null) || (leaf && (l != null || r != null))) {return false}
            if(l != null) {ary.push(l)}
            if(r != null) {ary.push(r)} else {leaf == true}
        }
        return true
    }
}
// 小于O(N)返回完全二叉树的节点个数
class NodeNum
{
    constructor() {}
    static new(...args) {return new this(...args)}
    setup(head)
    {
        let s = this
        if(head == null) {return 0}
        s.numCount(head, 1, s.highCheck(head, 1))
    }
    numCount(head, level, high)
    {
        if(level == high) {return 1}
        let s = this
        // 看右边是否为满二叉树
        if(s.highCheck(head.right, high + 1) == high)
        {
            // 不是，左边计算完
            return ((1 << (high-level)) + s.numCount(head.right, level+1, high))
        } else {
            // 是，右边计算完
            return ((1 << (high-level-1)) + s.numCount(head.left, level+1, high))
        }


    }
    highCheck(head, h)
    {
        while(head != null)
        {
            head = head.left
            h++
        }
        return h
    }
}


let log = console.log.bind(console)

let _main = function () {
    let a = Node.new('1')
    let b = Node.new('2')
    let c = Node.new('3')
    let d = Node.new('4')
    let e = Node.new('5')
    a.left = b
    a.right = c
    b.left = d
    b.right = e

}
// _main()

let t = function () {
    let n = []
    log(n.length == 0)
}
t()




