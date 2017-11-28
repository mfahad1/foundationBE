import Router from 'koa-router';
import * as categoryCtrl from '../controller/category';

const router = new Router({
  prefix: '/category',
});

/**
 * @api {post} /area/ post area
 * @apiName Area
 * @apiGroup Area
 *
 * @apiParam {String} name .
 *
 * @apiSuccess {String} name of the Are.
 */

router.post('/', categoryCtrl.post );
router.get('/', categoryCtrl.getAll );
router.get('/:id', categoryCtrl.getById );
router.get('/area_id/:id', categoryCtrl.getByAreaId);

// router.get('/', userCtrl.getAll );
// router.get('/:id', userCtrl.get );
// router.put('/:id', userCtrl.put );

export default router.routes();