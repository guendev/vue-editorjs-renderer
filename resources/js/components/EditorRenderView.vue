<template>
    <div class="content" :id="idholder ? idholder : ''">
       <div
           v-for="block in blocks"
           class="ce-block"
       >
           <div class="ce-block__content">

               <!-- Heading -->
               <h1 class="ce-header" v-if="block.type === 'header' && block.data.level === 1">{{ block.data.text | clearText }}</h1>
               <h2 class="ce-header" v-if="block.type === 'header' && block.data.level === 2">{{ block.data.text | clearText }}</h2>
               <h3 class="ce-header" v-if="block.type === 'header' && block.data.level === 3">{{ block.data.text | clearText }}</h3>
               <h4 class="ce-header" v-if="block.type === 'header' && block.data.level === 4">{{ block.data.text | clearText }}</h4>
               <h5 class="ce-header" v-if="block.type === 'header' && block.data.level === 5">{{ block.data.text | clearText }}</h5>

               <!-- Paragraph -->
               <div v-if="block.type === 'paragraph'" class="ce-paragraph cdx-block" v-html="block.data.text"></div>


               <!-- List -->
               <ul
                   v-if="block.type === 'list'"
                   class="cdx-block cdx-list"
                   :class="block.data.style === 'ordered' ? 'cdx-list--ordered' : 'cdx-list--unordered'"
               >
                   <li class="cdx-list__item" v-html="item" v-for="item in block.data.items"></li>
               </ul>



               <!-- Delimiter -->
               <div class="ce-delimiter cdx-block" v-if="block.type === 'delimiter' "></div>


               <!--Image-->
               <div
                   :class="'cdx-block image-tool image-tool--filled ' + addImageClass(block.data)"
                   v-if="block.type === 'image'"
               >
                   <div class="image-tool__image text-center">
                       <img class="image-tool__image-picture" alt="" :src="block.data.file.url">
                       <small class="text-muted" v-html="block.data.caption"></small>
                   </div>
               </div>



               <!--Warning-->
               <div class="ce-warning ce-shadow" v-if="block.type === 'warning'">
                   <div class="warning-tool__warning cdx-warning_icon">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tada feather feather-bell "><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                   </div>
                   <div class="warning-tool__warning cdx-warning_content">
                       <div v-html="block.data.title"></div>
                       <div v-html="block.data.message"></div>
                   </div>
               </div>



               <!--Quote-->
               <div
                   class="ce-quote" v-if="block.type === 'quote'"
                   :class="block.data.alignment === 'center' ? 'quote-tool__center' : 'quote-tool__left'"
               >
                   <p v-html="block.data.text"></p>
                   <p class="quote-tool__author">——《 {{ block.data.caption ? block.data.caption : 'Người Lạ' }} 》——</p>
                   <svg class="quote-tool__icon quote-icon__left" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 1365 1024"><path d="M508.624593 0l78.241185 104.296296c-147.759407 78.241185-243.370667 156.444444-286.833778 234.68563-43.463111 69.518222-30.416593 112.981333 39.139556 130.351407 165.129481 8.722963 252.017778 95.573333 260.702814 260.740741-17.370074 173.814519-117.304889 265.102222-299.84237 273.787259C108.847407 986.453333 8.912593 873.434074 0.18963 664.841481 0.18963 360.713481 169.680593 139.07437 508.624593 0z m756.167111 0l65.15674 104.296296c-139.036444 78.241185-234.647704 156.444444-286.795851 234.68563-34.778074 78.203259-17.370074 121.66637 52.148148 130.351407 165.129481 0 247.694222 86.926222 247.694222 260.740741-17.370074 165.129481-112.981333 256.379259-286.795852 273.787259-199.907556-8.722963-304.203852-121.704296-312.888889-338.981926 0-295.480889 173.814519-517.12 521.481482-664.879407z"></path></svg>
                   <svg class="quote-tool__icon quote-icon__right" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 1365 1024"><path d="M508.624593 0l78.241185 104.296296c-147.759407 78.241185-243.370667 156.444444-286.833778 234.68563-43.463111 69.518222-30.416593 112.981333 39.139556 130.351407 165.129481 8.722963 252.017778 95.573333 260.702814 260.740741-17.370074 173.814519-117.304889 265.102222-299.84237 273.787259C108.847407 986.453333 8.912593 873.434074 0.18963 664.841481 0.18963 360.713481 169.680593 139.07437 508.624593 0z m756.167111 0l65.15674 104.296296c-139.036444 78.241185-234.647704 156.444444-286.795851 234.68563-34.778074 78.203259-17.370074 121.66637 52.148148 130.351407 165.129481 0 247.694222 86.926222 247.694222 260.740741-17.370074 165.129481-112.981333 256.379259-286.795852 273.787259-199.907556-8.722963-304.203852-121.704296-312.888889-338.981926 0-295.480889 173.814519-517.12 521.481482-664.879407z"></path></svg>
               </div>



               <!--Checkbox-->
               <div
                   v-if="block.type === 'checklist'"
                   class="cdx-block cdx-checklist"
               >
                   <div
                       v-for="item in block.data.items"
                       class="cdx-checklist__item"
                       :class="item.checked ? 'cdx-checklist__item--checked' : ''"
                   >
                       <span class="cdx-checklist__item-checkbox"></span>
                       <div
                           class="cdx-checklist__item-text"
                           v-html="item.text"
                       ></div>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RenderEditor",
        props: ['content', 'idholder'],
        data() {
            return {
                blocks: this.content ?  JSON.parse(this.content).blocks : ''
            }
        },
        methods: {
          addImageClass(data){
              let $el = '';
              $el = data.withBorder ? $el + ' image-tool--withBorder' :'' ;
              $el = data.withBackground ? $el + ' image-tool--withBackground': $el;
              $el = data.stretched ? $el + ' image-tool--stretched' : $el;
              return $el;
          }
        },
        filters: {
            clearText(text){
                return text.replace(/&nbsp;/gi, ' ')
            }
        }
    }
