define({ "api": [
  {
    "type": "get",
    "url": "/area/",
    "title": "get all area",
    "name": "Get_all_Area",
    "group": "Area",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>success flag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>array of all area object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n \"data\": [\n     {\n         \"_id\": \"5a194aa10afff331ddd1ebcd\",\n         \"name\": \"Defence\",\n         \"__v\": 0\n     },\n     {\n         \"_id\": \"5a194f403fa4da405a9f607c\",\n         \"name\": \"Baharia\",\n         \"__v\": 0\n     },\n     {\n         \"_id\": \"5a1968099d22c5153850ea43\",\n         \"name\": \"ponka\",\n         \"__v\": 0\n     },\n     {\n         \"_id\": \"5a358d2eb548412d992bff3c\",\n         \"name\": \"nazimabad\",\n         \"__v\": 0\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/area.js",
    "groupTitle": "Area"
  },
  {
    "type": "get",
    "url": "/area/:id",
    "title": "get area by ID",
    "name": "Get_an_area_by_ID",
    "group": "Area",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>area unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>success flag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of an area</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n \"data\": {\n         \"_id\": \"5a194aa10afff331ddd1ebcd\",\n         \"name\": \"Defence\",\n         \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/area.js",
    "groupTitle": "Area"
  },
  {
    "type": "post",
    "url": "/area/",
    "title": "post area",
    "name": "Post_Area",
    "group": "Area",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of area.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>success flag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>data of new area created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": {\n    \"__v\": 0,\n    \"name\": \"nazimabad\",\n    \"_id\": \"5a358d2eb548412d992bff3c\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/area.js",
    "groupTitle": "Area"
  },
  {
    "type": "get",
    "url": "/district/",
    "title": "get all district",
    "name": "Get_all_district",
    "group": "District",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>success flag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>array of all area object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n \"data\": [\n      {\n           \"_id\": \"5a2d85d941908e5b64890def\",\n           \"name\": \"old gYM\",\n           \"areaId\": \"5a194f403fa4da405a9f607c\",\n           \"__v\": 0,\n           \"category\": [\n               {\n                   \"priceEffective\": \"30000\",\n                   \"priceGeneral\": \"20000\",\n                   \"priceCategory\": \"10000\",\n                   \"priceAvg\": \"5000\",\n                   \"_id\": \"5a1ad1aeee9cfd170937c1df\",\n                   \"categoryName\": \"phase 2\"\n               },\n               {\n                   \"priceEffective\": \"10\",\n                   \"priceGeneral\": \"30\",\n                   \"priceCategory\": \"02\",\n                   \"priceAvg\": \"50\",\n                   \"_id\": \"5a19b304178f3629447a8330\",\n                   \"categoryName\": \"blah\"\n               }\n           ]\n       },\n       {\n           \"_id\": \"5a2d866b41908e5b64890df0\",\n           \"name\": \"new def\",\n           \"areaId\": \"5a194f403fa4da405a9f607c\",\n           \"__v\": 0,\n           \"category\": [\n               {\n                   \"priceEffective\": \"3\",\n                   \"priceGeneral\": \"2\",\n                   \"priceCategory\": \"1\",\n                   \"priceAvg\": \"1\",\n                   \"_id\": \"5a19b304178f3629447a8330\",\n                   \"categoryName\": \"phase 1\"\n               }\n           ]\n       },\n       {\n           \"_id\": \"5a3591c42218c14193fa1dd5\",\n           \"name\": \"api dist\",\n           \"areaId\": \"5a194f403fa4da405a9f607c\",\n           \"__v\": 0,\n           \"category\": []\n       }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/district.js",
    "groupTitle": "District"
  },
  {
    "type": "post",
    "url": "/district/",
    "title": "post district",
    "name": "Post_District",
    "group": "District",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of district.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "areaId",
            "description": "<p>id of area.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>success flag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>data of new district created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": {\n    \"__v\": 0,\n    \"name\": \"nazimabad\",\n    \"areaId\": \"5a194f403fa4da405a9f607c\",\n    \"_id\": \"5a358d2eb548412d992bff3c\"\n    \"category\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/district.js",
    "groupTitle": "District"
  },
  {
    "type": "post",
    "url": "/district/insert_category/:id",
    "title": "post Add Category in District",
    "name": "insert_category_in_district",
    "group": "District",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>district valid unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryId",
            "description": "<p>vategory valid unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceAvg",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceCategory",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceGeneral",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceEffective",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{ \n  \"ok\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/district.js",
    "groupTitle": "District"
  },
  {
    "type": "put",
    "url": "/district/update_category/:id",
    "title": "put Update Category in District",
    "name": "update_category_in_district",
    "group": "District",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>district valid unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryId",
            "description": "<p>vategory valid unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceAvg",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceCategory",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceGeneral",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceEffective",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{ \n  \"ok\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/district.js",
    "groupTitle": "District"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_mfahad_Documents_workspace_foundaion_backend_doc_main_js",
    "groupTitle": "_home_mfahad_Documents_workspace_foundaion_backend_doc_main_js",
    "name": ""
  }
] });
