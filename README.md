# ECOMMERCE

# npm init

# npm i dotenv

# creted folder .env to specify port num in seperate file

# create Config folder(base ) -> server.config.js

# create server.js file @ base level

# npm i express and then build server

# create routes folder->index.js

# import index.js in server file and will create some route and run

# Create Controller foledr --> category.cpntroller.js

# from route index cut and make new file category.controller.js and pase it to segregate code 1.getAllCategories 2.getCategoryById and then import that file in route index

# npm i sequelize mysql2 -> to make connection with mysql db

# create db in mysql workbench ecommerce_db

# Now create db.config(config foldr) just to have connection with db(ecommerce_db)

# CReate model(folder) -> category.js file

# in the category.js - we define category table by inserting -> id, name

# path of action UI => route => controller => model => sqlconnection(db)

# in category.controller -> create table to create table in db and then commented

# in category.controller -> insertCategory and check the same in sql

# will create route for products too

# create route->category.route.js and product.route.js

# segregate category and product api from index and paste it in respective file in same folder

# now will create product controller to interact with db and will separate code from route file

# create model-> product.js

# create table function is not needed it will create directly as we imported Products file

# create insertProduct in product.controller.js and invoke it in createTable only else it will show table not exist

# now node server.js and in browser get all categories, products, and with ID respectively

# Now let us add post api in category route fileS

# npm i body-parser (to get req.body)

# create addNewCategory for post API

# Now open POSTMAN in browser and select POST call to add new category

# in server.js import bodyparser and use it and all middleware should go above router iniftynifty n server

# Added delete call and create controller for that and check it in the POSTMAN

# now lets add put api for category and then check the same in POSTMAN

# now lets handle the error using Try Catch method

# with try catch in addNewMethod we can handle error - If user dint pass name, then also sever is up and running condition

# We will create the error handler Middleware -> errrorHandler and import it in server.js

not: in sevr.js error handler use always end of all middleware

# if we use next(err) then only errorHandler comes into picture

# deleteCategoryById ->>> catch handle by if else or by try catch

# Product POST api is added
