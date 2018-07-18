class WallController < ApplicationController
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    redirect_to wall_index_url
  end

  def post_params
    params.require(:post).permit(:image, :caption)
  end
end
