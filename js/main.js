document.addEventListener("DOMContentLoaded", function (event) {

    $('.callback').click(function () {
        $('.modal-wrapper').fadeIn('slow');
        $('.modal-wrapper').css('display', 'block');
    });

    function closeModal() {
        $('.modal-wrapper').fadeOut('slow');
    }

    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });

    $('.cross-wrapper, .close-modal').click(function () {
        closeModal();
    });


    let form = document.getElementById("form-button");
    let successMessage = document.getElementById("successMessage");
    let formStart = document.querySelector('.modal-form');
    let formStartTitle = document.querySelector('.modal-title-wrapper');

    form.addEventListener("click", function (event) {
        event.preventDefault();

        let isValid = true;
        let nameInput = document.getElementById('nameInput');
        let phoneInput = document.getElementById('yourPhone');
        let phoneInputWrapper = document.querySelector('.tel-wrapper');

        // Видалення попередніх повідомлень про помилки
        document.querySelectorAll('.error-message').forEach(e => e.remove());

        var letters = /^[A-Za-z]+$/;

        // Валідація імені
        if (nameInput.value.length < 3 || !nameInput.value.match(letters)) {
            nameInput.classList.add('error');
            isValid = false;
            console.log("bad validate name");
        }

        // Валідація телефона
        if (phoneInput.value.length < 12) {
            phoneInputWrapper.classList.add('error')
            isValid = false;
            console.log("bad validate phone");
        }

        if (isValid) {
            nameInput.classList.remove('error');
            phoneInputWrapper.classList.remove('error')
            successMessage.style.display = "flex";
            formStart.style.display = "none";
            formStartTitle.style.display = "none";
        } else {
            document.getElementById('successMessage').style.display = 'none';
        }
    });


    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu_button', '.burger-menu_lines');
        let links = menu.find('.burger-menu_link');
        let overlay = menu.find('.burger-menu_overlay');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });

        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass('burger-menu_active');

            if (menu.hasClass('burger-menu_active')) {
                $('body').css('overlow', 'hidden');
            } else {
                $('body').css('overlow', 'visible');
            }
        }
    }

    burgerMenu('.burger-menu');

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = message;
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }


    var checkbox = document.getElementById('checkbox-trigger');
    var burgerButton = document.querySelector('.burger-menu_button'); // Ensure this exists in your HTML or adjust accordingly

    var menuToggle = document.getElementById('menuToggle');
    var spans = menuToggle.getElementsByTagName('span');

    checkbox.addEventListener('change', function() {
        burgerButton.click(); // Simulating a button click (ensure this element exists or is needed)

        if (checkbox.checked && spans.length === 2) {
            // If checked and exactly two spans exist, add a new span
            var newSpan = document.createElement('span');
            newSpan.id = 'inserted-span'; // Assign an ID for easy removal
            menuToggle.insertBefore(newSpan, spans[1]);
        } else if (!checkbox.checked && document.getElementById('inserted-span')) {
            // If unchecked and the inserted span exists, remove it
            menuToggle.removeChild(document.getElementById('inserted-span'));
        }
    });

    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });

})