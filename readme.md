{
	"info": {
		"_postman_id": "746685ee-c1dc-4b5d-a6cd-898413a75c82",
		"name": "Blog-backend",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39588882"
	},
	"item": [
		{
			"name": "New Request",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://blog-backend-dqfo.onrender.com/user",
					"protocol": "https",
					"host": [
						"blog-backend-dqfo",
						"onrender",
						"com"
					],
					"path": [
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "https://blog-backend-dqfo.onrender.com/user",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\":\"sam\",\r\n    \"email\":\"sam@gmail.com\",\r\n    \"password\":\"sam\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blog-backend-dqfo.onrender.com/user",
					"protocol": "https",
					"host": [
						"blog-backend-dqfo",
						"onrender",
						"com"
					],
					"path": [
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "https://blog-backend-dqfo.onrender.com/blog",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\":\"anime\",\r\n    \"content\":\"Japanese animation\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blog-backend-dqfo.onrender.com/blog",
					"protocol": "https",
					"host": [
						"blog-backend-dqfo",
						"onrender",
						"com"
					],
					"path": [
						"blog"
					]
				}
			},
			"response": []
		}
	]
}
