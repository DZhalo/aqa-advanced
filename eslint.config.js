import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{
		ignores: ['node_modules', 'dist', 'build'],
	},

	js.configs.recommended,

	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
    	files: ["**/*.test.{js,mjs,cjs}", "**/__tests__/**/*.{js,mjs,cjs}"],
    	languageOptions: {
     	 globals: {
       	 ...globals.jest,
      	},
    },
  },

	eslintConfigPrettier,
];
