Feature: Should fail in Before hook

    @run_before_hook
    Scenario: Fails in Hook step and considered failed
        Given step fails
        When step passes
        Then step passes