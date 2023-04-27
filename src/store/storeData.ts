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
    
  {dishId:1,dishname:"French Fries",price:750,description:"French Fries Description", image:"../image/image1.jpg"},
  {dishId:2,dishname:"Pizza",price:550,description:"Pizza Description", image:"../image/image2.jpg"},
  {dishId:3,dishname:"Burger",price:950,description:"Burger Description", image:"../image/image4.jpg"},
  {dishId:4,dishname:"Frankie",price:800,description:"Frankie Description", image:"../image/image5.jpg"},
  {dishId:5,dishname:"burger",price:450,description:"Veg burger Description", image:"../image/image11.jpg"},
  {dishId:6,dishname:"Gujrati Thali",price:750,description:"Gujrati Thali Description", image:"../image/image12.jpg"},
  {dishId:7,dishname:"Khaman",price:550,description:"Khaman Description", image:"../image/image13.jpg"},
  {dishId:8,dishname:"icecream",price:800,description:"icecream Description", image:"../image/image8.jpg"},
  {dishId:9,dishname:"Pizza",price:550,description:"Pizza Description", image:"../image/image15.jpg"},
  {dishId:10,dishname:"Panjabi Thali",price:800,description:"Panjabi Thali Description", image:"../image/image16.jpg"},
  {dishId:11,dishname:"Gujrati Thali",price:800,description:"Gujrati Thali Description", image:"../image/image14.jpg"},
  {dishId:12,dishname:"Noodles",price:550,description:"Noodles Description", image:"../image/image9.jpg"},
  {dishId:13,dishname:"Chocolate Shake",price:800,description:"Chocolate Shake Description", image:"../image/image10.jpg"},

]);

export const CartStore=writable([
  {cartId:1,dishId:1,dishname:"sandwiches",price:750,description:"khskdadhdjsadk",quantity:1, image:"../image/image1.jpg"},
  {cartId:2,dishId:8,dishname:"Pasta",price:800,description:"hello ehello",quantity:1, image:"../image/image13.jpg"},
]);