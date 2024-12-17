$(document).ready(() => {

    // Stores the header of the faq button

    const faqHdr = $(".faqHdr")

    // When clicking on the faq button header it triggers an event

    faqHdr.on("click", function () {

        // Stores the current headers parent

        const faqBtn = $(this).parent()

        // Finds the remaining content within the parent

        const faqContent = faqBtn.find(".faqcontent")

        // Toggles visiblity

        faqContent.toggleClass("hidden")

        // Finds the plus icon

        const faqPlus = $(this).find(".fa-plus")

        // Toggles visiblity

        faqPlus.toggleClass("hidden")

        // Finds the minus icon

        const faqMinus = $(this).find(".fa-minus")

        // Toggles visiblity

        faqMinus.toggleClass("hidden")
    })
})