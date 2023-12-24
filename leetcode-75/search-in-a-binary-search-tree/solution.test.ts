import { expect } from 'chai';
import searchBST, { TreeNode } from './solution';

describe('searchBST', () => {
  it('searchBST()', () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);

    const val = 2;

    const result = searchBST(root, val);

    expect(result).to.not.deep.eq(null);
  });
});
