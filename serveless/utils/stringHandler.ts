export const normalizeString = (str: string) => {
    const htmlTagsRegex = /(&nbsp;|<([^>]+)>)/g;
    return str
        .trim()
        .replace(/(\r\n|\n|\r|\")/gm, '')
        .replace(htmlTagsRegex, '');
};

export const randomColors = (
    arrayColors: Array<string>,
    currentIdx: number,
) => {
    return arrayColors[currentIdx % arrayColors.length];
};
