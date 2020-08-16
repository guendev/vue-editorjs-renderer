<template>
    <div class="chapter-words">
        <div
            v-for="(block, index) in content.blocks"
            :key="index"
            class="cool-block"
            :class="blockClass"
        >
            <!-- Heading -->
            <div
                class="block-header"
                v-if="block.type === 'header'"
                v-html="renderHeader(block.data)"
            ></div>

            <!-- Paragraph -->
            <div
                v-else-if="block.type === 'paragraph'"
                class="block-paragraph"
                :class="block.data.alignment"
                v-html="block.data.text"
            ></div>

            <!--Image-->
            <div
                v-else-if="block.type === 'image'"
                class="block-image"
                :class="{
                    'image-withBorder': block.data.withBorder,
                    'image-withBackground': block.data.withBackground,
                    'image-stretched': block.data.stretched,
                }"
            >
                <div class="image--content">
                    <img class="image" alt="" :src="block.data.file.url" />
                    <small
                        class="sub-image"
                        v-html="block.data.caption"
                    ></small>
                </div>
            </div>

            <!-- List -->
            <ul
                v-else-if="block.type === 'list'"
                class="block-list"
                :class="
                    block.data.style === 'ordered' ? 'ordered' : 'unordered'
                "
            >
                <li
                    class="list--item"
                    v-html="item"
                    v-for="item in block.data.items"
                ></li>
            </ul>

            <!-- Delimiter -->
            <div
                class="block-delimiter"
                v-if="block.type === 'delimiter'"
            ></div>

            <!--Quote-->
            <div
                v-else-if="block.type === 'quote'"
                class="block-quote"
                :class="
                    block.data.alignment === 'center'
                        ? 'quote-center'
                        : 'quote-left'
                "
            >
                <p v-html="block.data.text"></p>
                <p class="quote-author">
                    ——《
                    {{
                        block.data.caption ? block.data.caption : 'Người Lạ'
                    }}
                    》——
                </p>
                <svg
                    class="quote-icon quote-icon-left"
                    width="24px"
                    height="24px"
                    viewBox="0 0 1365 1024"
                >
                    <path
                        d="M508.624593 0l78.241185 104.296296c-147.759407 78.241185-243.370667 156.444444-286.833778 234.68563-43.463111 69.518222-30.416593 112.981333 39.139556 130.351407 165.129481 8.722963 252.017778 95.573333 260.702814 260.740741-17.370074 173.814519-117.304889 265.102222-299.84237 273.787259C108.847407 986.453333 8.912593 873.434074 0.18963 664.841481 0.18963 360.713481 169.680593 139.07437 508.624593 0z m756.167111 0l65.15674 104.296296c-139.036444 78.241185-234.647704 156.444444-286.795851 234.68563-34.778074 78.203259-17.370074 121.66637 52.148148 130.351407 165.129481 0 247.694222 86.926222 247.694222 260.740741-17.370074 165.129481-112.981333 256.379259-286.795852 273.787259-199.907556-8.722963-304.203852-121.704296-312.888889-338.981926 0-295.480889 173.814519-517.12 521.481482-664.879407z"
                    ></path>
                </svg>
                <svg
                    class="quote-icon quote-icon-right"
                    width="24px"
                    height="24px"
                    viewBox="0 0 1365 1024"
                >
                    <path
                        d="M508.624593 0l78.241185 104.296296c-147.759407 78.241185-243.370667 156.444444-286.833778 234.68563-43.463111 69.518222-30.416593 112.981333 39.139556 130.351407 165.129481 8.722963 252.017778 95.573333 260.702814 260.740741-17.370074 173.814519-117.304889 265.102222-299.84237 273.787259C108.847407 986.453333 8.912593 873.434074 0.18963 664.841481 0.18963 360.713481 169.680593 139.07437 508.624593 0z m756.167111 0l65.15674 104.296296c-139.036444 78.241185-234.647704 156.444444-286.795851 234.68563-34.778074 78.203259-17.370074 121.66637 52.148148 130.351407 165.129481 0 247.694222 86.926222 247.694222 260.740741-17.370074 165.129481-112.981333 256.379259-286.795852 273.787259-199.907556-8.722963-304.203852-121.704296-312.888889-338.981926 0-295.480889 173.814519-517.12 521.481482-664.879407z"
                    ></path>
                </svg>
            </div>

            <!--Checkbox-->
            <div v-else-if="block.type === 'checklist'" class="block-checklist">
                <div
                    v-for="item in block.data.items"
                    class="checklist--item"
                    :class="{
                        checked: item.checked,
                    }"
                >
                    <span class="checklist-item-icon"></span>
                    <div
                        class="checklist-item-text"
                        v-html="item.text"
                    ></div>
                </div>
            </div>


            <!--Warning-->
            <div v-else-if="block.type === 'warning'" class="block-warning">
                <div class="warning-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tada feather feather-bell "><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <div class="warning-text">
                    <div v-html="block.data.title"></div>
                    <div v-html="block.data.message"></div>
                </div>
            </div>


            <!--Warning-->
            <div v-else-if="block.type === 'alert'" class="block-alert">
                <div class="alert-content"
                     :class="block.data.type"
                >
                    <div v-html="block.data.message"></div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'EditorRenderView',
    props: {
        content: {
            type: Object,
            default: {},
        },
        blockClass: {
            type: String,
            default: '',
        },
    },
    methods: {
        renderHeader(header) {
            return `<h${header.level} class="cool-header" level="${header.level}">${header.text}</h${header.level}>`
        },
    },
}
</script>
<style>
.chapter-words {
    padding: 30px 50px;
    background: white;
}
.cool-block {
    position: relative;
}
.cool-block + .cool-block {
    margin-top: 20px;
}
.cool-block .block-image .image--content small.sub-image {
    text-align: center;
    display: inherit;
}
.cool-block .block-delimiter,
.cool-block .quote-left {
    text-align: center;
}
.cool-block .block-delimiter:before {
    display: inline-block;
    content: '***';
    font-size: 30px;
    line-height: 65px;
    height: 30px;
    letter-spacing: 0.2em;
}
.cool-block .quote-left .quote-icon {
    fill: #7c7c7c;
    position: absolute;
    top: calc(50% - 12px);
}
.cool-block .quote-left .quote-icon.quote-icon-left {
    left: 10px;
}
.cool-block .quote-left .quote-icon.quote-icon-right {
    right: 10px;
    transform: rotate(180deg) translateY(50%);
}
.block-checklist .checklist--item {
    display: flex;
    padding: 0 10px;
    box-sizing: content-box;
}
.block-checklist .checklist--item .checklist-item-icon {
    display: inline-block;
    flex-shrink: 0;
    position: relative;
    width: 20px;
    height: 20px;
    margin: 10px 10px 10px 0;
    border-radius: 50%;
    border: 1px solid #d0d0d0;
    background: #fff;
    user-select: none;
}
.block-checklist .checklist--item .checklist-item-text {
    outline: none;
    flex-grow: 1;
    padding: 6px 0 10px;
}
.block-checklist .checklist--item.checked .checklist-item-icon {
    background: #388ae5;
    border-color: #388ae5;
}

