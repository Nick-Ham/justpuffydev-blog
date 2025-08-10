import Image from 'next/image';

type Props = {
	src: string;
	alt: string;
	width: number | string;
	height: number | string;
	caption?: string;
	className?: string;
	sizes?: string;
	priority?: boolean; // can override to eager-load
	placeholder?: 'blur' | 'empty';
	blurDataURL?: string;
};

export default function ImageCenter({
										src,
										alt,
										width,
										height,
										caption,
										className,
										sizes = '100vw',
										priority = false,
										placeholder,
										blurDataURL
									}: Props) {

	const w = typeof width === 'string' ? parseInt(width, 10) : width;
	const h = typeof height === 'string' ? parseInt(height, 10) : height;

	return (
		<figure className="my-6 text-center">
			<Image
				src={src}
				alt={alt}
				width={w}
				height={h}
				sizes={sizes}
				priority={priority}
				placeholder={placeholder}
				blurDataURL={blurDataURL}
				className={`inline-block ${className ?? ''}`}
			/>
			{caption ? (
				<figcaption className="mt-2 text-sm opacity-70">{caption}</figcaption>
			) : null}
		</figure>
	);
}