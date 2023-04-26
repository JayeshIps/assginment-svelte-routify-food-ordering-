import { create, test, enforce, only } from "vest";

const deletesuite = create((data = {}, currentField) => {
    only(currentField);
  
    test("Deldishname", "This Field is Required", () => {
        enforce(data.Deldishname).isNotBlank();
      });
    
      test("Deldishname", "dishname must be at least 3 characters long", () => {
        enforce(data.Deldishname).longerThanOrEquals(3);
      });
  
      test('Deldishname', 'dishname should not contain numerical characters', () => {
          enforce(data.Deldishname).matches(/^[^0-9]*$/);
      });
});

export default deletesuite;