import Router from 'koa-router';
import * as districtCtrl from '../controller/district';

const router = new Router({
  prefix: '/district',
});

/**
 * @api {post} /district/ post district
 * @apiName Post District
 * @apiGroup District
 *
 * @apiParam {String} name name of district.
 * @apiParam {String} areaId id of area.
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} data data of new district created
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": {
 *      "__v": 0,
 *      "name": "nazimabad",
 *      "areaId": "5a194f403fa4da405a9f607c",
 *      "_id": "5a358d2eb548412d992bff3c"
 *      "category": []
 *    }
 *  }
 */

router.post('/', districtCtrl.post );

/**
 * @api {post} /district/insert_category/:id post Add Category in District
 * @apiName insert category in district 
 * @apiGroup District
 *
 * @apiParam {Number} id district valid unique ID.
 * @apiParam {Number} categoryId vategory valid unique ID.
 * @apiParam {Number} priceAvg .
 * @apiParam {Number} priceCategory .
 * @apiParam {Number} priceGeneral .
 * @apiParam {Number} priceEffective .
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *  { 
 *    "ok": 1
 *  }
**/

router.post('/insert_category/:id', districtCtrl.insertCategory );

/**
 * @api {put} /district/update_category/:id put Update Category in District
 * @apiName update category in district 
 * @apiGroup District
 *
 * @apiParam {Number} id district valid unique ID.
 * @apiParam {Number} categoryId vategory valid unique ID.
 * @apiParam {Number} priceAvg .
 * @apiParam {Number} priceCategory .
 * @apiParam {Number} priceGeneral .
 * @apiParam {Number} priceEffective .
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *  { 
 *    "ok": 1
 *  }
**/


router.put('/update_category/:id', districtCtrl.updateCategory );

/**
 * @api {get} /district/ get all district
 * @apiName Get all district
 * @apiGroup District
 *
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} Object array of all area object
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *   "data": [
 *        {
            "_id": "5a2d85d941908e5b64890def",
            "name": "old gYM",
            "areaId": "5a194f403fa4da405a9f607c",
            "__v": 0,
            "category": [
                {
                    "priceEffective": "30000",
                    "priceGeneral": "20000",
                    "priceCategory": "10000",
                    "priceAvg": "5000",
                    "_id": "5a1ad1aeee9cfd170937c1df",
                    "categoryName": "phase 2"
                },
                {
                    "priceEffective": "10",
                    "priceGeneral": "30",
                    "priceCategory": "02",
                    "priceAvg": "50",
                    "_id": "5a19b304178f3629447a8330",
                    "categoryName": "blah"
                }
            ]
        },
        {
            "_id": "5a2d866b41908e5b64890df0",
            "name": "new def",
            "areaId": "5a194f403fa4da405a9f607c",
            "__v": 0,
            "category": [
                {
                    "priceEffective": "3",
                    "priceGeneral": "2",
                    "priceCategory": "1",
                    "priceAvg": "1",
                    "_id": "5a19b304178f3629447a8330",
                    "categoryName": "phase 1"
                }
            ]
        },
        {
            "_id": "5a3591c42218c14193fa1dd5",
            "name": "api dist",
            "areaId": "5a194f403fa4da405a9f607c",
            "__v": 0,
            "category": []
        }
 *   ]
 *  }
 */

router.get('/', districtCtrl.getAll);

/**
 * @api {get} /district/ get all district
 * @apiName Get all district
 * @apiGroup District
 *
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} Object array of all area object
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *   "data": [
 *        {
            "_id": "5a2d85d941908e5b64890def",
            "name": "old gYM",
            "areaId": "5a194f403fa4da405a9f607c",
            "__v": 0,
            "category": [
                {
                    "priceEffective": "30000",
                    "priceGeneral": "20000",
                    "priceCategory": "10000",
                    "priceAvg": "5000",
                    "_id": "5a1ad1aeee9cfd170937c1df",
                    "categoryName": "phase 2"
                },
                {
                    "priceEffective": "10",
                    "priceGeneral": "30",
                    "priceCategory": "02",
                    "priceAvg": "50",
                    "_id": "5a19b304178f3629447a8330",
                    "categoryName": "blah"
                }
            ]
        },
        {
            "_id": "5a2d866b41908e5b64890df0",
            "name": "new def",
            "areaId": "5a194f403fa4da405a9f607c",
            "__v": 0,
            "category": [
                {
                    "priceEffective": "3",
                    "priceGeneral": "2",
                    "priceCategory": "1",
                    "priceAvg": "1",
                    "_id": "5a19b304178f3629447a8330",
                    "categoryName": "phase 1"
                }
            ]
        },
        {
            "_id": "5a3591c42218c14193fa1dd5",
            "name": "api dist",
            "areaId": "5a194f403fa4da405a9f607c",
            "__v": 0,
            "category": []
        }
 *   ]
 *  }
 */

router.get('/search_district', districtCtrl.searchDistrict);

// router.get('/:id', categoryCtrl.getById );
// router.get('/area_id/:id', categoryCtrl.getByAreaId);

// router.get('/:id', userCtrl.get );
// router.put('/:id', userCtrl.put );

export default router.routes();