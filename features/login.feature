Feature: Bootcamp E2E

  Background: User accesses newegg homepage

    Given I navigate to the home page
    And promo banner appears
    When I click the close button
    Then I should no longer see the promo banner

  Scenario: As a user I can use the search bar for searching items

   Given I enter the word "Windows" in the search bar
   When I click the search element
   Then I see at least one item appears

  Scenario: As I user I can access Today's Best Deal page

    Given I open "Today's Best Deals" tab
    When I click the logo
    Then The main page is opened

