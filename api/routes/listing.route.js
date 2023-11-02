import express from 'express';
import { createListing, deleteListing, updateListing,getListingById,getListing, getListings} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken,deleteListing);
router.post('/update/:id',verifyToken,updateListing);
router.get('/get/:id',getListingById);
router.get('/getList',getListing);
router.get('/get', getListings);
export default router;

// verifyToken - to verify if the user is sign in