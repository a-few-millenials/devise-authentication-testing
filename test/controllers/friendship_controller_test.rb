require 'test_helper'

class FriendshipControllerTest < ActionDispatch::IntegrationTest
  test "should get send_request" do
    get friendship_send_request_url
    assert_response :success
  end

  test "should get accept_request" do
    get friendship_accept_request_url
    assert_response :success
  end

end
