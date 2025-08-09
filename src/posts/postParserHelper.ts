import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function dateToString(date: Date): string {
	return date.toISOString().split('T')[0];
}

export function getPostDate(date: unknown): Date {
	let newDate: Date;

	if (typeof date === 'string') {
		newDate = new Date(date);
		if (isNaN(newDate.getTime())) {
			throw new Error(`getPostDate string date failed to convert to Date; NaN: "${date}"`);
		}
	} else if (date instanceof Date) {
		newDate = date as Date;
	} else {
		throw new Error(`getPostDate given non-string or non-Date type: "${date}"`);
	}

	return newDate;
}
