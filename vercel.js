{
  "version": 2,
  "builds": [{ "src": "api/index.js", "use": "@vercel/node" }],
  "routes": [
    { "src": "/cadastrar", "methods": ["POST"], "dest": "/api/index.js" },
    { "src": "/", "dest": "/api/index.js" }
  ]
}
