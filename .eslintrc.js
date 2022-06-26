/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    plugins: ['import', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                semi: true,
                tabWidth: 4,
                useTabs: false,
                singleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: true,
                arrowParens: 'avoid',
                proseWrap: 'preserve',
            },
        ],
        indent: ['error', 4, { SwitchCase: 2 }],
        'no-console': 'off',
        'linebreak-style': 'off',
        'import/no-unresolved': 'off',
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],

        '@typescript-eslint/ban-ts-ignore': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 6,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    ],
};
