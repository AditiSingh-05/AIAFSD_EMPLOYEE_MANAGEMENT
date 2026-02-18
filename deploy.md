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


Do not leave MONGO_URI as mongodb://localhost:27017/... — that points to the container itself and will fail on Render.
Easiest option: create a MongoDB Atlas cluster.
Create Atlas account → Create Cluster → Create Database User (username/password) → Network Access (allow Render IPs or 0.0.0.0/0 for testing).
Copy the connection string and replace <user>, <password>, <dbname>.
Example: mongodb+srv://<user>:<password>@cluster0.abcdef.mongodb.net/employee-db?retryWrites=true&w=majority
In Render: open your service → Environment → Add MONGO_URI with the Atlas connection string → Redeploy.
Alternatives: use any hosted MongoDB service reachable from the internet or run MongoDB in a publicly accessible server (not recommended for production).
Local testing: run MongoDB locally or via Docker:
