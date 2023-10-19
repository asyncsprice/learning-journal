const showMore = document.getElementById("show-more")
const blogs = document.getElementsByClassName("blogs")

showMore.addEventListener("click", () => {
    for (let i = 0; i < blogs.length; i++) {
        blogs[i].classList.remove("hidden")
    }

    showMore.classList.add("hidden")
})