import express from 'express';
const router = express.Router();

import productRoute from './product.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/product', productRoute);

  return router;
};

export default routes;
