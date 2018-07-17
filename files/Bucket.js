/**
 * Created by adminpc on 18/6/30.
 */

// 桶排序
class Bucket
{
    constructor(n)
    {
        this.array = n
        this.minB = []
        this.maxB = []
        this.hasB = []
    }
    static new(...args)
    {
        return new this(...args)
    }
    bucketSort()
    {
        let s = this
        let min = Number.MAX_VALUE
        let max = Number.MIN_VALUE
        // 取得数组的最值
        for(let i = 0; i < s.array.length; i++)
        {
            min = Math.min(s.array[i], min)
            max = Math.max(s.array[i], max)
        }
        if(min == max) {return; log('same')}
        // 将每个数放入对应的桶
        let bid = 0
        for(let p = 0; p < s.array.length; p++)
        {
            bid = s.bucketSet(min, max, s.array.length, s.array[p])
            s.minB[bid] = s.hasB[bid] ? Math.min(s.array[p], s.minB[bid]) : s.array[p]
            s.maxB[bid] = s.hasB[bid] ? Math.max(s.array[p], s.maxB[bid]) : s.array[p]
            s.hasB[bid] = true
        }
        // 判断跨桶之间的差值
        let res = 0
        let lastMax = s.maxB[0]
        for(let q = 1; q < s.array.length + 1; q++)
        {
            if(s.hasB[q])
            {
                res = Math.max(res, s.minB[q] - lastMax)
                lastMax = s.maxB[q]
            }
        }
        return res
    }
    // 桶的分配
    bucketSet(min, max, len, n)
    {
        return Math.floor(((n-min)*len)/(max-min))
    }
}

let log = console.log.bind(console)

let _main = function () {
    let n = [1, 2, 4, 6, 3, 10,]
    let b = Bucket.new(n)
    let r = b.bucketSort()
    log(r)
    // log(b.minB)
}
_main()














