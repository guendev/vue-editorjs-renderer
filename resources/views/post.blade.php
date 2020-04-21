<!doctype html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/app.css">
    {{--<link rel="stylesheet" href="/css/editor.min.css">--}}
    <title>Editor</title>
</head>
<body>
<div id="app-frontend">
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto p-md-3 shadow">
                <editor-render-view
                    content="{{ $post->content }}"
                ></editor-render-view>
            </div>
        </div>
    </div>
</div>
</body>
<script src="/js/app.js"></script>
</html>
