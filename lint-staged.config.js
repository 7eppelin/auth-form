module.exports = {
    "**/*.ts?(x)": [
        () => "yarn unused-exports",
        () => "tsc -p tsconfig.json --noEmit",
        (filenames) => `stylelint --max-warnings 0 ${filenames.join(" ")}`,
        (filenames) => {
            const path = filenames.length > 10 ? "." : filenames.join(" ");

            return `eslint --max-warnings 0 ${path} `;
        },
    ],
};
