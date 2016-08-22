"use strict";
var not_equal_validator_1 = require("../src/validators/not-equal.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Not equal validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator(null));
tester.test(description, [
    { value: null, pass: false },
    { value: undefined, pass: true },
    { value: 0, pass: true }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator("test string"));
tester.test(description, [
    { value: "test string", pass: false },
    { value: "TEST STRING", pass: true },
    { value: "another string", pass: true },
    { value: 100, pass: true }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator(new Date(2020, 1, 0)));
tester.test(description, [
    { value: new Date(2020, 1, 0), pass: false },
    { value: new Date(2010, 1, 0), pass: true }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator(false));
tester.test(description, [
    { value: false, pass: false },
    { value: true, pass: true },
    { value: "false", pass: true }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new not_equal_validator_1.NotEqualValidator(1000));
tester.test(description, [
    { value: 1000, pass: false },
    { value: "1000", pass: true },
    { value: 500, pass: true },
    { value: -1000, pass: true }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVxdWFsLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90LWVxdWFsLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBa0MsdUNBQXVDLENBQUMsQ0FBQTtBQUMxRSwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksdUNBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNoQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUMzQixDQUFDLENBQUM7QUFFSCxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLHVDQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7SUFDckIsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDckMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN2QyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUM3QixDQUFDLENBQUM7QUFFSCxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLHVDQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Q0FDOUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxHQUFHLElBQUksbURBQXVCLENBQUMsSUFBSSx1Q0FBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0NBQ2pDLENBQUMsQ0FBQztBQUVILE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksdUNBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUM3QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0NBQy9CLENBQUMsQ0FBQyJ9