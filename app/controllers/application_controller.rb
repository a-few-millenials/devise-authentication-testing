class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :store_user_location!, if: :storable_location?
  # Callback 'Store Location' must be added before authentication because 'authenticate_user!' will stop filter chain
  # before location can be stored.
  before_action :authenticate_user!

  private
  # Location will not be stored if...
  #     1) Request method is not GET
  #     2) Request is handled by Devise Controller
  #     3) Request is an AJAX requests
  def storable_location?
    request.get? && is_navigational_format? && !devise_controller? && !request.xhr?
  end

  def store_user_location!
    # :user is the scope that is being authenticated
    store_location_for(:user, request.fullpath)
  end
end
