/**
 * Created by adminpc on 18/6/30.
 */

// 双队列实现栈结构
class ArrayStack
{
    constructor(size)
    {
        this.array = []
        this.array.length = size
        this.index = 0
    }
    push(a)
    {
        if(this.index == this.array.length) {return}
        this.array[this.index++] = a
    }
    pop()
    {
        if(this.index < 0) {return}
        return this.array[this.index--]
    }
}
// 双栈实现队列
class ArrayQueue
{
    constructor(iniSize)
    {
        this.array = []
        this.array.length = iniSize
        this.start = 0
        this.end = 0
        this.size = 0
    }
    push(a)
    {
        if(this.size == this.array.length) {return}
        this.size++
        this.array[this.end] = a
        this.end = this.end == (this.array.length-1) ? 0 : this.end + 1
    }
    pop()
    {
        if(this.size < 0) {return}
        this.size--
        let r = this.array[this.start]
        this.start = this.start == (this.array.length-1) ? 0 : this.start + 1
        return r
    }

}

