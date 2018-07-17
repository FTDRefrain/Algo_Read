/**
 * Created by adminpc on 18/7/1.
 */
// 矩阵旋转打印问题
class RotatePrint
{
    constructor(n)
    {
        this.matrix = n
    }
    static new(...args)
    {
        return new this(...args)
    }
    // 旋转打印
    rotate()
    {
        let lx = 0
        let ly = 0
        let rx = this.matrix.length - 1
        let ry = this.matrix[0].length - 1
        let s = this
        // while(lx <= rx && ly <= ry) {s.print(lx++, ly++, rx--, ry--)}
        while(lx <= rx && ly <= ry) {s.rotateEdge(lx++, ly++, rx--, ry--)}

    }
    // 找到两个点，作为矩形的两角，打印四个边
    print(lx, ly, rx, ry)
    {
        let s = this
        if(lx == rx && ly == ry) {log(s.matrix[lx][ly]); return}
        if(lx == rx)
        {
            for(let i = ly; i <= ry; i++)
            {
                log(s.matrix[lx][i])
            }
        } else if(ly == ry)
        {
            for(let p = lx; p <= rx; p++)
            {
                log(p, ly)
            }
        } else {
            let cx = lx
            let cy = ly
            while(cx != rx) {log(s.matrix[cx++][ly])}
            while(cy != ry) {log(s.matrix[rx][cy++])}
            while(cx != lx) {log(s.matrix[cx--][ry])}
            while(cy != ly) {log(s.matrix[lx][cy--])}
        }

    }
    rotateEdge(lx, ly, rx, ry)
    {
        let times = rx - lx
        let s = this
        let tmp = 0
        for(let i = 0; i < times; i++)
        {
            tmp = s.matrix[lx+i][ly]
            s.matrix[lx+i][ly] = s.matrix[lx][ry-i]
            s.matrix[lx][ry-i] = s.matrix[rx-i][ry]
            s.matrix[rx-i][ry] = s.matrix[rx][ly+i]
            s.matrix[rx][ly+i] = tmp
        }

    }

}

let log = console.log.bind(console)

let _main = function () {
    let n = [[1, 4, 7,], [2, 5, 8,], [3, 6, 9,]]
    let r = RotatePrint.new(n)
    r.rotate()
    // log(r.matrix)
}
_main()


























