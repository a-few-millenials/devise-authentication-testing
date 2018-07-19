class HomeController < ApplicationController
    def index
        if current_user
            redirect_to wall_index_url
        end
    end
end
