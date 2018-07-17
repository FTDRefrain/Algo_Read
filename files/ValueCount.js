/**
 * Created by adminpc on 18/7/13.
 */

// 给定带括号的公式字符串，计算
class ValueCount
{
    // 公式计算，有问题
    constructor() {}
    static new(...args) {return new this(...args)}
    valueWay(str, i)
    {
        // 两个数的计算结果
        let pre = 0
        // 存放之前的内容
        let que = []
        let tmpRes = 0
        let s = this
        while (i < str.length && str[i] != ')')
        {
            if(str[i] >= '0' && str[i] <= '9')
            {
                pre = Number(pre*10) + Number(str[i])
            } else if(str[i] != '(')
            {
                // + - * /的情况
                s.addNum(que, pre)
                que.push(str[i++])
                pre = 0
            } else {
                tmpRes = s.valueWay(str, i+1)
                pre = tmpRes[0]
                i = tmpRes[1] + 1
            }
        }
        s.addNum(que , pre)
        return [s.getNum(que), i]
    }
    addNum(que, pre)
    {
        if(que != null)
        {
            if(que[que.length-1] == '*')
            {
                let c = que.pop()
                c = que.pop()
                pre = pre * c
            }
            if(que[que.length-1] == '/')
            {
                let c = que.pop()
                c = que.pop()
                pre = Math.floor(c / pre)
            }
        }
        que.push(pre)
    }
    getNum(que)
    {
        let cur = null
        let num = 0
        let add = true
        while(que != null)
        {
            cur = que.shift()
            if(cur == '+')
            {
                add = true
            } else if(cur == '-')
            {
                add = false
            } else {
                num += add ? Number(cur) : Number(-cur)
            }
        }
        return num
    }
}

let log = console.log.bind(console)

let _main = function () {
    let c = '(-1)+4*(5+6)/(2+3)'
    let d = ValueCount.new()
    let r = d.valueWay(c, 0)
    log(r)
}
// _main()