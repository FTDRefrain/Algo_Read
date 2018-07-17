/**
 * Created by adminpc on 18/7/1.
 */
// 复制带有随机指针的链表
class Node
{
    constructor(val, next, rand)
    {
        this.value = val
        this.next = next
        this.rand = rand
    }
    static new(...args)
    {
        return new this(...args)
    }
}

class CopyListRand
{
    constructor(n)
    {
        this.linkList = n
        this.map = {}
    }
    copyList()
    {
        let s = this
        let cur = s.linkList
        while(cur != null)
        {
            s.map[cur] = Node(cur.value)
            cur = cur.next
        }
        cur = s.linkList
        while(cur != null)
        {
            s.map[cur].next = s.map[cur.next]
            s.map[cur].rand = s.map[cur.rand]
            cur = cur.next
        }
        return s.map[s.linkList]
    }


}

class CopyListRand2
{
    constructor(n)
    {
        this.linkList = n
        this.map = {}
    }
    copyList()
    {
        let s = this
        let cur = s.linkList
        while(cur != null)
        {
            let tmp = cur.next
            let co = Node.new(cur.value)
            cur.next = co
            co.next = tmp
            cur = cur.next.next
        }
        cur = s.linkList
        let curCopy = Node.new(cur.next.value)
        while(cur != null)
        {
            curCopy.next = cur.next.next == null ? null : cur.next.next.next
            curCopy.rand = cur.rand == null ? null : cur.rand.next
            cur.next = cur.next.next
            cur = cur.next.next
        }
        return curCopy
    }
}

let log = console.log.bind(console)














