SimpleAccount
=============

Fairly simple page to create an account using AngularJs, Asp.net MVC4 Web API frameworks.


####Run

Clone the git to your local repo.

Open the solution in VS 2012. 

Update nuget packages

Build and Run the project 'SimpleAccount.Web'

#### Test

##### Unit test
Open AccountControllerTest.cs using VS2012, and run. 

##### karma JS tests
Run the command from root directory

karma start src/SimpleAccount.Web.UnitTest/JavaScriptTest/karma.config.js

Little tricky there if you dont have karma setup already.
You will require to install karma, nodejs, phantomjs 



#### Build using rake

Install Ruby and bundler

'bundle install' to get the required gems (rake and albacore)

and do the following to build the solution

Debug is default

rake build:build 

To build with config
rake build:build['Release']

