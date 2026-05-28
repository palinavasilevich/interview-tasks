export function getNodes(tree, type) {
  const result = [];

  const dfs = (node) => {
    if (node.type === type) {
      result.push(node);
    }

    if (node.children) {
      //   node.children.forEach(dfs);

      for (const child of node.children) {
        dfs(child);
      }
    }
  };

  dfs(tree);
  return result;
}
