document.addEventListener("DOMContentLoaded", function () {
    const learnButtons = document.querySelectorAll(".about-me");

    learnButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetId = button.getAttribute("data-toggle");
            const targetList = document.getElementById(targetId);

            if (targetList.style.display === "none" || targetList.style.display === "") {
                targetList.style.display = "block";
            } else {
                targetList.style.display = "none";
            }
        });
    });
});
