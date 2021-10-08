<template> 
    <form id="locationMap" @submit="onFormSubmission">
        <span class="vertical__divider"></span>
        
        <div class="form--inner">
            <InputForm :element="formState.name" defaultVal="" name="name" inputType="text" specificType="text" :changeInput="changeInput" :isSubmitted="isSubmitted"/>
            <InputForm :element="formState.email" defaultVal="" name="email" inputType="text" specificType="email" :changeInput="changeInput" :isSubmitted="isSubmitted"/>
            <InputForm :element="formState.subject" defaultVal="" name="subject" inputType="text" specificType="text" :changeInput="changeInput" :isSubmitted="isSubmitted"/>
            <InputForm :element="formState.message" defaultVal="" name="message" inputType="textarea" :changeInput="changeInput"  :isSubmitted="isSubmitted"/>
            <pulse-loader class="loader" :loading="isLoading.submittingForm" color="var(--primary-clr)" size="8px"></pulse-loader>
            <input class="submit__button" :disabled="(!areRequiredInputsFilled || isLoading.submittingForm)" :class="(!areRequiredInputsFilled || isLoading.submittingForm) &&'disabled'" type="submit" role="button" value="SEND →"/>
        </div>
    </form>
</template>

<script>
    import InputForm from "../../Generic/InputForm.vue";
    import { notify, generateNewId } from "../../../utilities/utilities.js";
    import { mapActions, mapGetters } from "vuex";
    import axios from 'axios';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    // WE COULD ALSO USE VULIDATE FOR FORM VALIDATION BUT I DECIDED TO USE MY CUSTOM VALIDATION
    export default {
        data() {
            return {
                isSubmitted: false,
                formState: {
                    name: {val: "", regex: /^.{5,50}$/, isValid: false, errorMsg: "Name should be between 5 and 50 characters.", isRequired: true, label:"name", placeholder: "Your Name"},
                    email: {val: "", regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, isValid: false, errorMsg: "Please type a valid email.", isRequired: true, label:"email_address", placeholder:"Email Address"},
                    subject: {val: "", regex:  /^.{0,100}$/, isValid: false, errorMsg: "Subject should not exceed 100 characters.", isRequired: false, label:"subject", placeholder:"Subject"},
                    message: {val: "", regex: /^.{1,500}$/, isValid: false, errorMsg: "Message should not exceed 500 characters. Please type fewer words.", isRequired: true, label:"message", placeholder:"Message"},
                }
            }
        },
        components:{
            InputForm,
            PulseLoader
        },
        computed: {
            ...mapGetters("loadingState", {isLoading: "getLoading"}),
            areRequiredInputsFilled(){
               return Object.values(this.formState).every(input => input.isRequired ? input.val: true);
            }
        },
        methods:{
                ...mapActions("loadingState", ["toggleLoading"]),
                changeInput(e) {
                    const inputTarget = e.target;
                    const inputType = inputTarget.type;
                    const inputName = inputTarget.name;
                    const inputVal = inputType === "checkbox" || inputType === "radio" ? inputTarget.checked :inputTarget.value;
                    const elementState = this.formState[inputName];
                    const isValid = elementState?.regex instanceof RegExp ? (elementState?.regex?.test(inputVal)) : false;

                    this.formState = {
                        ...this.formState,
                        [inputName]: {
                            ...this.formState[inputName],
                            val: inputVal,
                            isValid
                        }
                    }
                },
                resetForm() {
                    let newState = {...this.formState};
                    this.isSubmitted = false;
                    Object.keys(this.formState).forEach(key => {
                        newState = {
                            ...newState,
                            [key]: {
                                ...newState[key],
                                val: "",
                                isValid: false
                            }
                        }
                    });
                    this.formState = newState;
                },
                onFormSubmission(x){
                    x.preventDefault();
                    this.isSubmitted = true;
                    this.toggleLoading({type: "submittingForm", val: true});
                    new Promise((resolve, reject) => {
                       
                        if(Object.values(this.formState).every(item => item.isRequired ? (item.isValid && item.val !== "") : (item.val !== "" ? item.isValid : true))){
                             axios.post("https://61603037faa03600179fb926.mockapi.io/form", {
                                name: this.formState.name.val,
                                email: this.formState.email.val,
                                subject: this.formState.subject.val,
                                message: this.formState.message.val,
                                id: generateNewId(),
                                date: new Date()
                            }).then(() => {
                                this.toggleLoading({type: "submittingForm", val: false});
                                notify({type: "success", msg: "Your message has been sent successfully"});
                                this.resetForm();
                                resolve();
                            }).catch(error => {
                                this.toggleLoading({type: "submittingForm", val: false});
                                notify({type: "error", msg: error.message || "An error has occured"});
                                reject();
                            });
                        }else{
                            reject();
                            this.toggleLoading({type: "submittingForm", val: false});
                        }
                    })
                }
            }
        }
</script>

<style lang="scss" scoped>
    #locationMap{
        position: relative;
        min-height: 150px;
        .vertical__divider{
            display: none;         
        }
        .form--inner{
            width:320px;
            .loader{
                width: 100%;
                height: 20px;
                text-align:center;
                display: block;
            }
        }
        .submit__button{
            background-color: var(--primary-clr);
            color: var(--ultra-white);
            border:none;
            padding: 9px 10px;
            text-align:center;
            width:100%;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 2px;
            margin: 15px 0;
            transition: var(--mild-transition);
            &:hover{
                filter: brightness(1.6);
            }
        }
        // responsive 67px and above
        @media only screen and (min-width: 670px){
                .vertical__divider{
                    position: absolute;
                    display: inline;
                    right: -10px;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    background-color: var(--shadow-white);
                    width: 2px;
                    height: 90%;
                    border-radius: 50%;
                    margin-right: 10px;
                    padding:0;
                }
        }
          // responsive 670px and lower
        @media only screen and (max-width: 670px){
             .form--inner{
                    width:98%;
             }
        }
    }
</style>