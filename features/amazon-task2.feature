Feature: To search product in amazon.in Cucumber

# @CucumberScenario
Scenario: Cucumber Amazon-task2 
            Given I am on "amazon" search page
            # When I click on Japan
            When Enter "apple" in searchbar 
            Then Click on sortby button
            
# @CucumberScenario
# Scenario: Cucumber select apple brand          
#      Given I am on "amazon" search page
#     When Enter "apple" in searchbar 
#     Then Select Apple from brands
#     Then Check all are Apple products

# @CucumberScenario
# Scenario: Cucumber customer review         
#      Given I am on "amazon" search page
#      When Enter "apple" in searchbar
#      Then Check if customer review is 4 star and up

#  @CucumberScenario
# Scenario: Min price as 1000        
#      Given I am on "amazon" search page
#      When Enter "apple" in searchbar
#      Then Enter "1000" as minimum