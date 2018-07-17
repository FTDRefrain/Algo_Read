/**
 * Created by adminpc on 18/7/13.
 */
// 跳表实现
class Node
{
    constructor(val)
    {
        this.val = val
        // 用于存放每一层指向的node
        this.nextNodes = []
    }
    static new(...args) {return new this(...args)}
}

class SkipList
{
    // 跳表，没有运行过
    constructor()
    {
        // 头部的最大高度，等同于之后的最大高度
        this.maxsize = 0
        this.head = Node.new(null)
        this.head.nextNodes.push(null)
        // 设定roll值
        this.possible = 0.5
    }
    static new(...args) {return new this(...args)}
    addWay(newValue)
    {
        let s = this
        if(!s.contains(newValue))
        {
            let level = 0
            // 通过roll值设定高度
            while (Math.random() < s.possible) {level++}
            if(level > s.maxsize)
            {
                s.head.nextNodes.push(null)
                s.maxsize++
            }
            let newNode = Node.new(newValue)
            let cur = s.head
            // 先做完再减少
            do {
                cur = s.findNext(newValue, cur, level)
                // 因为level是向下减，所以往头部加
                newNode.nextNodes.unshift(cur.nextNodes[level])
                // 补上前一位的链接
                cur.nextNodes[level] = newNode
            } while (level-- > 0)
        }
    }
    deleteWay(deleteValue)
    {
        let s = this
        if(s.contains(deleteValue))
        {
            // 找到前一位
            let delNode = s.find(deleteValue)
            let cur = s.head
            let level = s.maxsize
            do{
                cur = s.findNext(deleteValue, cur, level)
                // 当高度相同的时候，改链接
                if(delNode.nextNodes.length - 1 > level)
                {
                    cur.nextNodes[level] = delNode.nextNodes[level]
                }
            } while(level-- > 0)
        }

    }
    contains(nodeValue)
    {
        let s = this
        let node = s.find(nodeValue)
        // 找到最近的，判断是不是自己
        return node != null && node.val != null && node.val == nodeValue
    }
    find(deleteValue)
    {
        let s = this
        let level = s.maxsize
        let cur = s.head
        do{
            cur = s.findNext(deleteValue, cur, level)
        } while (level-- > 0)
        return cur
    }
    // 找到最后一个比目标值小的位置
    findNext(newValue, cur, level)
    {
        let nextNode = cur.nextNodes[level]
        while (nextNode != null)
        {
            if(nextNode.val > newValue)
            {
                break
            } else {
                cur = nextNode
                nextNode = cur.nextNodes[level]
            }
        }
        return cur
    }
}