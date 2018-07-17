/**
 * Created by adminpc on 18/7/12.
 */
/*设计一种缓存结构，该结构在构造时候确定大小，
 假设大小是K，具有两个功能：
 set(key, value)：将记录的(key, value)插入
 get(key)：返回对应的值
 要求：
 set和get方法的时间复杂度是O(1)
 某个key的set和get方法一旦发生，认为这个key的记录更新
 当缓存代下超过k的时候，移除最老的记录*/

class Node
{
    constructor(val)
    {
        this.val = val
        this.next = null
        this.last = null
    }
    static new(...args) {return new this(...args)}
}

class DoubleLink
{
    // 构造双向链表，做到头出，结尾记录最新节点
    constructor()
    {
        this.head = null
        this.tail = null
    }
    static new(...args) {return new this(...args)}
    addNode(node)
    {
        // 添加节点，注意边界
        if(node == null) {return}
        if(this.head == null)
        {
            this.head = node
            this.tail = head
        } else {
            this.tail.next = node
            node.last = this.tail
            this.tail = node
        }
    }
    moveNodeToTail(node)
    {
        // 将节点移到尾部
        if(this.tail == node) {return}
        if(node == this.head)
        {
            this.head = node.next
            this.head.last = null
        } else {
            node.last.next = node.next
            node.next.last = node.last
        }
        this.tail.next = node
        node.last = this.tail
        this.tail = node
        this.tail.next = null
    }
    removeHead()
    {
        // 移除头部
        if(this.head == null) {return null}
        let res = this.head
        if(this.head == this.tail)
        {
            this.head = null
            this.tail = null
        } else {
            this.head = res.next
            this.head.last = null
        }
        res.next = null
        return res
    }
}


class LRU
{
    constructor(capacity)
    {
        // 用key找节点
        this.keyNodeMap = []
        // 用节点找key
        this.nodeKeyMap = []
        // 容量
        this.capacity = capacity
        // 双向链表
        this.doubleLink = DoubleLink.new()
    }
    static new(...args) {return new this(...args)}
    get(key)
    {
        let s = this
        if(s.keyNodeMap[key] != null)
        {
            s.doubleLink.moveNodeToTail(s.keyNodeMap[key])
            return s.keyNodeMap[key].val
        }
        return null
    }
    set(key, val)
    {
        let s = this
        if(s.keyNodeMap[key] != null)
        {
            s.keyNodeMap[key].val = val
            s.doubleLink.moveNodeToTail(s.keyNodeMap[key])
        } else {
            let newNode = Node.new(val)
            s.keyNodeMap[key] = newNode
            s.nodeKeyMap[newNode] = key
            s.doubleLink.addNode(newNode)
            if(s.keyNodeMap.length == s.capacity+1)
            {
                // 超出容量的时候，删除
                s.removeUnused()
            }
        }
    }
    removeUnused()
    {
        let s = this
        let lastNode = s.doubleLink.removeHead()
        let nodeKey = s.nodeKeyMap[lastNode]
        delete s.keyNodeMap[nodeKey]
        delete s.nodeKeyMap[lastNode]
    }
}

let log = console.log.bind(console)


let _main = function () {

}
_main()


























