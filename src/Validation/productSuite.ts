import { create, test, enforce, only } from "vest";

const suite = create((data = {}, currentField) => {
    only(currentField);
  
    test("dishname", "This field is required.", () => {
        enforce(data.dishname).isNotBlank();
      });
    
      test("dishname", "Dishname must be at least 3 characters long", () => {
        enforce(data.dishname).longerThanOrEquals(3);
      });
  
      test('dishname', 'Dishname should not contain numerical characters', () => {
          enforce(data.dishname).matches(/^[^0-9]*$/);
      });

      test('dishname', 'No trailing and leading spaces', () => {
          enforce(data.dishname.trim()).equals(data.dishname);
      });

      test("price", "This field is required.", () => {
        enforce(data.price).isNotBlank();
      });
    
     test('description','This field is required',()=>{
        enforce(data.description).isNotBlank();
      });
   
      test('description', 'Description should not contain numerical characters', () => {
        enforce(data.description).matches(/^[^0-9]*$/);
      });

      test('description', 'No trailing and leading spaces', () => {
        enforce(data.description.trim()).equals(data.description);
      });

      test("image", "This field is required.", () => {
        enforce(data.image).isNotBlank();
      });
    
});

export default suite;