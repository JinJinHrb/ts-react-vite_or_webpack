// https://blog.csdn.net/My_Jobs/article/details/43451187

/**
 * 前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
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
const inorderTraversal = function (root) {
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

/**
 * 后续遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
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

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
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
