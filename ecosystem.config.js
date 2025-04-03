module.exports = {
  apps: [
    {
      name: "react-app",
      script: "npx",
      args: "serve -s build",
      cwd: "/home/ubuntu/e-commerce-site", // Apne project ka path set karo
      env: {
        PORT: 3000,
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      exec_mode: "fork",
      instances: 1,
      post_update: ["npm install -g serve", "npm install", "npm run build"]
    }
  ]
};
