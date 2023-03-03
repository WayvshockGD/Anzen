import {readFileSync} from 'fs';

const fileDir = './config';

const fileData = readFileSync(fileDir, 'utf-8');

const json: Record<string, string> = {};

for (const data of fileData.split('\n')) {
	const [k, v] = data.split('::');
	json[k] = v.split('\r')[0];
}

export const config = {
	token: json.token,
	prefix: json.prefix,
	clientid: json.clientid,
};

export function getDevMode(): boolean {
	return json.dev === 'true';
}

export function getDevToken(): string {
	console.log(json);
	// Used for first creating the bot, most likely wont remove it.
	if (getDevMode() && json.dev === '+false') {
		return config.token;
	}

	if (json.dev === 'false') {
		return config.token;
	}

	return config.token;
}
