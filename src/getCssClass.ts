type cssModuleType = {
    [key: string]: string;
};

function getCssClassName(
    cssModule: cssModuleType,
    classBase: string,
    classNames?: Array<string | undefined>
): string {
    let defaultClass = getOrRaiseIfNotFound(classBase);

    if (!classNames) return defaultClass;
    let classNamesDefined: Array<string> = classNames.flatMap((e) => (e ? [e] : []));

    if (classNames.length === 0) return defaultClass;
    classNamesDefined = classNamesDefined.map(getOrRaiseIfNotFound);

    return `${defaultClass} ${classNamesDefined.join(' ')}`;

    function getOrRaiseIfNotFound(className: string): string {
        const found = cssModule[className];
        if (found) return found;
        throw new Error(`css class with name '${className}' does not exists.`);
    }
}

export { getCssClassName };
