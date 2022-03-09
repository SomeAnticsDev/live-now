# Live Now Script

A command-line Node script to display a list of streams you follow which are online.

## Install

```bash
git clone https://github.com/SomeAnticsDev/live-now.git
cd live-now
yarn
```

## Authentication

Go to [twitchtokengenerator.com](https://twitchtokengenerator.com) and select _Custom Scope Token_.

Scroll down to the `user:read:follows` scope in the scopes table, and select _Yes_.

Scroll down to the bottom of the scopes table, and click the blue _Request Token_ button.

In the repo, create a `.env` file, and provide a `CLIENT_ID` and `TOKEN`, filling out the values from the Twitch Token Generator:

```
CLIENT_ID=client ID given by Twitch Token Generator
TOKEN=access token given by Twitch Token Generator
```

## Running

Using `node`, execute the project.

If you're in the project directory, you can do that with `node .` - and if you're elsewhere, substitute that `.` with a path to this project.

You can also set up persistent aliases in your terminal so that you can run this Node script from anywhere:

- [Setting up aliases for macOS](https://benmyers.dev/blog/alias-directories-unix/)
- [Setting up aliases for Windows](https://benmyers.dev/blog/alias-directories-windows/)