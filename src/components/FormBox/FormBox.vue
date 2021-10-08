<template>
    <div id="formBox" class="flex-column">
        <div class="form--box--inner">
            <h2><i class="far fa-address-card"></i> Get In Touch</h2>
            <div class="form--container flex-row">
                <!-- FORM SIDE -->
                <Form />
                <!-- CONTACT SIDE -->
                <div id="contact" class="flex-column">
                    <!-- Contact Info -->
                    <div class="contact--info">
                        <ul>
                            <li><i class="fas fa-envelope"></i> <span>info@mahmoudservice.com</span></li>
                            <li><i class="fas fa-phone-alt"></i> <span>0020565258746</span></li>
                            <li><i class="fas fa-location-arrow"></i> <span>San Stefano, Alexandria, Egypt.</span></li>
                        </ul>
                    </div>
                    <!-- Map -->
                    <LocationMap />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from "./Form/Form.vue";
    import LocationMap from "./../LocationMap/LocationMap.vue";
    
    export default {
        components: {
            Form,
            LocationMap
        }
    }
</script>

<style lang="scss" scoped>
    #formBox{
        width:100%;
        align-items:center;
        justify-content:center;
        .form--box--inner{
            width: 100%;
            display: block;
            background-color: var(--ultra-white);
            padding: 27px;
            min-height: 150px;
            h2{
                text-transform: capitalize;
                font-size: var(--font-size-large);
                color: var(--heading-black);
                i{
                    color: inherit;
                    margin-right: 5px;
                }
            }
            .form--container{
                width:100%;
                align-items: center;
                justify-content:space-between;
                flex-wrap: wrap;
                gap: 30px 10px;
                margin-top:23px;
                #contact{
                    align-items: space-between;
                    height:100%;
                    gap: 40px 0;
                    .contact--info{
                        ul{
                            list-style: none;
                            padding: 0;
                            margin:0;
                            
                            li{
                                display: flex;
                                align-items: center;
                                margin-bottom: 16px;
                                i{
                                    color: var(--primary-clr);
                                    margin-right: 10px;
                                }
                                span{
                                    color: var(--text-black);
                                }
                            }
                        }
                    }
                }
                #locationMap, #contact{
                    flex-basis: 48%;
                }
            }
        }
        // responsive 1290px and above
        @media only screen and (min-width: 1290px){
            .form--box--inner{
                border-radius: 4px;
                max-width: 800px;
                position: relative;
                top: -80px;
                z-index: 10;
                box-shadow: 1px 0px 20px rgba(0,0,0,0.1);
            }
        }
         // responsive 670px and lower
        @media only screen and (max-width: 670px){
            .form--box--inner{
                max-width: none;
                padding-left: 1rem;
                padding-right: 1rem;
                margin-top: 10px;
                .form--container{
                    flex-direction: column-reverse;
                    #locationMap, #contact{
                    flex-basis: 100%;
                }
                }
            }
        }
    }
</style>