Feature: To search product in amazon.in Cucumber
     Background:
          Given I am on "amazon" search page

     @CucumberScenario
     Scenario: Cucumber Amazon-task2
          When I click on Japan
          When Enter "apple" in searchbar
          Then Click on sortby button

     @CucumberScenario
     Scenario: Cucumber select apple brand
          When Enter "apple" in searchbar
          Then Select Apple from brands
          Then Check all are Apple products

     @CucumberScenario
     Scenario: Cucumber customer review
          When Enter "apple" in searchbar
          Then Check if customer review is 4 star and up

     @CucumberScenario
     Scenario: Min price as 1000
          When Enter "apple" in searchbar
          When Enter "1000" as minimum 
          Then Check if price of product is above 1000

          