import { writable } from "svelte/store";

export const FeedBackStore=writable([

 {name:'Akshay',email:'akshay@gmail.com',Message:'The food was delicious!'},
 {name:'parth',email:'parth@gmail.com',Message:'The presentation of the dishes was very appealing.'},
 {name:'jayesh',email:'jayesh@gmail.com',Message:'The portion sizes were perfect - not too big, not too small.'},
 {name:'jitendra',email:'jitendra@gmail.com',Message:'very good taste'},
 {name:'hardik',email:'hardik@gmail.com',Message:'The portion sizes were perfect - not too big, not too small.'},
 {name:'hiren',email:'hiren@gmail.com',Message:'Overall, I had a great experience and would definitely recommend this restaurant to others.'},
 {name:'shyam',email:'shyam@gmail.com',Message:'The portion sizes were perfect - not too big, not too small.'},
 {name:'hitesh',email:'hitesh@gmail.com',Message:'best'},
 {name:'harsh',email:'harsh@gmail.com',Message:'The ambiance of the restaurant was very cozy and comfortable.'},
 {name:'sanjeev',email:'sanjeev@gmail.com',Message:'The presentation of the dishes was very appealing.'},
 {name:'lay',email:'lay@gmail.com',Message:'The presentation of the dishes was very appealing.'},
 {name:'heena',email:'heena@gmail.com',Message:'Overall, I had a great experience and would definitely recommend this restaurant to others.'},
 {name:'shivangi',email:'shivangi@gmail.com',Message:'The ambiance of the restaurant was very cozy and comfortable.'},
 {name:'prachi',email:'prachi@gmail.com',Message:'Overall, I had a great experience and would definitely recommend this restaurant to others.'},
 {name:'harish',email:'harish@gmail.com',Message:'The ambiance of the restaurant was very cozy and comfortable.'},
 {name:'bhvyansh',email:'bhvyansh@gmail.com',Message:'Overall, I had a great experience and would definitely recommend this restaurant to others.'},
 {name:'rana',email:'rana@gmail.com',Message:'The prices were reasonable for the quality of food and service provided.'},
 {name:'deep',email:'deep@gmail.com',Message:'The food was delicious!'},
 {name:'aayush',email:'aayush@gmail.com',Message:'The presentation of the dishes was very appealing.'},
 {name:'nihar',email:'nihar@gmail.com',Message:'The prices were reasonable for the quality of food and service provided.'},
 {name:'guarva',email:'guarva@gmail.com',Message:'very good taste'},
 {name:'shailesh',email:'shailesh@gmail.com',Message:'The ambiance of the restaurant was very cozy and comfortable.'},
 {name:'mohit',email:'mohit@gmail.com',Message:'The prices were reasonable for the quality of food and service provided.'},
 {name:'akshay',email:'akshay@gmail.com',Message:'The presentation of the dishes was very appealing.'},
 {name:'suresh',email:'suresh@gmail.com',Message:'The food was delicious!'},
]);

