<!-- RUN COMMAND  -->
<!-- COMMAND TO INSTALL YOUR PACKAGES (MAKE SURE TO USE NODE 22) -->
NPM INSTALL
<!-- #command to start the node project -->
node server.js
<!-- #Step1 FOR DOCKER -->
docker build -t my-node-api .
<!-- #Step2  FOR DOCKER-->
docker run -d -p 3000:3000 --name node-api-container my-node-api



# frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

<!-- URL du déploiement Vercel -->

https://frontend-docker-ten.vercel.app/

<!-- Détails des routes backends -->

taskRouter.get("/", tasksController.getTask) <!-- Récupération de toutes les tâches  -->
taskRouter.get("/:id", tasksController.getTaskById) <!-- Récupération de tâche par id -->
taskRouter.post("/", tasksController.createTask) <!-- Ajout d'une nouvelle tâche  -->
taskRouter.put("/:id", tasksController.updateTask) <!-- Modification d'une tâche via son id -->
taskRouter.delete("/:id", tasksController.deleteTask) <!-- Suppression d'une tâche via son id  -->