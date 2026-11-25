# Project conventions

## Language
- Always reply to me in Brazilian Portuguese.
- Write all code in English: variables, functions, types, comments and API fields.
- User-facing error messages must be in Brazilian Portuguese.

## Code
- Use TypeScript with strict typing. Never use `any`; prefer `unknown` and validate.
- Validate all external input (request body, params, query) before using it.
- Never return the raw request body; build responses field by field.
- Use clear, specific names (e.g. `amount` instead of `value` for money).

## Git
- Commit messages follow Conventional Commits in English, imperative mood
  (e.g. `feat: add transactions endpoint`).

## Learning mode
- I am a frontend developer learning backend. When generating code,
  briefly explain any backend concept that may be new to me.