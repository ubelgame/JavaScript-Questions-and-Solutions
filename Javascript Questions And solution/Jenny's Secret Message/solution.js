//Jenny has written a function that returns a greeting for a user.
//However, she's in love with Johnny, and would like to greet him slightly different.
//She added a special case to her function, but she made a mistake.

//Can you help her?

// Faulty code 
// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }


// Solution 
// the problrm is just the place ment of the if statement.  
function greet(name){
    if(name === "Johnny"){
    // return "Hello, my love! \n I so miss you very much. ";
    console.log("Hello, my love! \nHow i so miss you very much. ")
}
    else{
        // return "Hello, " + name + ", its been a while";
        console.log("Hello, " + name + ", its been a while");
    }
  
}
 greet('John');