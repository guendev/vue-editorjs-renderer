<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    //
    public function index($id)
    {
        $post = Post::where('id', $id)->first();
        return view('edit', compact('post'));
    }

    public function edit(Request $request, $id)
    {
        $post = Post::find($id)->first();
        $post->content = $request['content'];
        $post->save();
        return $request;
    }

    public function uploadImage(Request $request)
    {
        $directory = 'images/' . date("Y") . '/' . date("m") . '/' . date("d");
        if (!file_exists($directory)) {
            mkdir($directory, 0777, true);
        }
        $image = $request->file('image');
        //$uploadPath = public_path($directory);
        $path = $this->saveImg($image, $directory, 'post_image',400);
        return response()->json(['success'=>'1', 'file'=>['url'=>'/'.$path]]);
    }

    public function show($id)
    {
        $post = Post::where('id', $id)->first();
        return view('post', compact('post'));
    }
}
