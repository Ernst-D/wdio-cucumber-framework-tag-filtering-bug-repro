import { Before, Given, Then, When } from "@wdio/cucumber-framework";

Before({ tags: "@run_before_hook" }, function(){
    throw new Error("Before throw");
})

Given("step fails", function(){
    throw new Error("Given throw");
})

When("step passes", function () {
    console.log("pass");
})

Then("step passes", function () {
    console.log("pass");
})