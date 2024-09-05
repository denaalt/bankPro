document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.querySelector(".save-button");

  saveButton.addEventListener("click", () => {
    const userName = document.querySelector(".username").textContent;
    const userBalance = document
      .querySelector(".balance")
      .textContent.split(": ")[1];
    const userImage = document.querySelector(".profile-image").src;

    const userProfile = {
      name: userName,
      balance: userBalance,
      image: userImage,
    };

    console.log("Saving user profile:", userProfile);
  });
});
