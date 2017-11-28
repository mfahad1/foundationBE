import Router from 'koa-router';
import * as districtCtrl from '../controller/district';

const router = new Router({
  prefix: '/district',
});

/**
 * @api {post} /district/ post District
 * @apiName District
 * @apiGroup District
 *
 * @apiParam {String} name .
 * @apiParam {String} areaId .
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *  { 
 *    "name": "sports2",
 *    "areaId": "5a194f403fa4da405a9f607c",
 *    "_id": "5a1a8b9ad25f57246dbb0ad4",
 *    "category": []
 *  }
**/

router.post('/', districtCtrl.post );

/**
 * @api {post} /district/insert_category post Add Category in District
 * @apiName District
 * @apiGroup District
 *
 * @apiParam {String} categoryId .
 * @apiParam {String} priceAvg .
 * @apiParam {String} priceCategory .
 * @apiParam {String} priceGeneral .
 * @apiParam {String} priceEffective .
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *  { 
 *    "ok": 1
 *  }
**/

router.post('/insert_category/:id', districtCtrl.insertCategory );
router.put('/update_category/:id', districtCtrl.updateCategory );
// router.get('/:id', categoryCtrl.getById );
// router.get('/area_id/:id', categoryCtrl.getByAreaId);

// router.get('/', userCtrl.getAll );
// router.get('/:id', userCtrl.get );
// router.put('/:id', userCtrl.put );

export default router.routes();