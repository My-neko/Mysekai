document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-button");
    const tabContents = document.querySelectorAll(".tab-content");

    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            tabContents.forEach(content => content.classList.remove("active"));
            if (tabContents[index]) tabContents[index].classList.add("active");
        });
    });

    const menuButton = document.getElementById("menu-button");
    const headerMenu = document.getElementById("header-menu");

    if (menuButton && headerMenu) {
        menuButton.addEventListener("click", () => {
            headerMenu.classList.toggle("show");
        });
    }

    const sectionButtons = document.querySelectorAll(".menu-section-button");

    sectionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const items = button.nextElementSibling;
            items.classList.toggle("show");

            if (items.classList.contains("show")) {
                button.textContent = button.textContent.replace("▼", "▲");
            } else {
                button.textContent = button.textContent.replace("▲", "▼");
            }
        });
    });

    const twitterTermsButton = document.getElementById("twitter-terms-button");
    const twitterTermsCard = document.getElementById("twitter-terms-card");
    const twitterTermsModal = document.getElementById("twitter-terms-modal");
    const twitterTermsClose = document.getElementById("twitter-terms-close");

    if (twitterTermsButton && twitterTermsModal) {
        twitterTermsButton.addEventListener("click", event => {
            event.preventDefault();
            twitterTermsModal.classList.add("show");
        });
    }

    if (twitterTermsCard && twitterTermsModal) {
        twitterTermsCard.addEventListener("click", event => {
            event.preventDefault();
            twitterTermsModal.classList.add("show");
        });
    }

    if (twitterTermsClose && twitterTermsModal) {
        twitterTermsClose.addEventListener("click", () => {
            twitterTermsModal.classList.remove("show");
        });

        twitterTermsModal.addEventListener("click", event => {
            if (event.target === twitterTermsModal) {
                twitterTermsModal.classList.remove("show");
            }
        });
    }

    const discordGuideButton = document.getElementById("discord-guide-button");
    const discordGuideModal = document.getElementById("discord-guide-modal");
    const discordGuideClose = document.getElementById("discord-guide-close");

    if (discordGuideButton && discordGuideModal) {
        discordGuideButton.addEventListener("click", event => {
            event.preventDefault();
            discordGuideModal.classList.add("show");
        });
    }

    if (discordGuideClose && discordGuideModal) {
        discordGuideClose.addEventListener("click", () => {
            discordGuideModal.classList.remove("show");
        });

        discordGuideModal.addEventListener("click", event => {
            if (event.target === discordGuideModal) {
                discordGuideModal.classList.remove("show");
            }
        });
    }
        const supportGuideButton = document.getElementById("support-guide-button");
    const supportGuideModal = document.getElementById("support-guide-modal");
    const supportGuideClose = document.getElementById("support-guide-close");

    if (supportGuideButton && supportGuideModal) {
        supportGuideButton.addEventListener("click", event => {
            event.preventDefault();
            supportGuideModal.classList.add("show");
        });
    }

    if (supportGuideClose && supportGuideModal) {
        supportGuideClose.addEventListener("click", () => {
            supportGuideModal.classList.remove("show");
        });

        supportGuideModal.addEventListener("click", event => {
            if (event.target === supportGuideModal) {
                supportGuideModal.classList.remove("show");
            }
        });
    }
});
