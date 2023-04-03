// const responseObj={
//     hello:'hey! how can i help you',
//     hey:'hey whats up ',
//     contact:"sk123@gmail.com",
// }

function response(userInput) {
  if (
    userInput.toLocaleLowerCase() ==
    "I Have Registered but did not get the confirmation mail".toLocaleLowerCase()
  ) {
    let ans = "Please wait for 24 hours you will get the mail";
    return ans;
  } else if (
    userInput.toLocaleLowerCase() == "How I can Register".toLocaleLowerCase()
  ) {
    let ans = "Need to go the Register page";
    return ans;
  } else if (
    userInput.toLocaleLowerCase() ==
    "How I Can Reach the venue from my Location".toLocaleLowerCase()
  ) {
    let ans = "Will be update soon";
    return ans;
  } else if (
    userInput.toLocaleLowerCase() == "Who are the Speakers".toLocaleLowerCase()
  ) {
    let ans = "Need to go to speakers page";
    return ans;
  } else if (
    userInput.toLocaleLowerCase() ==
    "Can I Register without Accommodation ?".toLocaleLowerCase()
  ) {
    let ans = "Contact below details";
    return ans;
  } else if (userInput.toLocaleLowerCase() == "hello".toLocaleLowerCase()) {
    let ans = "How can i help you";
    return ans;
  } else if (userInput.toLocaleLowerCase() == "hey".toLocaleLowerCase()) {
    let ans = "How can i help you";
    return ans;
  } else if (userInput.toLocaleLowerCase() == "hii".toLocaleLowerCase()) {
    let ans = "How can i help you";
    return ans;
  } else {
    return "please ask something else";
  }
}
