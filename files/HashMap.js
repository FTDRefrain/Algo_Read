/**
 * Created by adminpc on 18/7/4.
 */

// 给定一堆值，实现get remove getRand方法
class RemoveAndRand
{
    constructor()
    {
        this.map1 = {}
        this.map2 = {}
        this.size = 0
    }
    static new(...args) {return new this(...args)}
    put(key)
    {
        this.map1[key] = this.size
        this.map2[this.size] = key
        this.size++
    }
    // 两个hash并且配合数字，使得严格随机
    getRand()
    {
        let r = Math.floor(Math.random() * this.size)
        return this.map2[r]
    }
    // 从值找到键，删除后，将最后一位补充进来，删除最后一位
    remove(key)
    {
        let num = this.map1[key]
        this.map2[num] = this.map2[this.size - 1]
        this.size--
    }
}

let log = console.log.bind(console)

let _main = function () {
    let  t = RemoveAndRand.new()
    t.put('1')
    t.put('2')
    t.remove('1')
    log(t.getRand())
}
// _main()



