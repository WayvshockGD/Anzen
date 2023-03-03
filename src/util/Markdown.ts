function createCodeBlock(cont: string, code: string) {
	return `\`\`\`${code}\n${cont}\n\`\`\``;
}

export = {createCodeBlock};
