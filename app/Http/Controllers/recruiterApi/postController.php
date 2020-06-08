<?php

namespace App\Http\Controllers\recruiterApi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\postrepository\PostRepositoryInterface;
use JWTAuth;
use Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Auth;
use App\User;
class postController extends Controller
{
    protected $post;

    public function __construct (PostRepositoryInterface  $post)
    {
        $this->post = $post;
    }
    public function index()
    {
       
        return response()->json($this->post->all());
    }
}
