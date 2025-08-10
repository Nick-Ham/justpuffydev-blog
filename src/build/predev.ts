import * as buildScriptHelper from '@/src/build/buildScriptHelpers';
import { cook } from '@/src/build/cook';

function main() {
	buildScriptHelper.runStep('Fake Post Generator', 'tsx src/scripts/generate-fake-posts.ts');
	cook('development');
}

main();
