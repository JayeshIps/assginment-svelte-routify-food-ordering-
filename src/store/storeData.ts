import { writable } from "svelte/store";

export const FeedBackStore=writable([

 {name:'Akshay',email:'akshay@gmail.com',Message:'good'},
 {name:'parth',email:'parth@gmail.com',Message:'very good taste'},
 {name:'jayesh',email:'jayesh@gmail.com',Message:'best'},
 {name:'jitendra',email:'jitendra@gmail.com',Message:'very good taste'},
 {name:'hardik',email:'hardik@gmail.com',Message:'good'},
 {name:'hiren',email:'hiren@gmail.com',Message:'good'},
 {name:'shyam',email:'shyam@gmail.com',Message:'good'},
 {name:'hitesh',email:'hitesh@gmail.com',Message:'best'},
 {name:'harsh',email:'harsh@gmail.com',Message:'best'},
 {name:'sanjeev',email:'sanjeev@gmail.com',Message:'very good taste'},
 {name:'lay',email:'lay@gmail.com',Message:'best'},
 {name:'heena',email:'heena@gmail.com',Message:'best'},
 {name:'shivangi',email:'shivangi@gmail.com',Message:'best'},
 {name:'prachi',email:'prachi@gmail.com',Message:'best'},
 {name:'harish',email:'harish@gmail.com',Message:'good'},
 {name:'bhvyansh',email:'bhvyansh@gmail.com',Message:'best'},
 {name:'rana',email:'rana@gmail.com',Message:'best'},
 {name:'deep',email:'deep@gmail.com',Message:'best'},
 {name:'aayush',email:'aayush@gmail.com',Message:'good'},
 {name:'nihar',email:'nihar@gmail.com',Message:'best'},
 {name:'guarva',email:'guarva@gmail.com',Message:'very good taste'},
 {name:'shailesh',email:'shailesh@gmail.com',Message:'best'},
 {name:'mohit',email:'mohit@gmail.com',Message:'very good taste'},
 {name:'akshay',email:'akshay@gmail.com',Message:'good'},
 {name:'suresh',email:'suresh@gmail.com',Message:'very good taste'},
]);

export const DishInfoStore=writable([
    
  {dishId:1,dishname:"sandwiches",price:750,description:"khskdadhdjsadk", image:"../image/imag1.jpg"},
  {dishId:2,dishname:"Pizza",price:550,description:"good test", image:"../image/image2.jpg"},
  {dishId:3,dishname:"Burger",price:950,description:"dsdsdfsdf", image:"../image/image3.jpg"},
  {dishId:4,dishname:"Pasta",price:800,description:"hello ehello", image:"../image/image4.jpg"},
  {dishId:5,dishname:"burger",price:450,description:"Veg burger", image:"../image/image5.jpg"},
  {dishId:6,dishname:"sandwich",price:750,description:"khskdadhdjsadk", image:"../image/imag1.jpg"},
  {dishId:7,dishname:"Pizza",price:550,description:"good test", image:"../image/image2.jpg"},
  {dishId:8,dishname:"Pasta",price:800,description:"hello ehello", image:"../image/image4.jpg"},

]);

export const CartStore=writable([
  {dishId:1,dishname:"sandwiches",price:750,description:"khskdadhdjsadk",quantity:1, image:"../image/imag1.jpg"},
  {dishId:8,dishname:"Pasta",price:800,description:"hello ehello",quantity:1, image:"../image/image4.jpg"},
]);