const userRoutes = require("./user/userRoutes");
const authRoutes = require("./auth/authRoutes");
const express = require("express");

const router = express.Router();
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Users

 */
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
