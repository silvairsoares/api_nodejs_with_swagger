/* https://github.com/dpecos/rest-swagger-example */

import * as DAO from '../daos/'
import * as Swagger from './swagger'

const dao = DAO.getInstance('memory')

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /cliente:
 *   get:
 *     description: Retrieve the full list of cliente
 *     tags:
 *       - cliente
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: cliente
 *         schema:
 *           $ref: '#/definitions/cliente'
 */
router.get('/', (req, res, next) => {
  const response = dao.retrieveAll()
  Swagger.validateModel('cliente', response)
  res.send(response)
})

/**
 * @swagger
 * /cliente/{id}:
 *   get:
 *     description: Retrieve an specific cliente
 *     tags:
 *       - cliente
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the cliente to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: cliente
 *         schema:
 *           $ref: '#/definitions/Cliente'
 */
router.get('/:id', (req, res, next) => {
  const response = dao.retrieve(parseInt(req.params.id, 10))
  Swagger.validateModel('Cliente', response)
  res.send(response)
})

/**
 * @swagger
 * definitions:
 *   TimeStamp:
 *     type: object
 *     required:
 *       - lastUpdate
 *     properties:
 *       lastUpdate:
 *         type: number
 */

/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     description: Update lastUpdate field of an cliente
 *     tags:
 *       - cliente
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the cliente to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as cliente's lastUpdate field
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/TimeStamp'
 *     responses:
 *       200:
 *         description: updated cliente
 *         schema:
 *           $ref: '#/definitions/Cliente'
 */
router.put('/:id', (req, res, next) => {
  Swagger.validateModel('TimeStamp', req.body)
  const response = dao.update(parseInt(req.params.id, 10), req.body.lastUpdate)
  Swagger.validateModel('Cliente', response)
  res.send(response)
})

/**
 * @swagger
 * /cliente:
 *   post:
 *     description: Cadastra um novo cliente
 *     tags:
 *       - cliente
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: cliente
 *         description: Dados do cliente
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Cliente'
 *     responses:
 *       200:
 *         description: Novo cliente cadastrado
 *         schema:
 *           $ref: '#/definitions/Cliente'
 */
router.post('/', (req, res, next) => {
  //Swagger.validateModel('Cliente', req.body)
  const response = dao.create(req.body)
  //Swagger.validateModel('Cliente', response)
  //res.send(response)
  res.send({
    'resultado': 'Cliente salvo com sucesso',
    'dados': req.body
  })
})

module.exports = router
