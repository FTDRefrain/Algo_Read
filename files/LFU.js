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
    constructor(key, val, times)
    {
        this.val = val
        this.key = key
        // 一个垂直链表下的节点，有up和down两个
        this.up = null
        this.down = null
        // times用于记录操作次数
        this.times = times
    }
    static new(...args) {return new this(...args)}
}

class NodeList
{
    constructor(node)
    {
        // 垂直的双向链表，拥有头和尾部
        this.head = node
        this.tail = node
        // next和last都是连接垂直双向链表的
        this.next = null
        this.last = null
    }
    static new(...args) {return new this(...args)}
    // 优先级从上到下
    addNodeToHead(newNode)
    {
        let s = this
        newNode.down = s.head
        s.head.up = newNode
        s.head = newNode
    }
    isEmpty()
    {
        return this.head == null
    }
    deleteNode(node)
    {
        // 删除链表中的一个节点，注意各个边界
        let s = this
        if(s.head = s.tail)
        {
            s.head = null
            s.tail = null
        } else if(s.head == node)
        {
            s.head = node.down
            s.head.up = null
        } else if(s.tail == node)
        {
            s.tail = node.up
            s.tail.down = null
        } else {
            node.up.down = node.down
            node.down.up = node.up
        }
        node.up = null
        node.down = null
    }
}

class LFU
{
    constructor(capacity)
    {
        // 容量
        this.capacity = capacity
        // 记录键值和节点对应的map
        this.keyNodeMap = []
        // 记录节点和链表对应的map
        this.nodeListMap = []
        // 头链表，删除的时候用
        this.headFirst = null
        // 记录本身的容量
        this.size = 0
    }
    static new(...args) {return new this(...args)}
    // 添加值
    set(key, val)
    {
        let s = this
        // 判断是否存在
        if(s.keyNodeMap[key] != null)
        {
            let node = s.keyNodeMap[key]
            node.val = val
            node.times++
            let curList = s.nodeListMap[node]
            // 移位操作
            s.move(node, curList)
        } else {
            // 判断是否超出容量
            if(s.size == s.capacity)
            {
                let node = s.headFirst.tail
                s.headFirst.deleteNode(node)
                s.modifyHeadFirst(s.headFirst)
                delete s.keyNodeMap[node.key]
                delete s.nodeListMap[node]
                s.size--
            }
            let node = Node.new(key, val, 1)
            if(s.headFirst == null)
            {
                // 头部为空，新建节点作为头部
                s.headFirst = NodeList.new(node)
            } else {
                if(s.headFirst.head.times == node.times)
                {
                    s.headFirst.addNodeToHead(node)
                } else {
                    let newHead = NodeList.new(node)
                    newHead.next = s.headFirst
                    s.headFirst.last = newHead
                    s.headFirst = newHead
                }
            }
            s.keyNodeMap[key] = node
            s.nodeListMap[node] = s.headFirst
            s.size++
        }
    }
    // 得到某点的值
    get(key)
    {
        let s = this
        if(s.keyNodeMap[key] == null)
        {
            return null
        }
        let node = s.keyNodeMap[key]
        node.times++
        let curList = s.nodeListMap[node]
        // 进行移位操作
        s.move(node, curList)
        return node.val
    }
    // 当某一个节点次数更新后的操作
    move(node, oldList)
    {
        let s = this
        // 更新后，删除该链表上的节点
        oldList.deleteNode(node)
        // 判断该链表是否被删除
        let preList = s.modifyHeadFirst(oldList) ? oldList.last : oldList
        let nextList = oldList.next
        // 各种情况的边界问题
        if(nextList == null)
        {
            let newList = NodeList.new(node)
            if(preList != null)
            {
                preList.next = newList
            }
            newList.last = preList
            if(s.headFirst == null)
            {
                s.headFirst = newList
            }
            s.nodeListMap[node] = newList
        } else {
            if(nextList.head.times == node.times)
            {
                nextList.addNodeToHead(node)
                s.nodeListMap[node] = nextList
            } else {
                let newList = NodeList.new(node)
                if(preList != null)
                {
                    preList.next = newList
                }
                nextList.last = newList
                newList.last = preList
                newList.next = nextList
                if(s.headFirst == nextList)
                {
                    s.headFirst = newList
                }
                s.nodeListMap[node] = newList
            }
        }
    }
    // 用于判断删除一个节点后是否需要删除该链表
    modifyHeadFirst(headList)
    {
        let s = this
        if(headList.isEmpty())
        {
            if(s.headFirst == headList)
            {
                // 是头结点的情况
                s.headFirst = headList.next
                if(s.headFirst != null)
                {
                    // 链表还存在
                    s.headFirst.last = null
                }
            } else {
                // 补充两边的链接
                headList.last.next = headList.next
                headList.next.last = headList.last
            }
            return true
        }
        return false
    }
}














