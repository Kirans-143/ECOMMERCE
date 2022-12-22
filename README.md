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

# AddNewCategory error is handled when no name is passed

# create middleware---> requestValidator.js

Note: requestValidator addedf in route just afert route hit and before the route actually got executed (just like middelware)

# Added error handler for product controlle i.e when client pass product's categoryId then they should get only that product and if they pass out of categoryId then it should handle it

# Also Added the filter for getallproduct

# added filter for min and max price product

# Handeled all possible error categoyId, minPrice and maxPrice combination

### Refactored Code###

# inserted createTable and insert category in server.js file only and removed from category controller so that whenever server is up it will create table and insert the category

# In the server file created the relationship betn the category and products by **.hasMany** method which will create the foriegn key categoryId in products table and hence we have not added create table for products coz with this it will automatically create the products table

# we are inserting the products by post call in router via the POSTMAN

# in product post i've inserProduct and addNewProduct method

# In insertProduct i've added bulkCreate method ie. by postman when we call post route it will add all products but problem is we cannot add new products coz it will over write same products

# In addNewProduct i've added create method wher i can add as many product as i want withot any overwritting

### Authentication N Authorization

# Now lets add User & Role model in model folder

# create index.js in model to establish the relation between roles and user

# in server.js => create insertRoles function

# now adding auth route,controller

# npm i bcryptjs => for encryption

# npm i jsonwebtoken

# lets add signup and signin method in auth controller and also include it in aurh route

# Now go to POSTMAN and with POST selected got with auth/signup => body => raw => json and enter username, password, email and roles=["admin or user]. And After that go to db and check user table and it should be included with the user which we have added by postman

# to add secrete key config => auth.config.js

# Now go to POSTMAN with POST => auth/signin=> body => raw => json and enter the usernam and password as passed from signin and should get token generated

# Added veryfy method for signup and sigin in the middleware and used it in auth.route. And checked the same using POSTMAN

# with this we can verify the user role wheter exist or not if not then set user role to "user" and also to veryfy whether user is already existed or new user

# added authJwt.js to verify the token Postman => add products => signup => signin => copy the token => post header => x-access-token and pasete token => all product should visible

# Now lets create "Cart" model and also index.js(model) we will establish the relation between cart and products

# Create cart.route.js in routes folder and include it in index.js(route)

# create cart.controller.js in controller

# in cart controller we will add createCart, updateCart and getCart method

# after this go to Postman => add products=> signup => signin => create cart => update cart (Note: always pass productIds in array like [2,3,4] and the in postman we should get sum of all carts );

# Kiran
