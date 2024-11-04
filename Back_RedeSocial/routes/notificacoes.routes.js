const express = require('express');
const {
  getNotificacao,
  getNotificacaoById,
  createNotificacao,
  updateNotificacao,
  deleteNotificacao
} = require('../controllers/notificacoes.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notificacoes
 *   description: Operações relacionadas a notificações
 */

/**
 * @swagger
 * /api/notificacoes:
 *   get:
 *     summary: Retorna todas as notificações
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     responses:
 *       200:
 *         description: Lista de notificações
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', authMiddleware, getNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   get:
 *     summary: Retorna uma notificação específica
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da notificação a ser retornada
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notificação encontrada
 *       404:
 *         description: Notificação não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', authMiddleware, getNotificacaoById);

/**
 * @swagger
 * /api/notificacoes:
 *   post:
 *     summary: Cria uma nova notificação
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensagem:
 *                 type: string
 *                 description: Mensagem da notificação
 *               data:
 *                 type: string
 *                 format: date-time
 *                 description: Data da notificação
 *               tipo:
 *                 type: string
 *                 description: Tipo da notificação
 *               autor:
 *                 type: string
 *                 description: Autor da notificação
 *             required:
 *               - mensagem
 *               - data
 *               - tipo
 *               - autor
 *     responses:
 *       201:
 *         description: Notificação criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', authMiddleware, createNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   put:
 *     summary: Atualiza uma notificação existente
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da notificação a ser atualizada
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensagem:
 *                 type: string
 *                 description: Mensagem da notificação
 *               data:
 *                 type: string
 *                 format: date-time
 *                 description: Data da notificação
 *               tipo:
 *                 type: string
 *                 description: Tipo da notificação
 *               autor:
 *                 type: string
 *                 description: Autor da notificação
 *     responses:
 *       200:
 *         description: Notificação atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Notificação não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/:id', authMiddleware, updateNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   delete:
 *     summary: Deleta uma notificação existente
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []  # Especifica que a autenticação é necessária
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da notificação a ser deletada
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notificação deletada com sucesso
 *       404:
 *         description: Notificação não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', authMiddleware, deleteNotificacao);

module.exports = router;
