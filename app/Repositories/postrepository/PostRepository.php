<?php


namespace App\Repositories\postrepository;

use App\Model\Post;

class PostRepository implements PostRepositoryInterface
{

    public function get($post_id)
    {
        return Post::find($post_id);
    }


    public function all()
    {
        return Post::all();
    }


    public function delete($post_id)
    {
        Post::destroy($post_id);
    }


    public function update($post_id, array $post_data)
    {
        Post::find($post_id)->get;
        update($post_data);
    }
}