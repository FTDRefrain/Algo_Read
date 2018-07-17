/**
 * Created by adminpc on 18/7/11.
 */

/*大楼轮廓问题：给定数组[1, 3, 3,] [2, 4, 4,], [5, 6, 1,]；
返回正面能看到的轮廓线，[1, 2, 3,], [2, 4, 4,], [5, 6, 1,]*/

class Node
{
    constructor(isUp, pos, height)
    {
        // 每个节点
        this.isUp = isUp
        this.pos = pos
        this.h = height
    }
    static new(...args) {return new this(...args)}
}

class BuildingRoute
{
    constructor() {}
    static new(...args) {return new this(...args)}
    routeWay(ary)
    {
        let s = this
        // 改写数组
        let routeAry = this.routeAry(ary)
        // 比较器比较
        routeAry.sort(s.compareWay())
        // 两个红黑树map，这里JS没有
        let tmap = []
        // 记录每个点的最高高度
        let rmap = []
        for(let i = 0; i < routeAry.length; i++)
        {
            // 方向上的时候
            if(routeAry[i].isUp)
            {
                // 树中有
                if(tmap.contains(routeAry[i].h))
                {
                    // 高度+1
                    tmap.push(routeAry[i].h, tmap[routeAry[i].h]+1)
                } else {
                    // 放进去，红黑树自动排
                    tmap.push(routeAry[i].h, 1)
                }
            } else {
                // 方向下
                if(tmap.contains(routeAry[i].h))
                {
                    // 次数为1的时候
                    if(tmap[routeAry[i].h] != 1)
                    {
                        tmap.push(routeAry[i].h, tmap[routeAry[i].h]-1)
                    } else {
                        // 弹出
                        tmap.remove(routeAry[i].h)
                    }
                }
            }
            if(tmap.length == 0)
            {
                rmap.push(i, 0)
            } else {
                // 将顶部的h放进去
                rmap.push(i, tmap[tmap.length-1][0])
            }
        }
        let res = []
        let start = 0
        let height = 0
        // 弹出路径的过程
        for(let p = 0; p < rmap.length; p++)
        {
            let curHeight = rmap[p][0]
            if(height != curHeight)
            {
                if(height != 0)
                {
                    res.push([start, rmap[p][0], height])
                }
                start = rmap[p][0]
                height = rmap[p][1]
            }

        }
        return res

    }
    // 将大楼的数组改写，分成两个点，每个点，x轴坐标，高度，上下的方向
    routeAry(ary)
    {
        let res = []
        let isUp = true
        for(let i = 0; i < ary.length; i++)
        {
            // 两个点的改写
            res[2*i] = Node.new(isUp, ary[i][0], ary[i][3])
            res[2*i + 1] = Node.new([isUp, ary[i][1], ary[i][3]])
        }
        return res
    }
    // 比较器设置
    compareWay(a1, a2)
    {
        if(a1.pos != a2.pos)
        {
            return a1.pos - a2.pos
        }
        // 根据同一个点的上下区分
        if(a1.isUp != a2.isUp)
        {
            return a1.isUp ? 1 : -1
        }
        return 0
    }
}