.block-checklist .checklist--item.checked .checklist-item-icon::after {
    opacity: 1;
}
.block-checklist .checklist--item .checklist-item-icon::after {
     position: absolute;
     top: 5px;
     left: 5px;
     width: 8px;
     height: 5px;
     border: 2px solid #fcfff4;
     border-top: none;
     border-right: none;
     background: transparent;
     content: '';
     opacity: 0;
     transform: rotate(-45deg);
 }

.cool-block .block-warning {
    display: flex;
    border-radius: 12px;
    background-color: rgba(235, 21, 81, .12);
    color: #eb1551;
}
.cool-block .block-warning .warning-icon {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cool-block .block-alert .alert-content {
    position: relative;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}
.cool-block .block-alert .alert-content.success {
    background-color: #f0fff4;
    border: 1px solid #68d391;
    color: #2f855a;
}
.cool-block .block-alert .alert-content.primary {
    background-color: #ebf8ff;
    border: 1px solid #4299e1;
    color: #2b6cb0;
}
.cool-block .block-alert .alert-content.secondary {
    background-color: #f7fafc;
    border: 1px solid #cbd5e0;
    color: #222731;
}
.cool-block .block-alert .alert-content.info {
    background-color: #e6fdff;
    border: 1px solid #4cd4ce;
    color: #00727c;
}
.cool-block .block-alert .alert-content.warning {
    background-color: #fffaf0;
    border: 1px solid #ed8936;
    color: #c05621;
}
.cool-block .block-alert .alert-content.danger {
    background-color: #fff5f5;
    border: 1px solid #fc8181;
    color: #c53030;
}
.cool-block .block-alert .alert-content.light {
    background-color: #fff;
    border: 1px solid #edf2f7;
    color: #1a202c;
}
.cool-block .block-alert .alert-content.dark {
    background-color: #2d3748;
    border: 1px solid #1a202c;
    color: #d3d3d3;
}
.cool-block .block-paragraph.center {
    text-align: center;
}
.cool-block .block-paragraph.right {
    text-align: right;
}
</style>
