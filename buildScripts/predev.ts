import * as buildScriptHelper from '@/buildScripts/buildScriptHelpers';
import { cook } from '@/buildScripts/cook';

function main() {
	buildScriptHelper.runStep('Fake Post Generator', 'tsx scripts/generate-fake-posts.ts');
	cook();
}

main();
