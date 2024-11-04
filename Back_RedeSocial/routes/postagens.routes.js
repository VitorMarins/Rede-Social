const express = require('express');
const {
  getPostagem,
  getPostagemById,
  createPostagem,
  updatePostagem,
  deletePostagem
} = require('../controllers/postagens.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Postagens
 *   description: Operações relacionadas a postagens
 */

/**
 * @swagger
 * /api/postagens:
 *   get:
 *     summary: Retorna todas as postagens
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     responses:
 *       200:
 *         description: Lista de postagens
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', authMiddleware, getPostagem);

/**
 * @swagger
 * /api/postagens/{id}:
 *   get:
 *     summary: Retorna uma postagem específica
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da postagem a ser retornada
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Postagem encontrada
 *       404:
 *         description: Postagem não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', authMiddleware, getPostagemById);

/**
 * @swagger
 * /api/postagens:
 *   post:
 *     summary: Cria uma nova postagem
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título da postagem
 *               conteudo:
 *                 type: string
 *                 description: Conteúdo da postagem
 *               autor:
 *                 type: string
 *                 description: Autor da postagem
 *             required:
 *               - titulo
 *               - conteudo
 *               - autor
 *     responses:
 *       201:
 *         description: Postagem criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', authMiddleware, createPostagem);

/**
 * @swagger
 * /api/postagens/{id}:
 *   put:
 *     summary: Atualiza uma postagem existente
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da postagem a ser atualizada
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título da postagem
 *               conteudo:
 *                 type: string
 *                 description: Conteúdo da postagem
 *               autor:
 *                 type: string
 *                 description: Autor da postagem
 *     responses:
 *       200:
 *         description: Postagem atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Postagem não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/:id', authMiddleware, updatePostagem);

/**
 * @swagger
 * /api/postagens/{id}:
 *   delete:
 *     summary: Deleta uma postagem existente
 *     tags: [Postagens]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da postagem a ser deletada
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Postagem deletada com sucesso
 *       404:
 *         description: Postagem não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', authMiddleware, deletePostagem);

module.exports = router;
