$(document).ready(() => {
    const faqHdr = $(".faqHdr")

    faqHdr.on("click", function () {
        const faqBtn = $(this).parent()

        const faqContent = faqBtn.find(".faqcontent")
        faqContent.toggleClass("hidden")

        const faqPlus = $(this).find(".fa-plus")
        faqPlus.toggleClass("hidden")

        const faqMinus = $(this).find(".fa-minus")
        faqMinus.toggleClass("hidden")
    })
})