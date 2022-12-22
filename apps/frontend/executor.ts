import { createPackageJson, createLockFile } from '@nrwl/devkit';
import { writeFileSync } from 'fs';
import { ExecutorContext } from 'nx/src/config/misc-interfaces';
import { writeJsonFile } from 'nx/src/utils/fileutils';
import { Schema } from 'nx/src/utils/params';

export default async function buildExecutor(
  options: Schema,
  context: ExecutorContext
) {
  // ...your executor code

  context.projectName = 'angular project'

  context.projectGraph = {} as unknown as any
  const packageJson = createPackageJson(
    context.projectName,
    context.projectGraph,
    {
      root: context.root,
      isProduction: true, // We want to strip any non-prod dependencies
    }
  );

  // do any additional manipulations to "package.json" here

  const lockFile = createLockFile(packageJson);
  writeJsonFile(`${options.outputPath}/package.json`, builtPackageJson);
  writeFileSync(`${options.outputPath}/${packageLockFileName}}`, lockFile, {
    encoding: 'utf-8',
  });

  // any subsequent executor code
}