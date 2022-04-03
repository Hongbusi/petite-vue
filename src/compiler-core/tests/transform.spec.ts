import { NodeTypes } from '../src/ast'
import { baseParse } from '../src/parse'
import { transform } from '../src/transform'

describe('compiler-core/transform', () => {
  it('should', () => {
    const ast = baseParse('<div>hi, {{ message }}</div>')

    const plugin = (node) => {
      if (node.type === NodeTypes.TEXT) {
        node.content = `${node.content}petite-vue`
      }
    }
    transform(ast, {
      nodeTransforms: [plugin]
    })
    const nodeText = ast.children[0].children[0]
    expect(nodeText.content).toBe('hi, petite-vue')
  })
})
