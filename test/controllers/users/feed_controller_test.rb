require 'test_helper'

class Users::FeedControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get users_feed_index_url
    assert_response :success
  end

  test "should get new" do
    get users_feed_new_url
    assert_response :success
  end

end
