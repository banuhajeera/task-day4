// Json in itrate over all for loop 
const userDetail ={
    name:'hajeera',
    ID:531,
    location:'chennai',
    bloodGroup:"o +ve",
}

//for in 
 for(var i in userDetail){
    console.log('keys',i);
    console.log('values',userDetail[i]);
 }

 const keys=Object.keys(userDetail)

 const values=keys.map((values)=>{
    return userDetail[values]
} )

//for loop
for (let i=0;i<values.length;i++){
    console.log('for loops of values',values[i])
}


for(let i=0;i<keys.length;i++){
    console.log('for loops of keys',keys[i])
}



//for of 

for (var keys1 of keys){
    console.log('for of keys',keys1)
}
for( var values1 of values){
    console.log('for of values',values1);
}

//for Each

keys.forEach((keys)=>{
    console.log('userdetail',userDetail[keys])
    
})


// ----------------------------------------------------------------------------------

// create a own resume in  JSON format


JSONResume={
    name : "HAJEERA BANU.G",
    email : "hajeerabanu95@gmail.com",
    contact:9092488101,
    carreerObjective :'To build a career in an organization, where I can efficiently utilize my skills and thereby growalong with the organization.',
    EducationalQualification:{
        course:'BSC electronics and communication science',
        year:'2013-2016',
        percentage:'67.9%' },
       BioDat:{
        FatherName :'M.GHOUSE KHAN',
        PermanentAddress:"No.10 M.H Road 1 st line Perambur Chennai- 600 011",
        DateOfBirth:'30-11-1995',
        Sex:'Female'
     }
}


    


