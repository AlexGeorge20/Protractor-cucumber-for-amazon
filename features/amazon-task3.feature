Feature: To search product in amazon.in Cucumber
     Background:
                Given I am on "amazon" search page
    
     @CucumberScenario
     Scenario: Cucumber Amazon-task3
          When I click on Careers
          Then Find openings

 @CucumberScenario
     Scenario: Selecting language
     When I select Malayalam as language
     Then I check if language is Malayalam


     
