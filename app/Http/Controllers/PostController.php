<?php

namespace App\Http\Controllers;
use App\Repositories\postrepository\PostRepositoryInterface;
use Illuminate\Http\Request;
use JWTAuth;
use Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Auth;
// use Auth;
use App\User;
class PostController extends Controller
{
    protected $post;

    public function __construct (PostRepositoryInterface  $post)
    {
        $this->post = $post;
    }
    public function index()
    {
       
        // $data = [
        //     'posts' => $this->post->all()
        // ];
        //    return Auth::user();
        // return response()->json($user); 
        // return JWTAuth::user();
        return response()->json($this->post->all());
    }
}
