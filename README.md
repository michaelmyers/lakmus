# Lakmus
Fluent validation in TypeScript.

## Features
  - 20+ built-in validators
  - Refactoring-friendly (generic property selectors)
  - Multilanguage
 
Inspired by .NET [FluentValidation](https://github.com/JeremySkinner/FluentValidation)

## Demo
```typescript
export class Person {
    public id: number;
    public name: string;
    public address: Address;
    public phoneNumbers: PhoneNumber[];
    public hasDiscount: boolean;
    public discountValue: number;
}

export class Address {
    public country: string;
    public city: string;
    public street: string;
    public houseNumber: string;
}

export class PhoneNumber {
    public country: string;
    public code: string;
    public number: string;
}

export class PersonValidator extends Validator<Person> {
    constructor() {
        super();

        // not null & max length;
        this.ruleFor(x => x.name)
            .notNull()
            .maxLenght(100);

        // nested objection validation;
        this.ruleFor(x => x.address)
            .notNull()
            .setValidator(new AddressValidator());

        // collection validation;
        this.ruleFor(x => x.phoneNumbers)
            .notNull()
            .setCollectionValidator(new PhoneNumberValidator());

        this.when(x => x.hasDiscount, () => {
            this.ruleFor(x => x.discountValue)
                .notNull();
        });
    }
}

export class AddressValidator extends Validator<Address> {
    constructor() {
        super();

        this.ruleFor(x => x.city)
            .notNull().maxLenght(50);

        this.ruleFor(x => x.street)
            .notNull().maxLenght(50);
    }
}

export class PhoneNumberValidator extends Validator<PhoneNumber> {
    constructor() {
        super();

        this.ruleFor(x => x.country)
            .notNull().maxLenght(3);

        this.ruleFor(x => x.code)
            .notNull().maxLenght(5);

        // predicate and custom error message;
        this.ruleFor(x => x.number)
            .notNull().maxLenght(7)
            .must((number, phoneNumber) => (phoneNumber.code || "").length + (phoneNumber.country || "").length + (phoneNumber.number || "").length == 11)
            .withMessage("Please enter a valid phone number.");
    }
}

// set custom property name resolver: discountValue -> Discount Value
ValidatorOptions.propertyNameResolver = ApStyleTitleCasePropertyNameResolver;

// initialize object to validate;
var person = new Person();

// create validator;
var validator = new PersonValidator();
// or get it from factory (recommended) 
validator = ValidatorFactory.getValidator(PersonValidator);

// validate;
var result = validator.validate(person);

// process result;
if (result.isValid) {
    console.log("Is valid.");
}
else {
    console.log(result.errors.map(x => x.errorMessage).join("\n"));
}
```

## Licence
MIT