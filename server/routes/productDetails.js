const Axios = require('axios');
const express = require('express');

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const { GITHUB_API_KEY } = process.env;

const router = express.Router();

// Products
router.get('/products', (req, res) => {
  Axios
    .get('ec2-3-12-165-167.us-east-2.compute.amazonaws.com/products', {
    })
    .then((response) => response.data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/products/:id', (req, res) => {
  Axios
    .get(`ec2-3-12-165-167.us-east-2.compute.amazonaws.com/products/${req.params.id}`, {
    })
    .then((response) => response.data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/products/:id/styles', (req, res) => {
  Axios
    .get(`ec2-3-12-165-167.us-east-2.compute.amazonaws.com/products/${req.params.id}/styles`, {
    })
    .then((response) => response.data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Cart
router.get('/cart', (req, res) => {
  Axios
    .get('ec2-3-12-165-167.us-east-2.compute.amazonaws.com/cart', {
    })
    .then((response) => response.data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post('/cart', (req, res) => {
  Axios
    .post('ec2-3-12-165-167.us-east-2.compute.amazonaws.com/cart',
      {
        sku_id: req.body.sku_id
      })
    .then((response) => response.data)
    .then(() => {
      res.status(201).send('CREATED');
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports.router = router;
