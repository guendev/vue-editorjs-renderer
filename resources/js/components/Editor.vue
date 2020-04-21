<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-8 mx-auto shadow p3">
                    <div >
                        <h1 style="text-align:center">This is vue editor.js </h1>
                    </div>

                    <div class="editorx_body">
                        <!--editorjs id-->
                        <div class id="codex-editor"/>
                    </div>
                    <button style="margin-left: 30%;" type="button" name="button" @click="save()">save</button>
                    <div class="editorx_body">
                        <pre>{{value}}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EditorJS from "@editorjs/editorjs";
    import Header from "@editorjs/header";
    import List from "@editorjs/list";
    import ImageTool from '@editorjs/image';
    import Marker from '@editorjs/marker';
    import Delimiter from '@editorjs/delimiter';
    import InlineCode from '@editorjs/inline-code';
    import Warning from '@editorjs/warning';
    import Quote from '@editorjs/quote';
    import Checklist from '@editorjs/checklist';
    export default {
        props: ['post', 'csrf', 'apibyfile', 'apibyurl', 'apisave'],
        data() {
            return {
                postCurrent: this.post ?  JSON.parse(this.post) : '',
                value: null,
                formImg: new FormData(),
            };
        },
        methods: {
            save: function() {
                editor.save().then(savedData => {
                    axios.post(this.apisave, {
                        content: savedData
                    })
                });
            },
            myEditor: function() {
                window.editor = new EditorJS({
                    holder: "codex-editor",
                    autofocus: true,
                    initialBlock: "paragraph",
                    data: this.postCurrent,
                    tools: {
                        header: {
                            class: Header,
                            inlineToolbar: false,
                            config: {
                                placeholder: 'Enter a header',
                                levels: [1, 2, 3, 4, 5],
                                defaultLevel: 3
                            }
                        },
                        list: {
                            class: List,
                            inlineToolbar: true
                        },
                        image: {
                            class: ImageTool,
                            config: {
                                endpoints: {
                                    accept: 'image/*',
                                    byFile: this.apibyfile,
                                    byUrl: this.apibyurl
                                },
                                additionalRequestHeaders: {
                                    'X-Requested-With': 'XMLHttpRequest',
                                    'X-CSRF-TOKEN' : this.csrf,
                                }
                            }
                        },
                        Marker: {
                            class: Marker,
                            shortcut: 'CMD+SHIFT+M',
                        },
                        delimiter: {
                            class: Delimiter,
                            shortcut: 'CMD+SHIFT+D'
                        },
                        inlineCode: {
                            class: InlineCode,
                            shortcut: 'CMD+SHIFT+I',
                        },
                        warning: {
                            class: Warning,
                            inlineToolbar: true,
                            shortcut: 'CMD+SHIFT+W',
                            config: {
                                titlePlaceholder: 'Tiêu đề',
                                messagePlaceholder: 'Nội dung',
                            },
                        },
                        quote: {
                            class: Quote,
                            inlineToolbar: true,
                            shortcut: 'CMD+SHIFT+O',
                            config: {
                                quotePlaceholder: 'Enter a quote',
                                captionPlaceholder: 'Quote\'s author',
                            },
                        },
                        checklist: {
                            class: Checklist,
                            inlineToolbar: true,
                        },
                    },
                    onReady: function() {
                        console.log("ready");
                    },
                    onChange: function() {
                        console.log("change");
                    }
                });
            }
        },
        mounted: function() {
            this.myEditor();
        }
    };
</script>

<style>

</style>
