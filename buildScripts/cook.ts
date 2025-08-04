import * as buildScriptHelper from '@/buildScripts/buildScriptHelpers';

export function cook(inENV: string) {
    buildScriptHelper.runStep('Generate Post Metadata', `cross-env NODE_ENV=${inENV} tsx scripts/generate-post-metadata.ts`);
    buildScriptHelper.runStep('Generate Public Metadata', `cross-env NODE_ENV=${inENV} tsx scripts/generate-public-metadataJSON.ts`);
}
