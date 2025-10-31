# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0e9b7649-4353-49e8-830d-3feddbbf6996

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0e9b7649-4353-49e8-830d-3feddbbf6996) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0e9b7649-4353-49e8-830d-3feddbbf6996) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Deploy to Render

You can easily deploy this Vite + React app as a static site on Render.

Recommended Render static site settings:

- Branch: main
- Build Command: npm run build
- Publish Directory: dist
- Plan: Free (or select a paid plan if you need more resources)

If you prefer repository-as-config, add a `render.yaml` to the project root with these settings (already included in this repo):

- buildCommand: npm run build
- publishPath: dist
- branch: main

Quick steps on Render web UI:

1. Create a new site and connect your GitHub repository.
2. Choose the `main` branch.
3. Set the Build Command to: `npm run build`.
4. Set the Publish Directory to: `dist`.
5. Create the site and wait for the build to finish.

Local verification before pushing:

```sh
# install deps
npm ci

# build the app
npm run build

# preview the production build locally
npm run preview
```

The production assets will be generated into the `dist` directory, which Render serves as a static site.
