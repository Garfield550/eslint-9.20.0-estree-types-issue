import config from '@biscuittin/eslint-config'

export default config(
  {
    ignores: ['pnpm-workspace.yaml', 'README.md'],
    javascript: {
      env: {
        browser: false,
      },
    },
    typescript: true,
    node: true,
  },
  {
    files: ['.vscode/*.json'],
    rules: {
      'jsonc/no-comments': 'off',
    },
  },
)
