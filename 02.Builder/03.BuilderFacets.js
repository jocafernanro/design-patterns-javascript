class Person
{
    constructor()
    {
        // address
        this.streetAddress = this.postCode = this.city = '';

        // employment
        this.companyName = this.position = '';
        this.annualIncome = 0;
    }

    toString()
    {
        return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postCode}\n`
        + `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
    }
}

class PersonBuilder
{
    constructor(person = new Person())
    {
        this.person = person;
    }

    get lives()
    {
        return new PersonAddressBuilder(this.person);
    }

    get works()
    {
        return new PersonJobBuilder(this.person);
    }

    build()
    {
        return this.person;
    }
}

class PersonJobBuilder extends PersonBuilder
{
    constructor(person)
    {
        super(person);
    }

    at(companyName)
    {
        this.person.companyName = companyName;
        return this;
    }

    asA(position)
    {
        this.person.position = position;
        return this;
    }

    earning(annualIncome){
        this.person.annualIncome = annualIncome;
        return this;
    }
}

class PersonAddressBuilder extends PersonBuilder
{
    constructor(person) {
        super(person);
    }

    at(streetAddress)
    {
        this.person.streetAddress = streetAddress;
        return this;
    }

    withPostCode(postCode)
    {
        this.person.postCode = postCode;
        return this;
    }

    in(city)
    {
        this.person.city = city;
        return this;
    }
}

let pb = new PersonBuilder();
let person = pb
    .lives.at('123 London Road').in('London').withPostCode('SW12BC')
    .works.at('Kabrikam').asA('Engineer').earning(12300)
    .build();
console.log(person.toString())