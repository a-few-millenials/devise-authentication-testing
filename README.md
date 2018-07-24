# Devise Social Media Site
A social media site testing the functions and limitations of [Devise][1] and [Ruby on Rails](https://github.com/rails/rails). 

Designed and developed by [Hunter Parks][2]

#### Currently in Development as of 07/23/2018

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

This application is currently being built using MySQL as the database. However, Rails currently ships with sqlite3 if you want to use the default configuration.

If you want to use sqlite3, use the following configuration
```yml
default: &default
  adapter: sqlite3
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  timeout: 5000
```

This is the current database development configuration in MySQL
```yml
default: &default
  adapter: mysql2
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  timeout: 5000
  encoding: utf8
  reconnect: false
  database: social-media-site_development
  username: ******
  password: ******
  socket: /var/sun/mysqld/mysqld.sock
```
__**NOTE**__ You will need to install a version of MySQL server in order to use MySQL. You can download it [here](https://dev.mysql.com/downloads/mysql/)

After you have your database configuration setup, input the following in any Command Line
```cmd
rails db:migrate
rails server
```

Navigate to http://localhost:3000 and you should be good to go.
***
## Technologies used
* Ruby on Rails v. 5.1.6
* Devise v. 4.4.3
* sqlite3 v. 3.x
* MySQL
* Currently experimenting with several front-end frameworks

***
## Known Bugs
Here is a list of known bugs
* No known bugs at this time (Is subject to change)

## Support
If you encounter any bugs or have any questions about this project in general, email the creator of this project.

Hunter Parks: hunter.thomas.parks@gmail.com
***

## COPYRIGHT
This project is licensed under the GPL license

Copyright (c) 2018 **Hunter Parks**

[1]: https://github.com/plataformatec/devise
[2]: https://github.com/rails/rails
