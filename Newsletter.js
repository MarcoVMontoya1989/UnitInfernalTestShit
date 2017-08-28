var Newsletter = (function () {
    function Newsletter(handler) {
        this.handler = handler;

        this.submitButtons = this.handler.querySelectorAll('[type="submit"]');
        this.genderInput = this.handler.querySelector('[name="promotional_newsletter_form[gender]"]');
        this.terms = this.handler.querySelector('#terms');
        this.subscribe = this.subscribe.bind(this);
        this.acceptTerms = this.acceptTerms.bind(this);
        this.enableButtons = this.enableButtons.bind(this);
        this.disableButtons = this.disableButtons.bind(this);
        this.preventEnter = this.preventEnter.bind(this);

        this.terms.addEventListener('click', this.acceptTerms);
        for (var i = 0; i < this.submitButtons.length; i++) {
            this.submitButtons[i].disabled = true;
        }

        console.log(this.handler);
        console.log('terms');
        console.log(this.terms);

        this.handler.addEventListener('keypress', this.preventEnter, false);

    }

    Newsletter.prototype.acceptTerms = function acceptTerms() {
        if (this.terms.checked) {
            this.enableButtons();
            return;
        }

        this.disableButtons();
    };

    Newsletter.prototype.preventEnter = function preventEnter(e) {
        var key = e.charCode || e.keyCode || 0;
        if (key === 13) {
            e.preventDefault();
        }
    };

    Newsletter.prototype.enableButtons = function enableButtons() {
        for (var i = 0; i < this.submitButtons.length; i++) {
            this.submitButtons[i].disabled = false;
            this.submitButtons[i].addEventListener('click', this.subscribe);
        }
    };

    Newsletter.prototype.disableButtons = function disableButtons() {
        for (var i = 0; i < this.submitButtons.length; i++) {
            this.submitButtons[i].disabled = true;
            this.submitButtons[i].removeEventListener('click', this.subscribe);
        }
    };

    Newsletter.prototype.subscribe = function subscribe(event) {
        event.preventDefault();

        var element = event.target || event.srcElement;

        if (this.genderInput) {
            this.genderInput.value = element.dataset.gender;
        }

        this.handler.submit();
    };

    return Newsletter;
})();
