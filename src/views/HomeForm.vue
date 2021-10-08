<template>
  <div id="homeForm">
  <!--Upper section-->
  
  <section class="upper--section">
  <b-container>
      <div class="upper--section--inner flex-column">
        <div class="upper--section--info">
          <h1>Contact Us</h1>
          <div><span class="directory">Home</span> / <span class="current__directory">Contact Us</span></div>
        </div>

      </div>
      <div class="upper--section--socials flex-column">
          <ul class="flex-row">
            <li> <a href="#"><i class="fab fa-facebook-f"></i> </a></li>
            <li> <a href="#"><i class="fab fa-linkedin-in"></i> </a></li>
            <li> <a href="#"><i class="fab fa-twitter"></i> </a></li>
            <li> <a href="#"><i class="fab fa-instagram"></i> </a></li>
          </ul>
        </div>
    </b-container>
  </section>
  
    <FormBox />
  </div>
</template>

<script>
// @ is an alias to /src
import FormBox from '@/components/FormBox/FormBox.vue';

export default {
  name: 'HomeForm',
  components: {
    FormBox
  }
}
</script>

<style lang="scss" scoped>
  #homeForm{
      overflow-x: hidden;
      width:100%;
    .upper--section{
      background-color: var(--primary-clr);
      color: var(--ultra-white);
      border-radius: 0 0 0 30px;
      $minHeight: 230px;
      min-height: $minHeight;
      width:100%;
      padding: 30px 0;
      .upper--section--inner{
          height: 100%;
          min-height: $minHeight;
          justify-content:center;
          .upper--section--info{
             height: 100%;
             width:100%;
            h1{
              font-size: var(--font-size-x-x-x-large);
              font-weight: var(--font-weight-extra-heavy);
              text-transform: uppercase;
             
            }
             div{
                 color: var(--shadow-white);
                 text-transform: capitalize;
                 span{
                   cursor: pointer;
                 }
                 transition: var(--mild-transition);
                 &:hover{
                   color: var(--ultra-white);
                 }
                 .current__directory{
                   pointer-events: none;
                }
              }

          }
         
          }
          .upper--section--socials{
             ul{
              padding:0;
              list-style: none;
              align-items:center;
              flex-wrap: wrap;
              margin-bottom:0;
              li{
                transition: var(--mild-transition);
                cursor: pointer;
                
                margin: 0 10 0 0;
                padding:0;
                a{
                  color: inherit;
                  text-decoration: none;
                  padding: 7px 9px;
                  border-radius: 50%;
                }
                &:hover {
                  transform: translateY(-3px);
                  a{
                     background: rgba(255,255,255,0.1);
                  }                  
                }
              }
          }

      }
      // 670px and above
      @media only screen and (min-width: 670px){
              .upper--section--socials ul{
                    justify-content:space-between;
                    max-width: 200px;
              }
      }
    }
  }
</style>
