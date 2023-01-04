// country state and cities data
export const cscData = {
    countries: [
        {
            name: "Germany",
            states: [
                {name: "Germany-State1", cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]},
                {name: "Germany-State2", cities: ["City2A", "City2B", "City2C"]},
                {name: "Germany-State3", cities: ["City3A", "City3B", "City3C"]},
            ]
        },
        {
            name: "Spain",
            states: [
                {name: "Spain-State1", cities: ["Barcelona", "Manchester"]},
                {name: "Spain-State2", cities: ["CitySpan2A", "CitySpan2B", "CitySpan2C"]},
                {name: "Spain-State3", cities: ["CitySpan3A", "CitySpan3B", "CitySpan3C"]}
            ]
        },
        {
            name: "USA",
            states: [
                {name: "American-State", cities: ["Downers Grove", "New York", "Washington", "Seattle"]}]
        },
        {
            name: "Mexico",
            states: [
                {name: "Merican-State1", cities: ["Puebla"]},
                {name: "Merican-State2", cities: ["MexicanCity2"]},
                {name: "Merican-State3", cities: ["MexicanCity3"]}]
        },
        {
            name: "India",
            states: [
                {name: "Maharashtra", cities: ["Mumbai", "Pune", "Nashik"]},
                {name: "UttarPradesh", cities: ["Agra", "Meerut", "Kanpur"]},
                {name: "Karnataka", cities: ["Bangalore", "Mangalore", "Mysore"]}]
        }
    ]
};


// all users data for crud operations
export const usersData = {
    ids: [1, 2, 3, 4, 5],
    entities: {
        1: {
            id: 1,
            firstName: "Radhe",
            lastName: "Mohan",
            emailId: "radhe.mohan@aol.com",
            mobileNo: 8787878781,
            addressOne: "lokhandwala",
            addressTwo: "andheri west",
            country: 'India',
            state: 'maharashtra',
            city: "mumbai",
            zipCode: 560054
        },
        2: {
            id: 2,
            firstName: "Mukesh",
            lastName: "Pal",
            emailId: "mukesh.pal@aol.com",
            mobileNo: 8787878782,
            addressOne: "domlur",
            addressTwo: "mahadevapura",
            country: 'India',
            state: 'karnataka',
            city: "bangalore",
            zipCode: 460054
        },
        3: {
            id: 3,
            firstName: "Mukul",
            lastName: "Sai",
            emailId: "mukul.sai@aol.com",
            mobileNo: 8787878783,
            addressOne: "radha nagar",
            addressTwo: "vrindavan",
            country: 'India',
            state: 'uttar-pradesh',
            city: "mathura",
            zipCode: 202005
        },
        4: {
            id: 4,
            firstName: "Jai",
            lastName: "Raj",
            emailId: "jai.raj@aol.com",
            mobileNo: 8787878784,
            addressOne: "lotus marg",
            addressTwo: "lotus colony",
            country: 'India',
            state: 'uttar-pradesh',
            city: "agra",
            zipCode: 202008
        },
        5: {
            id: 5,
            firstName: "Manju",
            lastName: "Gupta",
            emailId: "manju.gupta@aol.com",
            mobileNo: 8787878785,
            addressOne: "chandni-chowk",
            addressTwo: "nehru-place",
            country: 'India',
            state: 'Delhi',
            city: "New-Delhi",
            zipCode: 320054
        },
    }
}