export const DishInfoStore=writable([
    
  {dishId:1,dishname:"sizzler",price:1000,description:"sizzler: splicy sizzler include pasta,panner,vegetable", image:"../image/sizzler.jpg"},
  {dishId:2,dishname:"Pancake",price:550,description:"A flat cake made of batter and cooked on a hot surface, syrup, fruit, or whipped cream", image:"../image/image2.jpg"},
  {dishId:3,dishname:"Breakfast dish",price:950,description:"Breakfast dish: A dish typically eaten in the morning as the first meal of the day, often consisting of eggs, bread, and other breakfast foods.", image:"../image/image4.jpg"},
  {dishId:4,dishname:"Frankie",price:250,description:"Franki: An Indian street food dish made with a wrap filled with spiced vegetables or meat, typically served with chutney or sauce", image:"../image/image5.jpg"},
  {dishId:5,dishname:"burger",price:350,description:"Burger: A classic American sandwich made with a juicy beef patty, cheese, lettuce, tomato, and condiments, served on a soft bun.", image:"../image/image11.jpg"},
  {dishId:6,dishname:"Gujrati Thali",price:650,description:"Gujarati Thali: A traditional meal from the Indian state of Gujarat consisting of a variety of vegetarian dishes served on a platter", image:"../image/image12.jpg"},
  {dishId:7,dishname:"Khaman",price:450,description:"Khaman: A popular Gujarati snack made from gram flour and steamed to perfection.", image:"../image/image13.jpg"},
  {dishId:8,dishname:"icecream",price:120,description:"Ice cream: A frozen dessert made of milk or cream, sugar, and various flavors such as vanilla, chocolate, and fruit.", image:"../image/image8.jpg"},
  {dishId:9,dishname:"Pizza",price:550,description:"Gujarati Thali: A traditional meal from the Indian state of Gujarat consisting of a variety of vegetarian dishes.", image:"../image/image15.jpg"},
  {dishId:10,dishname:"Panjabi Thali",price:800,description:"A traditional meal from the Indian state of Punjab consisting of a variety of vegetarian and non-vegetarian dishes.", image:"../image/image16.jpg"},
  {dishId:11,dishname:"Gujrati Thali",price:650,description:"Gujarati Thali: A traditional meal from the Indian state of Gujarat consisting of a variety of vegetarian dishes.  ", image:"../image/image14.jpg"},
  {dishId:12,dishname:"Noodles",price:550,description:"Noodles: A staple dish in many Asian cuisines", image:"../image/image9.jpg"},
  {dishId:13,dishname:"Chocolate Shake",price:800,description:"Ice cream: A frozen dessert made of milk or cream, sugar, and various flavors such as vanilla, chocolate, and fruit.", image:"../image/image10.jpg"},
  {dishId:14,dishname:"biryani",price:500,description:"biryani:Good taste of birayani include vegetable.", image:"../image/biryani.jpg"},
  {dishId:15,dishname:"paratha",price:350,description:"paratha: Paratha can be plain or stuffed with a variety of fillings, such as spiced mashed potatoes, paneer cheese.", image:"../image/paratha.jpg"},
  {dishId:16,dishname:"Garlic Nan",price:450,description:"Garlic Nan:Garlic naan is a type of Indian flatbread that is flavored with garlic and cooked in a tandoor oven", image:"../image/nan.jpg"},
  {dishId:17,dishname:"mangolassi",price:350,description:"mangolassi: A frozen dessert made of milk or cream, sugar, and various flavors such as vanilla, chocolate, and fruit.", image:"../image/mangolassi.jpg"},
  
  {dishId:18,dishname:"makki ki Roti",price:750,description:"makki_ki_Roti:Makki ki Roti is a type of flatbread made from maize flour, popular in the northern regions of India.", image:"../image/makki_ki_Roti.jpg"},
  {dishId:19,dishname:"Dhosa",price:340,description:"Dhosa:Dosa is a thin and crispy fermented crepe made from a batter of rice and black lentils, commonly eaten for breakfast or as a snack in South India.", image:"../image/image171.jpg"},
  {dishId:20,dishname:"Samosha",price:150,description:"Samosha:while samosa is a fried or baked pastry filled with spiced potatoes, peas, and sometimes meat, both originating from the Indian subcontinent.", image:"../image/image181.jpg"},
  {dishId:21,dishname:"Idli",price:200,description:"Idli: Idli is a thin and crispy fermented crepe made from a batter of rice and black lentils, commonly eaten for breakfast or as a snack in South India..", image:"../image/image191.jpg"},
  {dishId:22,dishname:"cake",price:800,description:"cake: A frozen dessert made of milk, sugar, and various flavors such as vanilla, chocolate, and fruit.", image:"../image/cake.jpg"},
  {dishId:23,dishname:"French Fries",price:150,description:"French fries: Crispy and golden on the outside,these fried potatoes are the perfect snack or side dish.", image:"../image/image1.jpg"},
  {dishId:24,dishname:"shake",price:650,description:"shake: A frozen dessert made of milk or cream, sugar, and various flavors such as vanilla, chocolate, and fruit.", image:"../image/shake1.jpg"},
  {dishId:25,dishname:"Samosha",price:150,description:"while samosa is a fried or baked pastry filled with spiced potatoes, peas, and sometimes meat, both originating from the Indian subcontinent..", image:"../image/image17.jpg"},
]);
export const CartStore=writable([
  {cartId:1,dishId:1,quantity:1},
  {cartId:2,dishId:2,quantity:1},
  {cartId:3,dishId:3,quantity:1},

]);

export const OrderStore=writable([
  {orderId:1,dishId:1,quantity:1},
  {orderId:2,dishId:2,quantity:2},
]);
