import Router from 'koa-router';
import * as areaCtrl from '../controller/area';

const router = new Router({
  prefix: '/area',
});

/**
 * @api {post} /area/ post area
 * @apiName Post Area
 * @apiGroup Area
 *
 * @apiParam {String} name name of area.
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} data data of new area created
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": {
 *      "__v": 0,
 *      "name": "nazimabad",
 *      "_id": "5a358d2eb548412d992bff3c"
 *    }
 *  }
 */

router.post('/', areaCtrl.post );

/**
 * @api {get} /area/ get all area
 * @apiName Get all Area
 * @apiGroup Area
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
 *       {
 *           "_id": "5a194aa10afff331ddd1ebcd",
 *           "name": "Defence",
 *           "__v": 0
 *       },
 *       {
 *           "_id": "5a194f403fa4da405a9f607c",
 *           "name": "Baharia",
 *           "__v": 0
 *       },
 *       {
 *           "_id": "5a1968099d22c5153850ea43",
 *           "name": "ponka",
 *           "__v": 0
 *       },
 *       {
 *           "_id": "5a358d2eb548412d992bff3c",
 *           "name": "nazimabad",
 *           "__v": 0
 *       }
 *   ]
 *  }
 */

router.get('/', areaCtrl.getAll );

/**
 * @api {get} /area/:id get area by ID
 * @apiName Get an area by ID
 * @apiGroup Area
 * 
 * @apiParam {Number} id area unique ID.
 *
 * @apiSuccess {String} success success flag
 * @apiSuccess {Object} Object Object of an area
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *   "data": {
 *           "_id": "5a194aa10afff331ddd1ebcd",
 *           "name": "Defence",
 *           "__v": 0
 *    }
 *  }
 */

router.get('/:id', areaCtrl.getById );

// router.get('/', userCtrl.getAll );
// router.get('/:id', userCtrl.get );
// router.put('/:id', userCtrl.put );

export default router.routes();