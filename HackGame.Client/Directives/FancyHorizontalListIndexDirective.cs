﻿using System;
using HackGame.Client.Utils;
using jQueryApi;

namespace HackGame.Client.Directives
{
    public class FancyHorizontalListIndexDirective
    {
        public const string Name = "fancyHorizontalListIndex";
        public Action<dynamic, jQueryObject, dynamic> link;
        public bool replace;
        public string restrict;
        public dynamic scope;
        public string templateUrl;
        public bool transclude;

        public FancyHorizontalListIndexDirective()
        {
            restrict = "EA";
            templateUrl = string.Format("{0}partials/fancyHorizontalListIndex.html", Constants.ContentAddress);
            replace = true;
            transclude = true;
            scope = new
            {
                items = "=",
                bindIndex = "=",
            };
            link = LinkFn;
        }

        private void LinkFn(dynamic scope, jQueryObject element, dynamic attr)
        {
            scope.itemClick = new Action<dynamic>((index) =>
                                                  {
                                                      scope.bindIndex = index;
                                                  });

            scope.currentClass = new Func<dynamic, dynamic>((index) => (index == scope.bindIndex) ? "fancy-horizontal-list-item fancy-horizontal-list-item-selected" : "fancy-horizontal-list-item ");
            scope.parentScope = scope["$parent"]["$parent"]["$parent"];
        }
    }
}
