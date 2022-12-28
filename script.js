//your code here
async function showUserDetails() {
  try {
    document.getElementById("infosection").innerHTML = " ";
    let result = await fetch("https://randomuser.me/api/");
    data = await result.json();
    output = data.results[0];

    console.log(output)
    displayUserDetails();
  }
  catch (err) {
    console.log(err);
  }
}
document.addEventListener("onclick", showUserDetails())

function displayUserDetails() {

  let imageurl = output.picture.large
  let image = document.getElementById("image");
  image.src = imageurl;


  let name = document.getElementById("name");
  name.innerText = output.name.title + " " + output.name.first + " " + output.name.last;



}

function showAge() {
  document.getElementById("infosection").innerHTML = output.dob.age;
}
function showEmail() {
  document.getElementById("infosection").innerHTML = output.email;
}
function showPhone() {
  document.getElementById("infosection").innerHTML = output.phone;

}
