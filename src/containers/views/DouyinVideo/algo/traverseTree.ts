// https://blog.csdn.net/My_Jobs/article/details/43451187
// https://www.cnblogs.com/echolun/p/13328927.html

// 深度优先：前序、中序、后序遍历
// 广度优先：层序遍历

interface ITreeNode {
    val: unknown
    left?: ITreeNode
    right?: ITreeNode
}

/**
 * 前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
export const preorderTraversal = function (root) {
    const res = []
    // 遍历函数
    function traversal(root) {
        if (root !== null) {
            // 访问根节点的值
            res.push(root.val)
            if (root.left) {
                // 递归遍历左子树
                traversal(root.left)
            }
            if (root.right) {
                // 递归遍历右子树
                traversal(root.right)
            }
        }
    }
    traversal(root)
    return res
}

/**
 * 中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
export const inorderTraversal = function (root) {
    const res = []
    // 遍历函数
    function traversal(root) {
        if (root !== null) {
            if (root.left) {
                // 递归遍历左子树
                traversal(root.left)
            }
            // 访问根节点的值
            res.push(root.val)
            if (root.right) {
                // 递归遍历右子树
                traversal(root.right)
            }
        }
    }
    traversal(root)
    return res
}

export const inorderTraversal2 = function (root: ITreeNode): unknown[] {
    const res: unknown[] = []
    const stack = []
    let tmp = root,
        pre = null
    while (tmp || stack.length > 0) {
        while (tmp) {
            stack.push(tmp)
            tmp = tmp.left
        }
        if (stack.length > 0) {
            tmp = stack.pop()
            res.push(tmp.val)
            if (!tmp.right || (pre && tmp.right === pre)) {
                pre = tmp
                tmp = null
            } else {
                tmp = tmp.right
            }
        }
    }
    return res
}

/**
 * 后序遍历
 */
export const postorderTraversal2 = function (root: ITreeNode): string[] {
    const res = []
    if (!root) {
        return res
    }
    const stack = [] // stack: only push & pop allowed
    let tmp = root,
        pre = null
    while (tmp || stack.length > 0) {
        while (tmp) {
            stack.push(tmp)
            tmp = tmp.left
        }
        if (stack.length > 0) {
            tmp = stack.pop()
            if (!tmp.right || (pre && tmp.right === pre)) {
                res.push(tmp.val)
                pre = tmp
                tmp = undefined
            } else {
                stack.push(tmp)
                tmp = tmp.right
            }
        }
    }
    return res
}

/**
 * 后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
export const postorderTraversal = function (root) {
    const res = []
    // 遍历函数
    function traversal(root) {
        if (root !== null) {
            if (root.left) {
                // 递归遍历左子树
                traversal(root.left)
            }
            if (root.right) {
                // 递归遍历右子树
                traversal(root.right)
            }
            // 访问根节点的值
            res.push(root.val)
        }
    }
    traversal(root)
    return res
}

export const levelOrder = (root: ITreeNode) => {
    const stack: ITreeNode[] = []
    const arr: unknown[] = []
    stack.push(root)
    while (stack.length > 0) {
        const node = stack.shift()
        arr.push(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return arr
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder2 = function (root: ITreeNode) {
    const res = []

    function traversal(root, depth) {
        if (root !== null) {
            if (!res[depth]) {
                res[depth] = []
            }
            res[depth].push(root.val)
            if (root.left) {
                traversal(root.left, depth + 1)
            }
            if (root.right) {
                traversal(root.right, depth + 1)
            }
        }
    }
    traversal(root, 0)
    return res
}
