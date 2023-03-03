import {ModifiedClient} from './src/ModifiedClient';

const client = new ModifiedClient();

// eslint-disable-next-line @typescript-eslint/no-empty-function
function initEvents() {}

(async () => {
	try {
		await client.connect();
	} catch (error) {

	}
})();
