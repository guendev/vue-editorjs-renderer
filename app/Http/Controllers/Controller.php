<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Intervention\Image\Facades\Image;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param $file
     * @param $directory
     * @param $prefix
     * @param $width
     * @param null $height
     * @return string
     */
    public function saveImg($file, $directory, $prefix, $width, $height = null)
    {
        $fileName = rand(0, 9999999) .'_' . time() . "_" . $prefix . '.jpg';
        $path = $directory.'/'.$fileName;
        $uploadPath = public_path($path);
        $image = Image::make($file)->encode('jpg', 100);
        if ($image->width() >= $width){
            $image->resize($width, $height, function ($constraint) {
                $constraint->aspectRatio();
            });
        }
        $image->save($uploadPath);
        return $path;
    }
}
