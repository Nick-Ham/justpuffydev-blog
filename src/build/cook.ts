import * as buildScriptHelper from '@/src/build/buildScriptHelpers';

export function cook(inENV: string) {
	buildScriptHelper.runStep('Generate Post Metadata', `cross-env NODE_ENV=${inENV} tsx src/scripts/generate-post-metadata.ts`);
	buildScriptHelper.runStep('Generate Public Metadata', `cross-env NODE_ENV=${inENV} tsx src/scripts/generate-public-metadataJSON.ts`);
	buildScriptHelper.runStep('Generate Post Built Data', `cross-env NODE_ENV=${inENV} tsx src/scripts/generate-post-builtdata.ts`);
}
