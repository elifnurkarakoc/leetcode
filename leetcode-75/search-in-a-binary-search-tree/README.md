## Explanation

The searchBST method provides a simple implementation of a binary tree node and a function to search for a specific value in a binary search tree.

```typescript
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else if (root.val > val) {
    return searchBST(root.left, val);
  } else if (root.val < val) {
    return searchBST(root.right, val);
  }
}
```
