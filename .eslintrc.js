module.exports = {
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier", // should always be the last one
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "simple-import-sort", "prettier"],
    rules: {
        "no-prototype-builtins": "warn",
        "no-redeclare": "warn",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-console": "warn",
        // react
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": ["warn", { extensions: [".js", ".tsx"] }],
        "react/sort-comp": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "react/no-deprecated": "warn",
        "react/no-children-prop": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/self-closing-comp": ["warn", { component: true, html: true }],
        "react/jsx-curly-newline": "off",
        "react/destructuring-assignment": ["warn", "always"],
        "react/function-component-definition": [
            "warn",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "always" }],

        // React Hooks
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        quotes: ["warn", "double", { avoidEscape: true }],
        "prettier/prettier": ["warn", { printWidth: 100 }],
        "prefer-destructuring": [
            "error",
            {
                array: true,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [["^\\u0000"], ["^react", "^[^.]"], ["^src"], ["^\\."]],
            },
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "padding-line-between-statements": [
            "warn",
            { blankLine: "always", prev: "multiline-block-like", next: "*" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
            {
                blankLine: "always",
                prev: "*",
                next: [
                    "return",
                    "throw",
                    "try",
                    "while",
                    "do",
                    "if",
                    "switch",
                    "function",
                    "for",
                    "multiline-const",
                ],
            },
            { blankLine: "always", prev: "multiline-const", next: "*" },
        ],
    },
};
