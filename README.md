# Devise Social Media Site
A social media site testing the functions and limitations of [Devise][1] and [Ruby on Rails](https://github.com/rails/rails). 

Designed and developed by [Hunter Parks][2]

***
## Description
This project is a Ruby on Rails project using the Devise Authentication gem.

#### Why this project is being made
The reason this project is being built is because I want to try and find a good stack to develop in that is highly configurable, has lower development time, and is very secure. Ruby on Rails is very configurable, simple, and has plenty of documentation online with a plethora of resources available. When doing research on companies that use Rails, other Rails developers have mentioned using the Devise Authentication Gem is recommended for User Authentication. This project is to test both Rails and Devise.

#### Capabilities of Project

This social media site will allow users to do the following...

* Create profiles and post blogs about their day
* Send and accept friend requests using a friendship system similar to other popular social media sites
* Users will be able to talk to friends via private messaging (with plans for encrypted messaging)
* Create, edit, and view User Profiles and Biographies (or `Bios`)

***
## Specs
### User specs
| Specs | Input | Output |
| ----- | ----- | ----- |
| Will allow users to create a new profile | `Create new Account` | `We have sent you an email confirming your account creation` |
| Will allow users to accept confirmation email | `Click here to accept account creation` | `You have successfully created an account! Click here to login` |
| Will allow users to login to their accounts | User inputs username and password for their account and click `Login` | Upon successful authentication, user will be redirected. Upon failure, `Sorry, your username and/or password is incorrect` | 
| Will allow users to reset their passwords in the event they lose it | `Reset Password` | `You have successfully reset your password. Click here to login` |
| Will allow users to view all blog posts created by their friends | **No input necessary** | Users will view all posts sorted by date |
| Will allow users to create blog posts | `New post` | `Body:` *Enter text here* |
| Will allow users to delete blog posts | `Delete` | `Post deleted` |
| Will allow users to edit blog posts | `Options -> Edit post` | `Body:` *Edit text here* |
| Will allow users to create comments on posts | `Add comment` | `Body:` *Enter text here* |
| Will allow users to Edit profile | `Profile -> Edit` | `Bio:` *Add, edit, or delete Bio* / `Location:` *Add, edit or delete Location* |
| Will allow users to view other User Profiles | `Friends List -> User -> View profile` | User will view user's profile |
| Will allow users to send private messages to other users | `Messages -> New Message` | `User:` *Select user* / `Body:` *Enter text here* |
| Will allow users view private messages from other users | `Messages -> Recent Messages` | `Body:` *Message displayed here* |
| Will allow users to edit private messages they have created | `Messages -> Recent Messages -> User -> Options -> Edit Message` | `Body:` *Edit message here* |
| Will allow users to delete private messages they have created | `Messages -> Recent Messages -> User -> Options -> Delete Message` | `Message has been deleted` | 

### Admin Specs
| Specs | Input | Output |
| ----- | ----- | ------ |
| Will allow Admins to login using an account setup for them | Admin inputs username and password and clicks `Login` | Upon successful authentication, Admin gets redirected. Upon failure, `Sorry, your username and/or password is incorrect` |
| Will allow Admins to view all users | `Dashboard -> Users` | Admin will view User and all information logged attached to Account |
| Will allow Admins to manually activate and deactivate accounts | `Dashboard -> Users -> Edit account` | Admin selects checkbox for activation |
| Will allow Admins to view monitoring tools of site traffic | `Dashboard -> Monitoring` | Admin views graphs and logs for web traffic |

***
## Setup
Here is how to setup the project locally

### Using Git
In any Command line, 
```cmd
git clone https://github.com/a-few-millenials/devise-authentication-testing.git
cd devise-authentication-testing
bundle install
```

[1]: https://github.com/plataformatec/devise
[2]: https://github.com/rails/rails

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
