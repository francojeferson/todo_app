# Commit Message Format

All commit messages MUST follow the [Conventional Commits](https://www.conventionalcommits.org/) standard to maintain a clear and consistent git history.

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Rules

1. First line MUST be under 50 characters
2. Description MUST be in imperative mood (e.g., "add" not "adds")
3. Body lines MUST be wrapped at 72 characters
4. Type MUST be one of:
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation changes
   - style: Code style/formatting changes
   - refactor: Code changes that neither fix bugs nor add features
   - perf: Performance improvements
   - test: Adding or modifying tests
   - build: Build system or external dependency changes
   - ci: CI configuration changes
   - chore: Other changes that don't modify src or test files

## Examples

```
feat(auth): add password reset functionality
Implement reset API, email template, and form component
Closes #123

fix(api): handle null response from user service
Previously the app would crash when the service returned null
Fixes #456

docs(readme): update installation instructions
Add section about environment variables and prerequisites

style(lint): apply prettier formatting to src files

refactor(core): extract validation logic to utils
Move shared validation code to a new utilities module for reuse

perf(queries): optimize user search algorithm
Replace O(n²) implementation with O(n log n) approach
Improves search time by 75% on large datasets

test(api): add integration tests for auth routes

build(deps): upgrade typescript to 4.9.5

ci(actions): add node 18 to test matrix

chore(git): update .gitignore patterns
```

## Additional Guidelines

1. Breaking Changes:

   - Add BREAKING CHANGE: in the commit body
   - Or append ! after type: `feat!: remove support for X`

2. Multiple Scopes:

   - Use comma separation: `feat(api,auth): add OAuth support`

3. References:

   - Reference issues/PRs in footer: `Fixes #123, #456`
   - Or in description if simple: `fix(ui): center logo (#789)`

4. Revert Commits:
   - Start with `revert:` followed by original commit header
   - Body should contain: `This reverts commit <hash>`
