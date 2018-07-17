// 荷兰国旗问题
class NetherLandsFlag
{
    constructor(n)
    {
        this.array = n
    }
    static new(...args)
    {
        return new this(...args)
    }
    compare(a, b)
    {
        let c = this.array[a]
        this.array[a] = this.array[b]
        this.array[b] = c
    }
    partition(l, r, m)
    {
        let less = l-1
        let more = r+1
        let s = this
        while(l < more)
        {
            if(this.array[l] < m)
            {
                s.compare(++less, l++)
            } else if(this.array[l] == m)
            {
                l++
            } else {
                s.compare(l, --more)
            }
        }
        return [less + 1, more - 1]
    }
    // 快排，将数组分成三块，然后对左右快递归
    quickSort(l, r)
    {
        let s = this
        if(l < r)
        {
            let k = Math.floor(Math.random() * (r-l+1) + l)
            s.compare(k, r)
            let dis = s.partition(l, r, s.array[r])
            s.quickSort(l ,dis[0] - 1, s.array[dis[0]-1])
            s.quickSort(dis[1] + 1, r, s.array[r])
        }
    }
}

let log = console.log.bind(console)

let _main = function () {
    let n = [8, 7, 3, 4, 6, 7, 8,]
    let m = NetherLandsFlag.new(n)
    m.quickSort(0, n.length - 1)
    log(m.array)
}
_main()