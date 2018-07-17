/**
 * Created by adminpc on 18/7/15.
 */
// 机器人走路问题
class WalkWay
{
    constructor() {}
    static new(...args){return new this(...args)}
    process(N, M, P, K)
    {
        if(N < 2 || M < 1 || P < 0 || M > N || K < 1 || K > N) {return 0}
        let res = 0
        let s = this
        if(P == 0) {return M == K ? 1 : 0}
        if(M == 1)
        {
            res += s.process(N, M+1, P-1, K)
        } else if(M == N)
        {
            res += s.process(N, M-1, P-1, K)
        } else {
            res += s.process(N, M+1, P-1, K)
            res += s.process(N, M-1, P-1, K)
        }
        return res
    }
}

let log = console.log.bind(console)
let _main = function () {
    let w = WalkWay.new()
    let r = w.process(4, 2, 2, 2)
    log(r)
}
_main()