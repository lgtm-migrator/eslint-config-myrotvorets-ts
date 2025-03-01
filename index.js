module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'promise'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:sonarjs/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'array-callback-return': 'warn',
        'class-methods-use-this': 'warn',
        'consistent-return': 'error',
        curly: 'error',
        'default-case': 'warn',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': ['warn', { allowKeywords: true }],
        eqeqeq: 'warn',
        'no-await-in-loop': 'warn',
        'no-caller': 'error',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-constructor-return': 'error',
        'no-else-return': 'warn',
        'no-eq-null': 'warn',
        'no-eval': 'error',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-fallthrough': ['error', { commentPattern: '(break[\\s\\w]*omitted)|fallthrough' }],
        'no-floating-decimal': 'error',
        'no-global-assign': 'warn',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: true,
                skipRegExps: true,
                skipTemplates: true,
            },
        ],
        'no-iterator': 'error',
        'no-loop-func': 'warn',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-promise-executor-return': 'warn',
        'no-proto': 'error',
        'no-return-assign': ['error', 'except-parens'],
        'no-return-await': 'warn',
        'no-self-compare': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'warn',
        'no-unused-vars': 'off',
        'no-use-before-define': 'error',
        'no-useless-backreference': 'warn',
        'no-useless-call': 'error',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'off',
        'no-useless-rename': 'warn',
        'no-useless-return': 'warn',
        'no-void': [
            'warn',
            {
                allowAsStatement: true,
            },
        ],
        'prefer-promise-reject-errors': 'error',
        'prefer-template': 'warn',
        radix: 'error',
        'require-atomic-updates': 'warn',
        'require-await': 'warn',
        'require-unicode-regexp': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
            },
        ],
        'spaced-comment': ['error', 'always', { markers: ['/'] }],

        '@typescript-eslint/ban-tslint-comment': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true,
                allowedNames: ['self'],
            },
        ],
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            }
        ],
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }],

        'import/order': [
            'error',
            {
                groups: [['builtin', 'external', 'internal']],
            },
        ],

        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/max-switch-cases': 'warn',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-element-overwrite': 'warn',
        'sonarjs/no-small-switch': 'warn',

        'promise/catch-or-return': 'off',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/always-return': 'off',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'warn',
        'promise/avoid-new': 'off',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/valid-params': 'warn',
        'promise/prefer-await-to-then': 'off',
        'promise/prefer-await-to-callbacks': 'off',
    },
};
