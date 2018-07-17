/**
 * Created by adminpc on 18/7/5.
 */
// 并查集
class UnionSet
{
    constructor(list)
    {
        this.setup(list)
    }
    static new(...args) {return new this(...args)}
    setup(list)
    {
        this.fatherMap = {}
        this.sizeMap = {}
        // 实现自己找自己的指针
        for(let i = 0; i < list.length - 1; i++)
        {
            this.fatherMap[list[i]] = list[i]
            this.sizeMap[list[i]] = 1
        }
    }
    findSet(node)
    {
        let s = this
        let father = s.fatherMap[node]
        // 将连接铺平
        if(father != node) {father = s.findSet(father)}
        s.fatherMap[node] = father
        return father
    }
    isSameSet(a, b)
    {
        return this.fatherMap(a) == this.fatherMap(b)
    }
    union(a, b)
    {
        if(a == null || b == null) {return}
        let asize = this.sizeMap[a]
        let bsize = this.sizeMap[b]
        let ahead = this.fatherMap[a]
        let bhead = this.fatherMap[b]
        if(this.fatherMap[a] != this.fatherMap[b])
        {
            if(asize <= bsize )
            {
                // 小树挂在大树上面
                this.fatherMap[a] = bhead
                this.sizeMap[a] = asize + bsize
            } else {
                this.fatherMap[b] = ahead
                this.sizeMap[b] = asize + bsize
            }
        }

    }
}
// 岛连接问题
class IslandCheck
{
    // 岛问题
    constructor() {}
    static new(...args) {return new this(...args)}
    numCheck(m)
    {
        let h = m[0].length
        let l = m.length
        let res = 0
        for(let p = 0; p < h; p++)
        {
            for(let q = 0; q < l; q++)
            {
                if(m[q][p] == 1)
                {
                    res++
                    this.infect(m, p, q, h, l)
                }
            }
        }
        return res
    }
    infect(m, p, q, h, l)
    {
        if(q < 0 || p < 0 || q >= l || p >= h || m[q][p] == 0) {return}
        // 将所有相连的部分改成2，之后就不用遍历
        m[q][p] = 2
        this.infect(m, p, q+1, h, l)
        this.infect(m, p, q-1, h, l)
        this.infect(m, p+1, q, h, l)
        this.infect(m, p-1, q, h, l)
    }

}


let log = console.log.bind(console)

let _main = function () {

}


