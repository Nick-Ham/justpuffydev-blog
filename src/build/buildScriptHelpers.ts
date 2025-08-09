import { execSync } from 'child_process';

export const Symbols = {
	RUN: '→',
	SUCCESS: '✓',
	FAIL: '✖',
	ARROW: '>'
};

export function runStep(name: string, command: string) {
	console.log(`\n${Symbols.RUN} Running ${name}...`);

	const start = Date.now();
	execSync(command, { stdio: 'inherit' });
	const duration = ((Date.now() - start) / 1000).toFixed(2);

	console.log(`${Symbols.SUCCESS} ${name} finished in ${duration}s\n`);
}