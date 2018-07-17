/**
 * Created by adminpc on 18/7/10.
 */
/*一座环形岛，高度存在数组里面，
问从一个岛能看到另一个岛的所有可能性；*/
class Site
{
    constructor(val)
    {
        // 用来存该位置的坐标和出现的次数
        this.time = 1
        this.val = val
    }
    static new(...args) {return new this(...args)}
}

class Mount
{
    // 环形岛问题
    constructor() {}
    static new(...args) {return new this(...args)}
    communication(ary)
    {
        let stack = []
        let s = this
        let res = 0
        // 先把最大值压进去
        let maxIndex = this.getMax(ary)
        let index = maxIndex + 1
        stack.push(Site.new(index))
        while (index != maxIndex)
        {
            // 压栈操作
            while (stack.length != 0 && ary[index] > ary[stack[stack.length-1].val])
            {
                let aim = stack.pop()
                let times = aim.time
                if(times == 1)
                {
                    res += 2 * times
                } else {
                    // 左右两端和C42
                    res += (times * (times + 3)) / 2
                }
            }
            if(ary[index] == ary[stack[stack.length-1].val])
            {
                // 出现相同的值，time++
                stack[stack.length-1].time++
            } else {
                stack.push(Site.new(index))
            }
            // index下滑
            index = s.indexJudge(ary.length, index)
        }
        while (stack.length != 0)
        {
            let aim = stack.pop()
            let times = aim.time
            // C42先加上
            res += times * (times-1) / 2
            if(stack.length != 0)
            {
                // 倒数第二个
                res += times
                if(stack.length > 1)
                {
                    // 倒数第三个以上
                    res += times
                } else {
                    // 倒数第二个要根据倒数第一判断
                    res += stack[0].time == 1 ? 0 : times
                }
            }
        }
        return res
    }
    indexJudge(size, i)
    {
        // 环形判断
        return i < size - 1 ? (i+1) : 0
    }
    getMax(ary)
    {
        let res = 0
        for(let i = 0; i < ary.length; i++)
        {
            // 取的最大值
            res = ary[res] >= ary[i] ? res : i
        }
        return res
    }
}
let log = console.log.bind(console)

let _main = function () {
    let m = Mount.new()
    let a = [1, 2, 2, 5, 4,]
    let r = m.communication(a)
    log(r)
}
// _main()
