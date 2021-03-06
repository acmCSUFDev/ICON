import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const NOTION_SECRET = process.env.NOTION_SECRET || '';
const NOTION_DB_ID = process.env.NOTION_DB_ID || '';
const NOTION_REDIRECT_URI = process.env.NOTION_REDIRECT_URI || '';

const CANVAS_TOKEN = process.env.CANVAS_API_TOKEN || '';
const CANVAS_API_DOMAIN = process.env.CANVAS_API_DOMAIN || '';


const NOTION = {
    secret: NOTION_SECRET,
    db: NOTION_DB_ID
};

const CANVAS = {
    token: CANVAS_TOKEN,
    domain: CANVAS_API_DOMAIN
};

const config = {
    notion: NOTION,
    canvas: CANVAS
};

export default config;