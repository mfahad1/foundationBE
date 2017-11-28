import Router from 'koa-router';
import * as areaCtrl from '../controller/area';

const router = new Router({
  prefix: '/area',
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

router.post('/', areaCtrl.post );
router.get('/', areaCtrl.getAll );
router.get('/:id', areaCtrl.getById );

// router.get('/', userCtrl.getAll );
// router.get('/:id', userCtrl.get );
// router.put('/:id', userCtrl.put );

export default router.routes();