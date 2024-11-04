const express = require('express');
const {
  getSeguidor,
  getSeguidorById,
  createSeguidor,
  updateSeguidor,
  deleteSeguidor
} = require('../controllers/seguidores.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Seguidores
 *   description: Operações relacionadas a seguidores
 */

/**
 * @swagger
 * /api/seguidores:
 *   get:
 *     summary: Retorna todos os seguidores
 *     tags: [Seguidores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de seguidores
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', authMiddleware, getSeguidor);

/**
 * @swagger
 * /api/seguidores/{id}:
 *   get:
 *     summary: Retorna um seguidor específico
 *     tags: [Seguidores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do seguidor a ser retornado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Seguidor encontrado
 *       404:
 *         description: Seguidor não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', authMiddleware, getSeguidorById);

/**
 * @swagger
 * /api/seguidores:
 *   post:
 *     summary: Cria um novo seguidor
 *     tags: [Seguidores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 description: ID do usuário que está seguindo
 *               seguindo:
 *                 type: string
 *                 description: ID do usuário sendo seguido
 *             required:
 *               - usuario
 *               - seguindo
 *     responses:
 *       201:
 *         description: Seguidor criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', authMiddleware, createSeguidor);

/**
 * @swagger
 * /api/seguidores/{id}:
 *   put:
 *     summary: Atualiza um seguidor existente
 *     tags: [Seguidores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do seguidor a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 description: ID do usuário que está seguindo
 *               seguindo:
 *                 type: string
 *                 description: ID do usuário sendo seguido
 *     responses:
 *       200:
 *         description: Seguidor atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Seguidor não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/:id', authMiddleware, updateSeguidor);

/**
 * @swagger
 * /api/seguidores/{id}:
 *   delete:
 *     summary: Deleta um seguidor existente
 *     tags: [Seguidores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do seguidor a ser deletado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Seguidor deletado com sucesso
 *       404:
 *         description: Seguidor não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', authMiddleware, deleteSeguidor);

module.exports = router;
