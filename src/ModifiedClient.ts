import Eris from 'eris';
import {Types, type Commands} from '.';
import {getDevToken} from '../configfile';

const intents: Eris.ClientOptions['intents'] = [
	'directMessages',
	'guildBans',
	'guildEmojis',
	'guildEmojisAndStickers',
	'guildMembers',
	'guilds',
	'guildMessages',
	'guildMessageReactions',
	'guildPresences',
	'guildWebhooks',
];

export class ModifiedClient extends Eris.Client implements Types.IModClient {
	public commands = new Map<string, Commands.CommandInputData>();

	public constructor() {
		super(getDevToken(), {intents});
	}
}
