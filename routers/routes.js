const userRouter = require("./userRouter");
const categoriesRouter = require("./categoriesRouter");
const websitesRouter = require("./websitesRouter");
const routers = [
  {
    path: "/api/user",
    handler: userRouter,
  },
  {
    path: "/api/categories",
    handler: categoriesRouter,
  },
  {
    path: "/api/websites",
    handler: websitesRouter,
  },

  // {
  //     path : '/',
  //     handler : (req,res) =>{
  //         res.send('Server is ready!');
  //     }
  // }
];

const applyRouter = (app) => {
  routers.map((r) => {
    if (r.path === "/") {
      app.get(r.path, r.handler);
    } else {
      app.use(r.path, r.handler);
    }
  });
};

module.exports = applyRouter;
