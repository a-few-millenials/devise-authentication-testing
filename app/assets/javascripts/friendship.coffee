# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready ->
    $.ajax 'friendship/get_friend_requests',
            type: 'GET'
            dataType: 'json'
            success: (data, textStatus, jqXHR) ->
                    $('friend-request-list-full').append "#{data}"
            error: (data, textStatus, jqXHR) ->
                    console.log("Failed")