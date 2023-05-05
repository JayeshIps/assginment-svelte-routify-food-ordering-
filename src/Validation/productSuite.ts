import { create, test, enforce, only } from "vest";

const suite = create((data = {}, currentField) => {
    only(currentField);
  
    test("dishname", "This field is required.", () => {
        enforce(data.dishname).isNotBlank();
      });
    
      test("dishname", "dishname must be at least 3 characters long", () => {
        enforce(data.dishname).longerThanOrEquals(3);
      });
  
      test('dishname', 'dishname should not contain numerical characters', () => {
          enforce(data.dishname).matches(/^[^0-9]*$/);
      });

      test("price", "This field is required.", () => {
        enforce(data.price).isNotBlank();
      });
    
     test('description','This field is required',()=>{
        enforce(data.description).isNotBlank();
      });
   
    test('description', 'description should not contain numerical characters', () => {
        enforce(data.description).matches(/^[^0-9]*$/);
      });

      test("image", "This field is required.", () => {
        enforce(data.image).isNotBlank();
      });
    
});

export default suite;