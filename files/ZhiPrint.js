/**
 * Created by adminpc on 18/7/1.
 */
// 之字打印
class ZhiPrint
{
    constructor(n)
    {
        this.matrix = n
    }
    static new(...args)
    {
        return new this(...args)
    }
    // Z型打印，记录两个位置，A横着走，B竖着走，引入bool确定打印方向
    zhi()
    {
        let s = this
        let ax = 0
        let ay = 0
        let bx = 0
        let by = 0
        let fromUp = true
        let fy = s.matrix[0].length - 1
        let fx = s.matrix.length - 1
        log(s.matrix[0][0])
        while(ay != fy)
        {
            ay = ax == fx ? ay+1 : ay
            ax = ax == fx ? ax : ax+1
            bx = by == fy ? bx+1 : bx
            by = by == fy ? by : by+1
            // log(ax, ay, bx, by)
            s.print(ax, ay, bx, by, fromUp)
            fromUp = !fromUp

        }
    }
    print(ax, ay, bx, by, fromUp)
    {
        let s = this
        if(fromUp)
        {
            while(ax != (bx-1)) {log(s.matrix[ax--][ay++])}
        } else {
            while(bx != (ax+1)) {log(s.matrix[bx++][by--])}
        }
    }
}

let log = console.log.bind(console)

let c = function () {
    let n = [[1, 4, 7, 10,], [2, 5, 8, 11,], [3, 6, 9, 12,]]
    let z = ZhiPrint.new(n)
    // z.zhi()
}

// c()














