angular.module("umbraco")
    .controller("SuggestionPluginController",
        // Scope object is the main object which is used to pass information from the controller to the view.
        function ($scope) {

            // SuggestionPluginController assigns the suggestions list to the aSuggestions property of the scope
            $scope.aSuggestions = ["Discover New Paths", "with truly integrated logistics", "How about starting a book club today or this week?", "A new path has been found. Where it leads is for you to discover.","Access the latest articles, trends and research to guide your strategy and keep you updated on what's new in the supply chain world."];

            // The controller assigns the behavior to scope as defined by the getSuggestion method, which is invoked when the user clicks on the 'Give me Suggestions!' button.
            $scope.getSuggestion = function () {

                // The getSuggestion method reads a random value from an array and provides a Suggestion. 
                $scope.model.value = $scope.aSuggestions[$scope.aSuggestions.length * Math.random() | 0];
            }

        });