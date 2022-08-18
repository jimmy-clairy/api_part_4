const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/stuff');

// http://localhost:3000/api/stuff

router.get('/', auth, stuffCtrl.getAllThings);
router.post('/', auth, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.delete('/', auth, stuffCtrl.deleteAllThings);

module.exports = router;