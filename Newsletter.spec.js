describe('Newsletter component specification', function () {
    var form;
    var genderInput;
    var maleButton;
    var femaleButton;
    var terms;
    var keyPressed = null;
    var form1;
    var theform;

    beforeEach(function () {
        form1 = document.createElement('form');

        theform = document.forms['form'];

        genderInput = document.createElement('input');
        genderInput.type = 'hidden';
        genderInput.name = 'promotional_newsletter_form[gender]';

        terms = document.createElement('input');
        terms.id = 'terms';
        terms.type = 'checkbox';

        maleButton = document.createElement('button');
        maleButton.dataset.gender = 'male';
        maleButton.type = 'submit';

        femaleButton = document.createElement('button');
        femaleButton.dataset.gender = 'female';
        femaleButton.type = 'submit';

        form = {
            querySelectorAll: function () {
                return [maleButton, femaleButton];
            },

            querySelector: function (element) {
                if (element === '#terms') {
                    return terms;
                }

                return genderInput;
            },

            submit: function () {},
        };


        function addfields(theform, key, value) {
            // var input = document.getElementById('terms');
            // var buttons = document.createElement('button');


            // for (i = 0; i<number; i++) {
            //   form1.appendChild(genderInput);
            //   form1.appendChild(terms);
            // }

            var input = form1;
            input.type =


        };

    });

    it('test something', function () {
        new Newsletter(form1);


    });


    it('should intercept enter keypress event and prevent it', function () {
        function keyPress(key) {
            var event = document.createEvent('Event');
            event.keyCode = key;
            event.initEvent('keypress');
            document.dispatchEvent(event);
        }

        document.addEventListener('keypress', function (e) {
            keyPressed = e.keyCode;
        });

        keyPress(13);

        expect(keyPressed).to.be.equal(13);

    });

    it('should submit newsletter subscription with female gender', sinon.test(function () {
        var formSubmitCall = sinon.stub(form, 'submit').returns(false);

        new Newsletter(form);
        terms.click();
        femaleButton.click();

        assert(formSubmitCall.called);
        expect(genderInput.value).to.be.equal('female');
    }));

    it('should enabled buttons newsletter when accepted terms and conditions', sinon.test(function () {
        var formSubmitCall = sinon.stub(form, 'submit').returns(false);

        new Newsletter(form);
        terms.click();

        expect(maleButton.disabled).to.be.equal(false);
    }));

    it('should enabled buttons newsletter when accepted terms and conditions', sinon.test(function () {
        var formSubmitCall = sinon.stub(form, 'submit').returns(false);

        new Newsletter(form);
        terms.click();
        terms.click();

        expect(maleButton.disabled).to.be.equal(true);
    }));

    it('should submit newsletter subscription with male gender', sinon.test(function () {
        var formSubmitCall = sinon.stub(form, 'submit').returns(false);

        new Newsletter(form);
        terms.click();
        maleButton.click();

        assert(formSubmitCall.called);
        expect(genderInput.value).to.be.equal('male');
    }));

    afterEach(function () {
        form = null;

        genderInput.remove();
        genderInput = null;

        maleButton.remove();
        maleButton = null;

        femaleButton.remove();
        femaleButton = null;
    });
});
