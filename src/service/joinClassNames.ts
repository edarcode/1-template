export const joinClassNames = (classNames: string[]) => {
	const validClassNames = classNames.filter(Boolean);
	const finalClassName = validClassNames.join(" ");
	return finalClassName;
};
