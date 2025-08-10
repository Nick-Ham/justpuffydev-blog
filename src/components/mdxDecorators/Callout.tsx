import React from 'react';

type Variant = 'note' | 'tip' | 'warn' | 'danger';

const styles: Record<Variant, { border: string; bg: string; text: string }> = {
	note: { border: 'border-sky-600/40', bg: 'bg-sky-500/10', text: 'text-sky-300' },
	tip: { border: 'border-emerald-600/40', bg: 'bg-emerald-500/10', text: 'text-emerald-300' },
	warn: { border: 'border-amber-600/40', bg: 'bg-amber-500/10', text: 'text-amber-300' },
	danger: { border: 'border-rose-700/40', bg: 'bg-rose-600/10', text: 'text-rose-300' }
};

export default function Callout({ title, type = 'note', children }: {
	title?: string;
	type?: Variant;
	children: React.ReactNode;
}) {
	const s = styles[type];
	return (
		<div className={`my-4 rounded-2xl border ${s.border} ${s.bg} px-4 py-3`}>
			{title ? <div className={`mb-1 font-semibold ${s.text}`}>{title}</div> : null}
			<div className="prose prose-invert max-w-none">{children}</div>
		</div>
	);
}