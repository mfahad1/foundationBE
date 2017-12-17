import Router from 'koa-router';
import * as categoryCtrl from '../controller/category';

const router = new Router({
  prefix: '/category',
});


/**
 * @api {post} /category/ post category
 * @apiName Post Category
 * @apiGroup Category
 *
 * @apiParam {String} name name of category.
 * @apiParam {String} areaId id of area.
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} data data of new category created
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": {
 *      "__v": 0,
 *      "name": "Phase 4",
 *      "areaId": "5a302cc8b8ce9c3dc3f7ea93",
 *      "_id": "5a358d2eb548412d992bff3c"
 *    }
 *  }
 */

router.post('/', categoryCtrl.post );

/**
 * @api {get} /category/ get all category
 * @apiName Get all category
 * @apiGroup Category
 *
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} Object array of all category object
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *   "data": [
 *         {
            "_id": "5a36398921a99311672b180d",
            "name": "Phase 1",
            "areaId": "5a302cc8b8ce9c3dc3f7ea93",
            "__v": 0
        },
        {
            "_id": "5a3641ada7f73315269f46f3",
            "name": "Phase 2",
            "areaId": "5a302cc8b8ce9c3dc3f7ea93",
            "__v": 0
        },
        {
            "_id": "5a36420da7f73315269f46f5",
            "name": "Phase 3",
            "areaId": "5a302cc8b8ce9c3dc3f7ea93",
            "__v": 0
        },
        {
            "_id": "5a366fdfa7f73315269f46f7",
            "name": "Phase 4",
            "areaId": "5a302cc8b8ce9c3dc3f7ea93",
            "__v": 0
        }
 *   ]
 *  }
 */

router.get('/', categoryCtrl.getAll );

/**
 * @api {get} /category/:id get category by ID
 * @apiName Get a category by ID
 * @apiGroup Category
 * 
 * @apiParam {Number} id category unique ID.
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} Object Object of an category
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *   "data": {
 *           "_id": "5a194aa10afff331ddd1ebcd",
 *           "name": "Phase 1",
 *  "areaId": "5a302cc8b8ce9c3dc3f7ea93",
 *           "__v": 0
 *    }
 *  }
 */

router.get('/:id', categoryCtrl.getById );

/**
 * @api {get} /area_id/:id get all categories by area ID
 * @apiName Get all category by area Id
 * @apiGroup Category
 * 
 * @apiParam {Number} id area unique ID.
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} Object Object of an category
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *   "data": [
 *       {
            "_id": "5a36398921a99311672b180d",
            "name": "Phase 1",
            "areaId": "5a302cc8b8ce9c3dc3f7ea93",
            "__v": 0
        },
        {
            "_id": "5a3641ada7f73315269f46f3",
            "name": "Phase 2",
            "areaId": "5a302cc8b8ce9c3dc3f7ea93",
            "__v": 0
        },
        {
            "_id": "5a36420da7f73315269f46f5",
            "name": "Phase 3",
            "areaId": "5a302cc8b8ce9c3dc3f7ea93",
            "__v": 0
        },
        {
            "_id": "5a366fdfa7f73315269f46f7",
            "name": "Phase 4",
            "areaId": "5a302cc8b8ce9c3dc3f7ea93",
            "__v": 0
        }
 *    ]
 *  }
 */

router.get('/area_id/:id', categoryCtrl.getByAreaId);

// router.get('/', userCtrl.getAll );
// router.get('/:id', userCtrl.get );
// router.put('/:id', userCtrl.put );

export default router.routes();