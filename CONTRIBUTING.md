# Contributing to Decentralized AI Model Marketplace

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable.
2. Update the docs/ folder with any new documentation.
3. The PR will be merged once you have the sign-off of at least one other developer.

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [issue tracker]

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Use a Consistent Coding Style

* Use 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

## Smart Contract Development Guidelines

1. **Security First**
   - Follow the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.17/style-guide.html)
   - Include comprehensive tests for all new functionality
   - Document any potential security considerations

2. **Gas Optimization**
   - Optimize for gas usage where possible
   - Include gas usage estimates in PR descriptions
   - Consider using Hardhat's gas reporter

3. **Testing Requirements**
   - Write unit tests for all new functions
   - Include integration tests for complex interactions
   - Test edge cases and failure scenarios

## Frontend Development Guidelines

1. **Component Structure**
   - Use functional components with hooks
   - Follow the existing component organization
   - Include PropTypes or TypeScript types

2. **Styling**
   - Use CSS Modules for component-specific styles
   - Follow the existing naming conventions
   - Maintain responsive design principles

3. **State Management**
   - Use React Context for global state
   - Keep component state minimal
   - Document state management decisions

## License

By contributing, you agree that your contributions will be licensed under its MIT License. 