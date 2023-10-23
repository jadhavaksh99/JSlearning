let professor = {
    certificates: ['Hacker Rank participation', 'Certification in IFE course', 'Certificate in Adv Programming']
    // education: "Mtech",
    // Subject: "physics",
    // Name: "Surya",
    // college: "PVG",
    //  degrees: {
    //       engineering: "CSC",
    //       PHD: "Adv Computing"
    //   },
    // experience: "5years"
}
professor.education = "Mtech";
professor.subject = "Physics";
professor.Name = "Surya";
professor.college = "PVG";
professor.degrees = {engineering: "CSC", PHD: "Adv Computing"};
// professor.certificates = ['Hacker Rank participation', 'Certification in IFE course', 'Certificate in Adv Programming'];
professor.totalExperience = "14 years";
professor.certificates.push("Oracle Certificate")

console.log(`Last Element of Array certificates is ${professor.certificates[professor.certificates.length - 1]}`);
console.log(professor);

for (const index of professor.certificates) {
    console.log(index);
}
