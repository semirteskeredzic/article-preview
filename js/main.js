function toggleShare() {
    let shareElement = document.getElementsByClassName("card-bottom--share-container");
    let standardElement = document.getElementsByClassName("card-bottom--main-container");
    let mainElement = document.getElementsByClassName("card-bopttom--container");

    if(shareElement[0].style.display === "none") {
        standardElement[0].style.display = "none";
        shareElement[0].style.display = "flex";
    } else {
        standardElement[0].style.display = "flex";
        shareElement[0].style.display = "none";
    }
}