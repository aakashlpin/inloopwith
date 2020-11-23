module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/forbid-prop-types': [0, { forbid: ['any'] }],
        'react/prop-types': 0,
        'no-console': 0,
        // 'no-debugger': 0,
        'no-nested-ternary': 0,
        'no-underscore-dangle': 0,
        'global-require': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
    },
};
