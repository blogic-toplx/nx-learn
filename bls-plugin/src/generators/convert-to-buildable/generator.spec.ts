import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { convertToBuildableGenerator } from './generator';
import { ConvertToBuildableGeneratorSchema } from './schema';

describe('convert-to-buildable generator', () => {
  let tree: Tree;
  const options: ConvertToBuildableGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await convertToBuildableGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