</script>

<style lang="scss">
    $color_1: #eb1551;
    $color_2: #83848f;
    $background_color_1: rgba(235, 21, 81, .12);

    .ce-warning {
        display: grid;
        grid-template-columns: 50px 1fr;
        color: $color_1;
        padding: 8px;
        border-radius: 12px;
        background-color: $background_color_1;
        .warning-tool__warning {
            display: flex;
            flex-direction: column;
            justify-content: center;
            &.cdx-warning_icon {
                align-items: center;
                svg{
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        }
    }
    .ce-quote {
        position: relative;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 50px;
        .quote-tool__icon {
            font-size: 2em;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            fill: #e3e3e5;
        }
        &.quote-tool__center {
            padding-left: 0;
            text-align: center;
        }
        .quote-icon__right {
            left: 0;
        }
        .quote-icon__left {
            right: 0;
            -webkit-transform: rotate(180deg) translateY(50%);
            -ms-transform: rotate(180deg) translateY(50%);
            transform: rotate(180deg) translateY(50%);
        }
        .quote-tool__author {
            color: $color_2;
        }
    }
    .image-tool {
        &:not(.image-tool--stretched) {
            .image-tool__image {
                width: fit-content;
            }
        }
        &.image-tool--withBorder {
            .image-tool__image {
                box-shadow: 0 0 24px -18px rgba(69, 104, 129, .33), 0 0 45px 0 rgba(114, 119, 160, .12);
                transition: all .3s cubic-bezier(.25, .8, .25, 1);
            }
        }
        .image-tool__image-picture {
            margin-bottom: 5px !important;
        }
        &.image-tool--withBackground {
            .image-tool__image {
                padding: 15px;
                background: #eef5fa;
                border: none;
            }
        }
    }
    @media screen and (min-width: 767px){
        .ce-block__content {
            padding: 0 30px;
        }
    }
    code.inline-code {
        color: #eb1551;
        background-color: rgba(235, 21, 81, 0.12);
    }
    .ce-block {
        padding-bottom: .3rem;
    }
    .ce-shadow, .cdx-checklist__item.cdx-checklist__item--checked span.cdx-checklist__item-checkbox{
        box-shadow: 0 0 24px -18px rgba(69,104,129,.33), 0 0 45px 0 rgba(114,119,160,.12);
        transition: all .3s cubic-bezier(.25,.8,.25,1);
    }
    /*.tada {
        -webkit-animation-name: tada;
        animation-name: tada;
    }
    @-webkit-keyframes tada {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }

        10%,
        20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        }

        30%,
        50%,
        70%,
        90% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        }

        40%,
        60%,
        80% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }

    @keyframes tada {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }

        10%,
        20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        }

        30%,
        50%,
        70%,
        90% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        }

        40%,
        60%,
        80% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }*/
</style>
