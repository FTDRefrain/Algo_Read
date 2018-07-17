/**
 * Created by adminpc on 18/7/10.
 */
// morris遍历二叉树
class Morris
{
    constructor() {}
    morrisWay(node)
    {
        let cur = node
        let mostRight = cur.left
        while (cur != null)
        {
            mostRight = cur.left
            if(mostRight != null)
            {
                while(mostRight.right != null && mostRight.right != cur)
                {
                    mostRight = mostRight.right
                }
                if(mostRight.right == null)
                {
                    mostRight.right = cur
                    // 先序输出1
                    cur = cur.left
                    continue
                } else {
                    mostRight.right = null
                }
            }
            // 先序输出2
            // 中序输出
            cur = cur.right
        }
    }
}