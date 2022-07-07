import express from "express";
import {
    getAllUsersJSON,
    getIndividualUsersJSON,
    getFilteredUsersJSON
} from '../controllers/users.js';

const router = express.Router();

router.get('/users/', getAllUsersJSON);
router.get('/users/:id', getIndividualUsersJSON);
router.get('/filter', getFilteredUsersJSON);

export default router;