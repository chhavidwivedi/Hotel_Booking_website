import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist', 'node_modules'], // double-safety

    extends: [
      js.configs.recommended,
      react.configs.recommended, // <--- you were missing this
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    settings: {
      react: {
        version: 'detect', // <--- best practice
      },
    },

    rules: {
      // ignore vars starting with uppercase (useful for React components)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off', // not needed in React 17+
      'react/prop-types': 'off', // optional: remove if you want propTypes
    },
  },
])
