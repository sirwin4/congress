/*represent the following information about Elizabeth's campaign.

    Her congressional district (you can use yours here)
    Her platform statements for the following issues.
        Taxes
        Jobs
        Infrastructure
        Health care
        Crime and enforcement
    URL for donation form
    Calendar of events
    Volunteer information
        Name
        Address
        Email
        Phone number
        Availability
        What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
    Biography
    Image gallery
        Head shot
        Picture of family
        Picture of constituents
    Mission statement
    URL for registering to vote*/

const platformStatements2 = Object.create({}, {
    taxes: {
        enumerable: true,
        value: "It'll all work out"
    },
    jobs: {
        enumerable: true,
        value: "It'll all work out"
    },
    infrastructure: {
        enumerable: true,
        value: "It'll all work out"
    },
    healthCare: {
        enumerable: true,
        value: "It'll all work out"
    },
    crimeAndEnforcement: {
        enumerable: true,
        value: "It'll all work out"
    },
})

// let headShotImage = document.createElement("IMG");
// let imageElement = document.getElementsByTagName(section)
// imageElement.appendChild(headShotImage)
// imageElement.src("https://cdn.history.com/sites/2/2014/01/barbara-jordan-P.jpeg")

const imageGallery2 = Object.create({}, {
    headShot: {
        enumerable: true,
        value:"It'll all work out"
    },
    pictureOfConstituents: {
        enumerable: true,
        value: "It'll all work out"
    },
    pictureOfFamily: {
        enumerable: true,
        value: "It'll all work out"
    },
    pictureOfConstituents: {
        enumerable: true,
        value: "It'll all work out"
    },
})

const volunteerInformation2 = Object.create({}, {
    name: {
        enumerable: true,
        value: "It'll all work out"
    },
    address: { 
        enumerable: true,
        value: "It'll all work out"
    },
     email: { 
        enumerable: true,
        value:"It'll all work out"
     },
    phoneNumber: { 
        enumerable: true,
        value:"It'll all work out"
    },
    availability: { 
        enumerable: true,
        value:"It'll all work out"
    }
})



const elizabethSanger = Object.create({}, {
    congressionalDistrict: {
        enumerable: true,
        value: "tn 2"
    },

//     platformStatements: {
//         enumerable: true,
//         value: platformStatements2
//  //       taxes: "It'll all work out",
//  //       jobs: "It'll all work out",
//  //       infrastructure: "It'll all work out",
//  //       healthCare: "It'll all work out",
// //        crimeAndEnforcement: "It'll all work out"

//     },
    
    donation: {
        enumerable: true,
       value: "www.makeone.com"
    },
    eventCalendar: {
        enumerable: true,
        value: "www.iknowthisdoesntwork.com/cal/"
    },


    
//     volunteerInformation: {
//         enumerable: true,
//         value: volunteerInformation2
//  //       value: name: "It'll all work out",
//  //       address: "It'll all work out",
//  //       email: "It'll all work out",
//  //       phoneNumber: "It'll all work out",
//  //       availability: "It'll all work out"

//     },

    biography: {
        enumerable: true,
        value: "www.ididathing.com"
    },
//     imageGallery: {
//         enumerable: true,
//         value: imageGallery2
//  //       value: headShot: "It'll all work out",
//  //       pictureOfFamily: "It'll all work out",
//  //       pictureOfConstituents: "It'll all work out"

//     },
    missionStatement: {
        enumerable: true,
        value: "do nothing but stand for everyone"
    },
    registration: {
        enumerable: true,
        value: "www.signonup.com"
    },

})



a = Object.keys(elizabethSanger)
let b = []
let c = []
for (let i = 0; i < a.length; i++) {
    
    b.push("elizabethSanger." + a[i])
}

for (let j = 0; j < b.length; j++) {
    c.push(b[j]);
}
let d = "I am done"
for (let k = 0; k < c.length; k++) {
     c[k] = d;
    
}
console.log(c)