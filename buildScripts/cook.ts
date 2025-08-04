import * as buildScriptHelper from '@/buildScripts/buildScriptHelpers';

export function cook() {
	buildScriptHelper.runStep('Generate Post Metadata', 'tsx scripts/generate-post-metadata.ts');
	buildScriptHelper.runStep('Generate Public Metadata', 'tsx scripts/generate-public-metadataJSON.ts');
}
