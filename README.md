<div align="center">
    <p>kyles-learning-lab</p>
    <p>A custom local simulation and research hub.</p>
</div>

> [!IMPORTANT]
> This is a fork customized for local use under the name kyles-learning-lab.

**Open the application locally and use your own branded version of the hub.**

## Features

- About:Blank Cloaking
- Tab Cloaking
- Wide collection of apps & simulations
- Clean, Easy to use UI
- Inspect Element
- Various Themes
- Password Protection (Optional)
- Built-in Tab System
- Now.gg Support
- Fast Speeds
- Geforce NOW Support

## Deployment

> [!IMPORTANT]
> You **cannot** deploy to static web hosts, including Netlify, Cloudflare Pages, and GitHub Pages.

### Password Protection

1. Go to the `config.js` file and set `challenge` to **true**. Then, set the environment variable as follows:
2. For PNPM: Run either `config=true pnpm start` or `$env:config=true; pnpm start`, depending on your server.
3. For Bun: Run either `config=true bun start` or `$env:config=true; bun start` if you prefer Bun.
4. For NPM: Run either `config=true npm start` or `$env:config=true; npm start` if you prefer NPM.


### Server Deployment

Clone your fork and run it locally or on your server:

```bash
git clone https://github.com/yourusername/kyles-learning-lab
cd kyles-learning-lab
```

Next depending on your package manager, run one of the following commands:

#### Bun

If you are using Bun, run the following commands:

```bash
bun i
bun start
```

#### pnpm

If you are using pnpm, run the following commands:

```bash
pnpm i
pnpm start
```

#### npm

If you are using npm, run the following commands:

```bash
npm i
npm run start
```

### Updating

```bash
cd kyles-learning-lab
git pull --force --allow-unrelated-histories # This may overwrite your local changes
```

### Deployment Alternatives

This project is set up to run as an Express app on Vercel with the included [vercel.json](vercel.json) configuration.
You can also deploy it to Render or similar Node hosting providers.

#### What happened to Replit Deployment?

As of January 1st, 2024, Replit is [no longer free](https://blog.replit.com/hosting-changes). Try GitHub Codespaces instead.

### GitHub Codespaces

> [!NOTE]
> If you're setting the port below 1023, then you must run `sudo PORT=1023`

1. Create a GitHub account if you haven't already.
2. Click "Code" (green button) and then "Create Codespace on main."
3. In the terminal at the bottom, paste `pnpm i && pnpm start`.
4. Respond to the application popup by clicking "Make public."
> [!IMPORTANT]
> Make sure you click the "Make public." button, or the network gateway won't function properly.<br>
> If you get a Range Error, go back and make sure you clicked Make public!
5. Access the deployed website from the ports tab.
6. For subsequent uses in the same codespace, just run `pnpm start`

### Solution for if there is no popup.

1. Run `pnpm i`, and before `pnpm start`, prepend `PORT=8080`, replacing 8080 with another port. For example, `PORT=6969 pnpm start`.
2. If this does not work then you can prepend `$env:PORT=8080;`, replacing 8080 with another port. For example, `$env:PORT=6969; pnpm start`
3. Go to the ports tab, Click Forward A Port, And type the port number.
4. Right-click Visibility and set Port Visibility to Public.

> [!NOTE]
> This fork is customized for local use and can be adapted with your own ad placements and branding.

## Report Issues

If you encounter problems, open an issue on GitHub, and we'll address it promptly.

> [!TIP]
> If you're having trouble, join the community Discord: https://discord.gg/y3h7emSMux

# Credits

Thanks for using kyles-learning-lab.
