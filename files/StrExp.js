/**
 * Created by adminpc on 18/7/16.
 */
// 字符串匹配问题
class StrExp
{
    constructor() {}
    static new(...args) {return new this(...args)}
    process(str, exp, strIndex, expIndex)
    {
        // str目标字符串，exp匹配的字符串
        let s = this
        // 当exp走到最后的时候，str是否走到最后，匹配不考虑子串的问题
        if(expIndex == exp.length) {return strIndex == str.length}
        // 考虑下一位是否为*，不是看这一位置是否相同
        if(expIndex + 1 == exp.length || exp[expIndex+1] != '*')
        {
            return s.process(str, exp, strIndex+1, expIndex+1) && strIndex != str.length
                && (exp[expIndex] == str[strIndex] || exp[expIndex] == '.')
        }
        // 是的情况
        while (strIndex != str.length && (exp[expIndex] == str[strIndex] || exp[expIndex] == '.'))
        {
            // 认为*是0的时候情况
            if(s.process(str, exp, strIndex, expIndex+2)) {return true}
            // 不是的话，str的指针右移，相当与*起了重复一个的作用
            strIndex++
        }
        // 两位一扫
        return s.process(str, exp, strIndex, expIndex+2)
    }
    // 动态规划的改写
    processDP(){}
    // 判断两个字符串是否符合
    isVaild(){}
}

