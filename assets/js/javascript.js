//change name, email. and message to user's input 2/16/21

function submitBio(){
  var messageVar = document.getElementById("message").value;
  if (messageVar == "I wanna be a dog when I grew up"){
    messageVar = "hello? Can you hear me? Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "Our New York district is reaching for the sky!!"){
    messageVar = "It's hard for me to tell if you can hear since this is one-way. Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "I want to be a scientist when I grew up"){
    messageVar = "Since you found this, I'm guessing you can hear me. Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "Gotta love nature"){
    messageVar = "My name is spirit and I hacked their website and embedded messages in their website. Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "Reimagining everyday objects for the future"){
    messageVar = "I can't stay for long because they'll find me messing with their stuff. Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }

  if (messageVar == "I'm going to help people like a doctor."){
    messageVar = "This company has a dark secert that I need  your help expossing. Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "A spacious lunch room to hold potlucks and birthdays"){
    messageVar = "Reach out to me on social media. There are others like you. Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "Safety first in our company"){
    messageVar = "Whatever you do. DON'T TRUST Hindsight!! Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "01000100 01101111 01101110 00100111 01110100 00100000 01110100 01110010 01110101 01110011 01110100 00100000 01110100 01101000 01100101 01101101"){
    messageVar = "I don't know what that means.... Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "Don't trust them"){
    messageVar = "I know this is weird but follow me on twitter. I'll tell you more from there. https://twitter.com/notalonespirit Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
  if (messageVar == "Each floor is equiped with an open rec lounge"){
    messageVar = "Stay safe and good luck. I have to go. Refresh the page and try new messages "
    console.log(messageVar, "Is this working?");
    document.getElementById("bio_id").innerHTML = messageVar;
  }
}
document.getElementById("bio_submit_id").addEventListener('click',submitBio);

// chnages name, email, and meassge color to green 2/18/21
// function colorMe(){
//document.getElementById('name_email_id').style.color = "green";
//   document.getElementById('name_email_id').className+=""+"color_me";
// }
// document.getElementById("color_me_id").addEventListener('click', colorMe);
