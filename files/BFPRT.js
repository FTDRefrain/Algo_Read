/**
 * Created by adminpc on 18/7/9.
 */

/*荷兰国旗问题，采用的是随机抽取数
BFPRT改良了随机抽取数的问题：
5个一组进行组内排序，选取中位数放到一个数组里面，递归，
当数组小于5个的时候，直接返回中位数，按照这个数进行排序；*/

class BFPRT
{
    // 半成品，思路搞定，程序跑不了
    constructor() {}
    static new(...args) {return new this(...args)}
    // k是目标，数组内第K小的值
    bfprt(ary, start, end, k)
    {
        if(start == end) {return ary[start]}
        let s = this
        // 求出所有的中位数
        let median = s.medianOfMedian(ary, start, end)
        // 根据中位数进行分组，返回两端的区值
        let medRang = s.partation(ary, start, end, median)
        // 判断K是否在中间
        if(k >= medRang[0] && k <= medRang[1])
        {
            return ary[k]
        } else if(k < medRang[0])
        {
            // 在左边，对左边进行
            s.bfprt(ary, start, medRang[0]-1, k)
        } else {
            s.bfprt(ary, medRang[1] + 1, end, k)
        }

    }
    medianOfMedian(ary, start, end)
    {
        let middle = []
        let s = this
        for(let i = 0; i < Math.ceil(ary.length/5); i++)
        {
            // 5个一组，因为最后计算，5个可以收敛与O(N)
            let begin = start + i*5
            let final = begin + 4
            // 求出每个小组的中位数
            middle[i] = s.getMedian(ary, begin, Math.min(end, final))
        }
        // 求出中位数组的中位数
        let r = s.bfprt(middle, 0, middle.length-1, Math.floor(middle.length/2))
        return r
    }
    getMedian(ary, begin, end)
    {
        let s = this
        for(let p = begin; p < end+1; p++)
        {
            for(let q = p; q < end; q++)
            {
                if(ary[q] > ary[q+1])
                {
                    s.swap(ary, q+1, q)
                }
            }
        }
        return ary[Math.floor((begin+end)/2) + (begin+end) % 2]
    }
    swap(ary, a, b)
    {
        let tmp = ary[a]
        ary[a] = ary[b]
        ary[b] = tmp
    }
    partation(ary, start, end, median)
    {
        let l = start - 1
        let r = end + 1
        let s = this
        while(start < r)
        {
            if(ary[start] > median)
            {
                s.swap(ary, start, end)
                r--
            } else if(ary[start] < median)
            {
                s.swap(ary, ++l, start++)
            } else {
                start++
            }
        }
        return [l+1, r-1]

    }
}

let log = console.log.bind(console)

let _main = function () {
    let b = BFPRT.new()
    let n = [1, 3, 2, 6, 7, 4, 8,]
    // log(b.bfprt(n, 0, n.length-1, 5))
}
_main()



