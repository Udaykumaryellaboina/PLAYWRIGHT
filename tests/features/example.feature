@login
Feature: Submit Input Form on LambdaTest Selenium Playground

  Scenario: User submits the input form successfully
    Given I am on the LambdaTest Selenium Playground page
    When I navigate to the "Input Form Submit" page
    And I fill in the form with valid details
    And I submit the form
    Then I should see a success message confirming the form