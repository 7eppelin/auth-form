/* eslint-disable no-console */
import analyze from "ts-unused-exports";

const ignoredModulesRegExps: (RegExp | string)[] = ["src/__tests__"];

const run = () => {
    const result = analyze("./tsconfig.json");

    const list = Object.keys(result)
        .map((file) => {
            const filePath = file
                .replace(process.cwd(), "")
                .replace(/[/\\]packages[/\\]/, "");

            const unused = result[file].map((x) => x.exportName);

            return { filePath, unused };
        })
        .filter(
            (x) =>
                !ignoredModulesRegExps.some((pattern) => {
                    if (typeof pattern === "string") {
                        return x.filePath.includes(pattern);
                    }

                    return pattern.test(x.filePath);
                }),
        );

    if (list.length > 0) {
        console.log(`> Unused exports found in ${list.length} files\n`);

        list.forEach(({ filePath, unused }) => {
            console.log(filePath);
            console.log(unused, "\n");
        });

        process.exit(1);
    }
};

run();
