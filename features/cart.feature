Feature: Cart

  Scenario: Add product to cart
    Given the user is logged in
    When the user adds a product to the cart
    Then the cart should contain that product