Deploy to Render (using GitHub)

1. Create a GitHub repository and push the project.
2. Sign in to Render and connect your GitHub account.
3. In Render dashboard click "New" → "Web Service".
4. Select your GitHub repo and branch to deploy.
5. Set the root directory to `/` and the environment to `Node`.
6. Build command: `npm install`.
7. Start command: `node server.js`.
8. Add environment variables in Render settings: `MONGO_URI`, `PORT` (optional), `NODE_ENV`.
9. If using a managed DB, create a MongoDB Atlas cluster and set `MONGO_URI` to the Atlas connection string.
10. Click "Create Web Service" and wait for the first deploy to finish.
11. For updates, push to the connected branch; Render will auto-deploy.

Each step is brief; adjust `MONGO_URI` and branch as needed.
