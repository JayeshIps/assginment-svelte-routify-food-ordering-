import { create, test, skipWhen, enforce, warn, only } from "vest";

const suite = create((data = {}, currentField) => {
    only(currentField);
  
    test("username", "This Field is Required", () => {
      enforce(data.username).isNotBlank();
    });
  
    test("username", "Username must be at least 3 characters long", () => {
      enforce(data.username).longerThanOrEquals(3);
    });

    test('username', 'username should not contain numerical characters', () => {
        enforce(data.username).matches(/^[^0-9]*$/);
    });

    test("email","This Field is Required",()=>{
        enforce(data.email).isNotBlank();
    });

    test('email', 'Email must be valid.', () => {
        enforce(data.email).matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address');
    });

    test('message','This Field is Required',()=>{
        enforce(data.message).isNotBlank();
    });
   
    test('message', 'message should not contain numerical characters', () => {
        enforce(data.message).matches(/^[^0-9]*$/);
    });


    test("dishname", "This Field is Required", () => {
        enforce(data.dishname).isNotBlank();
      });
    
      test("dishname", "dishname must be at least 3 characters long", () => {
        enforce(data.dishname).longerThanOrEquals(3);
      });
  
      test('dishname', 'dishname should not contain numerical characters', () => {
          enforce(data.dishname).matches(/^[^0-9]*$/);
      });

      test("price", "This Field is Required", () => {
        enforce(data.price).isNotBlank();
      });
    
     test('description','This Field is Required',()=>{
        enforce(data.description).isNotBlank();
      });
   
    test('description', 'description should not contain numerical characters', () => {
        enforce(data.description).matches(/^[^0-9]*$/);
      });
    
});

export default suite;