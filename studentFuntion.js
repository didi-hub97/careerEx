// 1. JAMB-style pass/fail function
function checkJambScore(score) {
    if (score >= 180) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  }
  
  // 2. Voter eligibility checker
  function checkVotingEligibility(age) {
    return age >= 18 ? "You are eligible to vote" : "Not eligible";
  }
  
  // 3. Grade evaluator
  function evaluateStudent(name, score) {
    if (score >= 90) {
      return "Excellent";
    } else if (score >= 75) {
      return "Good";
    } else if (score >= 50) {
      return "Average";
    } else {
      return "Fail";
    }
  }
  
  // 4. Access control with two booleans
  function checkAccess(hasID, isAbove18) {
    return hasID && isAbove18 ? "Access granted" : "Access denied";
  }
  
  // 5. Pass/fail for loop
  function evaluateScores(scores) {
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] > 50) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    }
  }
  
  // 6. Arrow function for subject pass check
  const passedBothSubjects = (math, english) => (math >= 50 && english >= 50 ? "Yes" : "No");
  
  // 7. Check for email or phone number
  function canSignUp(email, phone) {
    return email || phone ? "Proceed to sign up" : "Provide email or phone number";
  }
  
  // 8. Validate username and password
  function validateCredentials(username, password) {
    return !username || !password ? "Invalid input" : "Login successful";
  }
  
  // 9. Hours worked ternary
  function checkWorkType(hours) {
    return hours >= 40 ? "Full-time" : "Part-time";
  }
  
  // 10. Arrow function to return larger number
  const getMax = (a, b) => (a > b ? a : b);
  