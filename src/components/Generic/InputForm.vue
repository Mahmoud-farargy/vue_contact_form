<template>
    <div id="inputForm" class="form-group">
        <!-- If Input-->
        <input class="input__style"
                v-if="lowerInputType === 'text'"
                :type="specificType"
                @input="changeInput"
                :defaultValue="defaultVal"
                v-model="element.val"
                :placeholder="element.placeholder ? `${element.placeholder}${element.isRequired ? ' *' : ''}`: ''"
                :id="element.label"
                :disabled="isDisabled"
                :autoFocus="isFocused"
                :name="name"
                :required="element.isRequired"
        />
        
        <!--Else if Textarea-->
        <textarea
                class="txt__area__style"
                v-else-if="lowerInputType === 'textarea'"
                @input="changeInput"
                :defaultValue="defaultVal"
                v-model="element.val"
                :placeholder="element.placeholder ? `${element.placeholder}${element.isRequired ? ' *' : ''}`: ''"
                :id="element.label"
                :disabled="isDisabled"
                :autoFocus="isFocused"
                :name="name"
                :required="element.isRequired"
        />
        <!--Otherwise-->
        <input class="input__style"
                v-else
                :type="specificType"
                @input="changeInput"
                :defaultValue="defaultVal"
                v-model="element.val"
                :placeholder="element.placeholder ? `${element.placeholder}${element.isRequired ? ' *' : ''}`: ''"
                :id="element.label"
                :disabled="isDisabled"
                :autoFocus="isFocused"
                :name="name"
                :required="element.isRequired"
        />
        <p class="text-danger" v-if="isSubmitted && ((!element.isValid && element.isRequired) || (element.val && !element.isValid && !element.isRequired))">{{isSubmitted && !element.val ? "This field is required" :element.errorMsg}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            element: {
                type:Object,
                required: true
            },
            changeInput:  {
                type:Function,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            inputType: {
                type: String,
            },
            specificType: {
                type: String,
            },
            defaultVal:  {
                type:String
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
            isFocused: {
                type: Boolean,
                default: false
            },
            isSubmitted: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            lowerInputType(){
                return this.inputType?.toLowerCase();
            }
        }
    }
</script>

<style lang="scss" scoped>
    #inputForm{
        .txt__area__style{
            resize: vertical;
            min-height:140px;
            max-height: 170px;
        }
        .txt__area__style, input.input__style{
            background: var(--shadow-white);
            width:100%;
            padding: 9px 5px 9px 14px;
            border-radius: 3px;
            display: block;
            border:none;
            margin-bottom: 18px;
            border: 1px solid;
            border-color: transparent;
            transition: all 200ms ease;
            &:focus{
                outline: none;
                border-color: var(--primary-clr) !important;
            }
            &:hover{
                border-color: var(--light-gray);
            }
        }
    }
</style>