import { create, test, enforce, only } from "vest";

const deletesuite = create((data = {}, currentField) => {
    only(currentField);
  
    test("Deldishname", "This field is required", () => {
        enforce(data.Deldishname).isNotBlank();
      });
    
      test("Deldishname", "Dishname must be at least 3 characters long", () => {
        enforce(data.Deldishname).longerThanOrEquals(3);
      });
  
      test('Deldishname', 'Dishname should not contain numerical characters', () => {
          enforce(data.Deldishname).matches(/^[^0-9]*$/);
      });

      test('Deldishname', 'No trailing and leading spaces', () => {
        enforce(data.Deldishname.trim()).equals(data.Deldishname);
      });
});

export default deletesuite;