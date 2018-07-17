/**
 * Created by adminpc on 18/7/9.
 */
// 字符串中最长的回文序列
class Manacher
{
    constructor() {}
    static new(...args) {return new this(...args)}
    manaWay(str)
    {
        let s = this
        str = this.manaStr(str)
        let pAry = []
        let c = -1
        let R = -1
        let max = 0
        for(let i = 0; i != str.length; i++)
        {
            // 记录每一位的回文半径
            // i在R里面的时候，只有自己；在外面的时候，边界选择问题
            pAry[i] = R > i ? Math.min(pAry[(2 * c - i)], R-i) : 1
            // 确定两个边界没有出去
            while (i + pAry[i] <= str.length && i-pAry[i] > -1)
            {
                // 回文延长
                if(str[i+pAry[i]] == str[i-pAry[i]])
                {
                    pAry[i]++
                } else {
                    break
                }
            }
            // 回文半径变化
            if(i + pAry[i] > R)
            {
                R = i + pAry[i]
                c = i
            }
            max = Math.max(pAry[i], max)
        }
        // 去掉添加的#位置
        return max - 1
    }
    manaStr(str)
    {
        if(str == null) {return}
        let str2 = ''
        for(let i = 0; i < str.length; i++)
        {
            str2 += '#' + str[i]
        }
        str2 += '#'
        return str2
    }
}

let log = console.log.bind(console)


let _main = function () {
    let m = Manacher.new()
    let n = 'abcacba'
    let r = m.manaWay(n)
    log(r)
}
_main()




















