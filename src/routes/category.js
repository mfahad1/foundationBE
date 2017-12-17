import Router from 'koa-router';
import * as categoryCtrl from '../controller/category';

const router = new Router({
  prefix: '/category',
});



router.post('/', categoryCtrl.post );
router.get('/', categoryCtrl.getAll );
router.get('/:id', categoryCtrl.getById );
router.get('/area_id/:id', categoryCtrl.getByAreaId);

// router.get('/', userCtrl.getAll );
// router.get('/:id', userCtrl.get );
// router.put('/:id', userCtrl.put );

export default router.routes();