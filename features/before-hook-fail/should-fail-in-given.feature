Feature: Should fail in Given step

    Scenario: Fails in Given step and considered failed
        Given step fails
        When step passes
        Then step passes