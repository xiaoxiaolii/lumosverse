# Lumosverse project workflow

For every completed website change in this project:

1. Run the appropriate production build and resolve any failures.
2. Commit the finished source changes to the current branch.
3. Push the commit to the GitHub `origin` remote.
4. Publish the same validated source to the existing OpenAI Sites project unless the user explicitly asks to keep the change local or not publish it.
5. Do not report completion until both GitHub and Sites are synchronized, or clearly report which destination is blocked.

Never commit credentials, private keys, `.env` files, or generated deployment archives.
