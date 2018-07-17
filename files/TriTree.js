/**
 * Created by adminpc on 18/7/5.
 */
// 前缀字典树
class TriNode
{
    constructor()
    {
        this.path = 0
        this.end = 0
        this.nexts = []
    }
    static new(...args) {return new this(...args)}
}

class TriTree
{
    constructor()
    {
        this.maxHead = TriNode.new()
    }
    static new(...args) {return new this(...args)}
    addString(str)
    {
        if(str == null) {return}
        let node = this.maxHead
        for(let i = 0; i < str.length; i++)
        {
            // 对于不同的字母设置不同的通道
            let r = str.charCodeAt(i) - 'a'.charCodeAt('0')
            if(node.nexts[r] == null)
            {
                // 添加新节点
                node.nexts[r] = TriNode.new()
            }
            node = node.nexts[r]
            // 路过路径，路径+1
            node.path++
        }
        // 结尾处+1
        node.end++
    }
    // 搜索目标插入次数
    searchStr(str)
    {
        if(str == null) {return 0}
        let node = this.maxHead
        for(let i = 0; i < str.length; i++)
        {
            let r = str.charCodeAt(i) - 'a'.charCodeAt('0')
            if(node.nexts[r] == null)
            {
                return 0
            }
            node = node.nexts[r]
        }
        return node.end
    }
    deleteStr(str)
    {
        if(this.searchStr(str) == null) {return}
        let node = this.maxHead
        for(let i = 0; i < str.length; i++)
        {
            let r = str.charCodeAt(i) - 'a'.charCodeAt('0')
            // 某一点减完后，path为0则删除后面所有
            if(--node.nexts[r].path == 0)
            {
                node.nexts[r] = null
                return
            }
            node = node.nexts[r]
        }
        node.end--
    }
    // 搜索前缀
    preFix(str)
    {
        if(str == null) {return 0}
        let node = this.maxHead
        for(let i = 0; i < str.length; i++)
        {
            let r = str.charCodeAt(i) - 'a'.charCodeAt('0')
            // 某一点减完后，path为0则删除后面所有
            if(node.nexts[r] == 0)
            {
                return 0
            }
            node = node.nexts[r]
        }
        return node.path
    }


}

let log = console.log.bind(console)

let _main = function () {
    let t = TriTree.new()
    let a = 'asd'
    t.addString(a)
    log(t.maxHead)
}
// _main()

let _test = function () {
    let n = 'asd'
    let k = 'b'.charCodeAt('0') - 'a'.charCodeAt('0')
    log(k)
}
// _test()
