# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready ->
    list = $('.friend-request-list-full')
    $.ajax 'friendship/get_friend_requests',
            type: 'GET'
            dataType: 'json'
            success: (data, textStatus, jqXHR) ->
                    $('friend-request-list-full').append "#{data}"
                    for user, i in data
                        console.log user[2]
            error: (data, textStatus, jqXHR) ->
                    console.log("Failed")