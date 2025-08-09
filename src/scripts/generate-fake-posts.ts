console.log('Fake Post Generator Running...');

import fs from 'fs';
import path from 'path';

import {getActivePostsPath} from '@/src/paths';

const NUM_POSTS = 50;

const POST_CONTENT_SIZE_MIN = 1;
const POST_CONTENT_SIZE_MAX = 2000;

function generateTitle(index: number): string {
    const adjectives = ['Cringe', 'Purple', 'Solvent', 'Glued', 'Sad', 'Angry', 'Fluffy'];
    const nouns = ['Taco', 'Muffin', 'Orang-u-tang', 'Pointer', 'Loop', 'Blob', 'Commit'];

    const adj: string = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun: string = nouns[Math.floor(Math.random() * nouns.length)];

    return `${adj} ${noun} ${index}`;
}

function generateDate(index: number): string {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - index);
    const dateAsString: string = newDate.toISOString().split('T')[0];
    return dateAsString;
}

// prettier-ignore
function generateContent(index: number): string {
    const body: string =
        'This is the body of post number **' + index + '**.\n' +
        'Here\'s a random number to pretend it\'s content: `' + Math.random().toFixed(5) + '`\n' +
        '> Fake post. Move along.';

    const garbageLength: number = Math.floor(Math.random() * (POST_CONTENT_SIZE_MAX - POST_CONTENT_SIZE_MIN + 1)) + POST_CONTENT_SIZE_MIN;

    let garbage: string = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < garbageLength; i++) {
        garbage += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return body + '\n\n' + 'Garbage Data: ' + garbage;
}

function generatePost(index: number): string {
    const title = generateTitle(index);
    const date = generateDate(index);
    const content = generateContent(index);

    const body: string = '---\n' + 'title: ' + title + '\ndate: ' + date + '\n---\n\n' + content;

    return body;
}

function run() {
    if (!fs.existsSync(getActivePostsPath())) {
        fs.mkdirSync(getActivePostsPath(), {recursive: true});
    }

    for (let i = 0; i < NUM_POSTS; i++) {
        const fileName = `fake-post-${i + 1}.md`;
        const filePath = path.join(getActivePostsPath(), fileName);

        if (fs.existsSync(filePath)) {
            continue;
        }

        const postContent = generatePost(i);
        fs.writeFileSync(filePath, postContent);
        console.log(`Generated: ${fileName}`);
    }
}

run();
