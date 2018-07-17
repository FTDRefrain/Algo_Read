/**
 * Created by adminpc on 18/7/17.
 */
// 栈逆序，不申请额外空间
class RevStack
{
    constructor(a)
    {
        this.stack = a
    }
    static new(...args) {return new this(...args)}
    reverse(stack)
    {
        if(stack.length == 0) {return}
        let s = this
        // 拿到最后一位
        let end = s.getEnd(stack)
        // 依次拿，直到拿到头部
        s.reverse(stack)
        stack.push(end)
        return stack
    }
    getEnd(stack)
    {
        // 使用递归压栈会记录变量的特性，每次记录下栈顶的值
        let i = stack.pop()
        let s = this
        if(stack.length == 0)
        {
            return i
        } else {
            // 通过递归函数，依次返回栈底的值
            let last = s.getEnd(stack)
            stack.push(i)
            return last
        }
    }
}

let log = console.log.bind(console)

let _main = function () {
    let a = [1, 2, 3, 4,]
    let r = RevStack.new(a)
    let res = r.reverse(r.stack)
    log(res)
}
_main()