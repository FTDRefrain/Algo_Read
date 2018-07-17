/**
 * Created by adminpc on 18/7/14.
 */

// 给定面额，求目标和的所有组合数

class CountMoney
{
    constructor()
    {
        this.res = 0
    }
    static new(...args) {return new this(...args)}
    process(ary, index, aimMoney)
    {
        let s = this
        if(index == ary.length) {return s.res += aimMoney == 0 ? 1 : 0}
        for(let i = 0; i * ary[index] <= aimMoney; i++)
        {
            s.res = s.process(ary, index+1, aimMoney-ary[index]*i)
        }
        return s.res
    }
    // 有问题，矩阵没有布好
    process2(ary, aimMoney)
    {
        if(ary.length == 0 || aimMoney < 0) {return 0}
        let i = 0
        let j = 0
        let resAry = []
        for(i = 0; i < aimMoney+1; i++)
        {
            for(j = 0; j < ary.length; j++){resAry[i] = []}
        }
        j = ary.length-1
        resAry[0][j] = 1
        for(i = 1; i < aimMoney+1; i++)
        {
            if(i*ary[j] <= aimMoney)
            {
                resAry[i][j] = 1
            } else {
                resAry[i][j] = 0
            }
        }
        for(j = ary.length-1; j > 0; j--)
        {
            for(i = 0; i <= aimMoney; i++)
            {
                if(i - ary[j-1] < 0)
                {
                    resAry[i][j-1] = resAry[i][j]
                } else if(resAry[i-ary[j-1]][j-1] != null) {
                    resAry[i][j-1] = resAry[i][j] + resAry[i-ary[j-1]][j-1]
                } else {
                    resAry[i][j-1] = resAry[i][j] + resAry[i-ary[j-1]][j]
                }
            }
        }
        // log(resAry)
        return resAry[aimMoney][0]
    }
    // 完美矩阵
    process3(ary, aimMoney)
    {
        let i = 0
        let j = 0
        let dp = []
        for(i = 0; i < ary.length; i++) {dp[i] = []}
        for(i = 0; i < ary.length; i++)
        {
            dp[i][0] = 1
        }
        for(j = 1; ary[0] * j <= aimMoney; j++)
        {
            dp[0][ary[0]*j] = 1
        }
        for(i = 1; i < ary.length; i++)
        {
           for(j = 1; j < aimMoney+1; j++)
           {
               dp[i][j] = dp[i-1][j]
               dp[i][j] += j - ary[i] >= 0 ? dp[i][j-ary[i]] : 0
           }
        }
        return dp[ary.length-1][aimMoney]
    }
}

let log = console.log.bind(console)

let _main = function () {
    let a = [5, 10, 15,]
    let c = CountMoney.new()
    let r1 = c.process(a, 0, 100)
    let r2 = c.process3(a, 100)
    log(r1, r2)
}
_main()