import { shallowMount, createLocalVue } from '@vue/test-utils';
import Form from "../../src/components/FormBox/Form/Form.vue";
import InputForm from "../../src/components/Generic/InputForm.vue";

import Vuex from 'vuex';
const localVue = createLocalVue();
localVue.use(Vuex);

describe("Form.vue && InputForm.vue", () => {
    // InputForm.vue
    const formState = {
        name: { val: "mahmoud farargy", regex: /^.{5,50}$/, isValid: false, errorMsg: "Name should be between 5 and 50 characters.", isRequired: true, label: "name", placeholder: "Your Name" },
        email: { val: "testing134@gmail.com", regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, isValid: false, errorMsg: "Please type a valid email.", isRequired: true, label: "email_address", placeholder: "Email Address" },
        subject: { val: "1290454", regex: /^.{0,100}$/, isValid: false, errorMsg: "Subject should not exceed 100 characters.", isRequired: false, label: "subject", placeholder: "Subject" },
        message: { val: "test messaging", regex: /^.{1,500}$/, isValid: false, errorMsg: "Message should not exceed 500 characters. Please type fewer words.", isRequired: true, label: "message", placeholder: "Message" },
    }
    const wrapper = shallowMount(InputForm, {
        propsData: {
            element: formState.name,
            defaultVal: "",
            name: "name",
            inputType: "text",
            specificType: "text",
            changeInput: () => { },
            isSubmitted: true
        }
    });
    it("Matches a snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("Validate inputs", () => {
        Object.keys(formState).forEach((key) => {
            const item = wrapper.find(`input[type="text"]`);
            const value = formState[key].val;
            item.setValue(value);
            expect(item.element.value).toBe(value);
        });
    });

    // Form.vue
    const parent = shallowMount(Form, { store, localVue });
    const submitBtn = parent.find(".submit__button");
    it("Matches a snapshot", () => {
        expect(parent).toMatchSnapshot();
    });
    it("Makes sure the submit button is disabled when inputs are empty", () => {

        expect(submitBtn.classes()).toContain("disabled");
    });

    let store = new Vuex.Store({
        state: {
            loading: {
                submittingForm: false
            }
        }
    });
    
    it("Makes sure the submit button is clickable", () => {
        submitBtn.trigger('click');
        expect(submitBtn.element.value).toContain("SEND");
    });
});