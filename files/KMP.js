/**
 * Created by adminpc on 18/7/8.
 */

// str2是否是str1的子串，且返回开始位置，KMP算法
class KMP
{
    constructor(){}
    static new(...args) {return new this(...args)}
    getIndex(str1, str2)
    {
        let nexts = this.getNext(str2)
        let i1 = 0
        let i2 = 0
        while(i1 < str1.length && i2 < str2.length)
        {
            if(str2[i2] == str1[i1])
            {
                // 相等后向后移动
                i1++
                i2++
            } else if(nexts[i2] == -1)
            {
                // i2回到开头
                i1++
            } else {
                // 移位，错过前缀相比较
                i2 = nexts[i2]
            }
        }
        // 遍历完i1后，看i2是否完全匹配到了
        return i2 == str2.length ? i1-i2 : -1
    }
    // 获得特定位置前面前缀等于后缀的最大长度
    getNext(str2)
    {
        if(str2.length == 1) {return [-1,]}
        let nexts = []
        nexts[0] = -1
        nexts[1] = 0
        // cur代表着前缀和后缀相等的地方
        let cur = 0
        let i = 2
        while(i < str2.length)
        {
            if(str2[cur] == str2[i-1])
            {
                // i-1位置和前面一样
                nexts[i++] = ++cur
            } else if(cur > 0)
            {
                // 前面还有匹配
                cur = nexts[cur]
            } else {
                // 前面没有匹配了
                nexts[i++] = 0
            }
        }
        return nexts
    }
}

let log = console.log.bind(console)

let _main = function () {
    let k = KMP.new()
    let n = [1, 2, 3, 1, 2, 3, 4,]
    let r = k.getNext(n)
    log(r)
}
_main()













