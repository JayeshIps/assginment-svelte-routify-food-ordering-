import { create, test,enforce, only } from "vest";

const suite = create((data = {}, currentField) => {
    only(currentField);
  
    test("username", "This Field is Required", () => {
      enforce(data.username).isNotBlank();
    });
  
    test("username", "Username must be at least 3 characters long", () => {
      enforce(data.username).longerThanOrEquals(3);
    });

    test('username', 'Username should not contain numerical characters', () => {
        enforce(data.username).matches(/^[^0-9]*$/);
    });

    test('username', 'No trailing and leading spaces', () => {
        enforce(data.username.trim()).equals(data.username);
    });


    test("email","This field is required",()=>{
        enforce(data.email).isNotBlank();
    });

    test('email', 'Email must be valid.', () => {
        enforce(data.email).matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address');
    });

    test('email', 'No trailing and leading spaces', () => {
        enforce(data.email.trim()).equals(data.email);
    });

    test('message','This field is required',()=>{
        enforce(data.message).isNotBlank();
    });
   
    test('message', 'Message should not contain numerical characters', () => {
        enforce(data.message).matches(/^[^0-9]*$/);
    });

    test('message', 'No trailing and leading spaces', () => {
        enforce(data.message.trim()).equals(data.message);
      });


    
    
});

export default suite;