(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/auth/auth.tpl.html',
    '<div class="site site_state_auth">\n' +
    '    <div class="site__content">\n' +
    '        <a class="site-logo" ui-sref="login">\n' +
    '            <span>Budget {{isLoading}}</span>\n' +
    '        </a>\n' +
    '        <ui-view></ui-view>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/logined/page.tpl.html',
    '<div class="site">\n' +
    '    <div ng-include="\'layouts/logined/header/header.tpl.html\'"></div>\n' +
    '    <div class="site__content">\n' +
    '        <ui-view></ui-view>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/dashboard/dashboard.tpl.html',
    '<div class="container">\n' +
    '    <div class="content">\n' +
    '        <h2>Рахунки:</h2>\n' +
    '\n' +
    '        <div layout="row" layout-wrap ng-repeat="account in dashboardCtrl.accounts">\n' +
    '            <div class="layout-column" flex>\n' +
    '                <md-card>\n' +
    '                    <md-toolbar>\n' +
    '                        <div class="md-toolbar-tools">\n' +
    '                            <h3 class="md-flex">{{account.name}} : {{account.amount}}  {{account.currency_name}}</h3>\n' +
    '                        </div>\n' +
    '                    </md-toolbar>\n' +
    '                    <md-card ng-repeat="sub_account in account.sub_accounts"\n' +
    '                             class="{{dashboardCtrl.currencyColor[sub_account.currency_name]}}">\n' +
    '                        <md-card-title>\n' +
    '                            <md-card-title-text>\n' +
    '                                    <span\n' +
    '                                        class="md-headline">{{sub_account.amount}} {{sub_account.currency_name}}</span>\n' +
    '                            </md-card-title-text>\n' +
    '                        </md-card-title>\n' +
    '                    </md-card>\n' +
    '                </md-card>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/exchange/exchange.tpl.html',
    '<md-dialog ng-cloak>\n' +
    '    <md-toolbar class="md-warn">\n' +
    '        <div class="md-toolbar-tools">\n' +
    '            <h2>{{exCtrl.title}}</h2>\n' +
    '            <span flex></span>\n' +
    '            <md-button class="md-icon-button" ng-click="exCtrl.closeWindow()">\n' +
    '                <md-icon aria-label="Close dialog">close</md-icon>\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </md-toolbar>\n' +
    '    <md-dialog-content>\n' +
    '        <div class="md-dialog-content">\n' +
    '            <div layout-gt-xs="row">\n' +
    '                <div flex-gt-xs="47">\n' +
    '                    <md-toolbar class="md-accent u-margin-b">\n' +
    '                        <h2 class="md-toolbar-tools">\n' +
    '                            З\n' +
    '                        </h2>\n' +
    '                    </md-toolbar>\n' +
    '                    <md-content>\n' +
    '                        <div layout="row">\n' +
    '                            <md-input-container flex>\n' +
    '\n' +
    '                                <label>Account</label>\n' +
    '                                <md-select ng-model="exCtrl.from.account_id">\n' +
    '                                    <md-option ng-repeat="account in exCtrl.accountCategory" value="{{account.id}}">\n' +
    '                                        {{account.name}} ({{account.currency_name}})\n' +
    '                                    </md-option>\n' +
    '                                </md-select>\n' +
    '                            </md-input-container>\n' +
    '                        </div>\n' +
    '                        <div layout="row">\n' +
    '                            <md-input-container flex="60">\n' +
    '                                <label>Price</label>\n' +
    '                                <input ng-model="exCtrl.from.amount" type="number">\n' +
    '                            </md-input-container>\n' +
    '                        </div>\n' +
    '                    </md-content>\n' +
    '                </div>\n' +
    '                <span flex-gt-xs="5"></span>\n' +
    '                <div flex-gt-xs="47">\n' +
    '                    <md-toolbar class="md-info u-margin-b">\n' +
    '                        <h2 class="md-toolbar-tools">\n' +
    '                            На\n' +
    '                        </h2>\n' +
    '                    </md-toolbar>\n' +
    '                    <md-content>\n' +
    '                        <div layout="row">\n' +
    '                            <md-input-container flex>\n' +
    '                                <label>Account</label>\n' +
    '                                <md-select ng-model="exCtrl.to.account_id">\n' +
    '                                    <md-option ng-repeat="account in exCtrl.accountCategory" value="{{account.id}}">\n' +
    '                                        {{account.name}} ({{account.currency_name}})\n' +
    '                                    </md-option>\n' +
    '                                </md-select>\n' +
    '                            </md-input-container>\n' +
    '                        </div>\n' +
    '                        <div layout="row">\n' +
    '                            <md-input-container flex="60">\n' +
    '                                <label>Price</label>\n' +
    '                                <input ng-model="exCtrl.to.amount" type="number">\n' +
    '                            </md-input-container>\n' +
    '                        </div>\n' +
    '                    </md-content>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </md-dialog-content>\n' +
    '    <md-dialog-actions layout="row">\n' +
    '        <md-button ng-click="exCtrl.closeWindow()">\n' +
    '            Відмінити\n' +
    '        </md-button>\n' +
    '        <md-button class="md-primary md-raised u-margin-r-l" ng-click="exCtrl.change()">\n' +
    '            Перевести\n' +
    '        </md-button>\n' +
    '    </md-dialog-actions>\n' +
    '\n' +
    '</md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/logined/header/header.tpl.html',
    '  <div class="site__header site-header" ng-controller="headerController as headerCtrl">\n' +
    '    <div class="container">\n' +
    '      <div class="site-header-layout">\n' +
    '        <div class="site-header-layout__logo">\n' +
    '          <a class="site-logo" href="/#/">\n' +
    '            <span>Budget</span>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="site-header-layout__fit"></div>\n' +
    '\n' +
    '        <div class="site-header-layout__user">\n' +
    '            <a class="site-header__logout" href="#" ng-click="headerCtrl.logout()">\n' +
    '              <md-icon class="material-icons material-icons_user">exit_to_app</md-icon>\n' +
    '            </a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="site-header-layout__nav-toggle">\n' +
    '\n' +
    '          <!--desktop fab-->\n' +
    '          <md-fab-speed-dial md-direction="left" class="md-scale md-fab-top-right md-fab-top-right-nav" ng-if="!headerCtrl.smallScreen">\n' +
    '\n' +
    '            <md-fab-trigger>\n' +
    '              <md-button aria-label="menu" class="md-raised md-warn md-button_override">\n' +
    '                <md-tooltip md-direction="bottom" md-visible="tooltipVisible">додати транзакцію</md-tooltip>\n' +
    '                <md-icon aria-label="menu">add</md-icon> Додати\n' +
    '              </md-button>\n' +
    '            </md-fab-trigger>\n' +
    '            <md-fab-actions>\n' +
    '              <div>\n' +
    '                <md-button aria-label="Дохід" class="md-fab md-raised md-mini"\n' +
    '                           ng-click="headerCtrl.showAddIncomeDialog()">\n' +
    '                  <md-tooltip md-direction="bottom"\n' +
    '                              md-autohide="false">\n' +
    '                    Дохід\n' +
    '                  </md-tooltip>\n' +
    '                  <md-icon aria-label="Дохід">playlist_add</md-icon>\n' +
    '                </md-button>\n' +
    '              </div>\n' +
    '              <div>\n' +
    '                <md-button aria-label="Витрати" class="md-fab md-raised md-mini"\n' +
    '                           ng-click="headerCtrl.showAddExpenseDialog()">\n' +
    '                  <md-tooltip md-direction="bottom"\n' +
    '                              md-autohide="false">\n' +
    '                    Витрати\n' +
    '                  </md-tooltip>\n' +
    '                  <md-icon aria-label="Витрати">remove</md-icon>\n' +
    '                </md-button>\n' +
    '              </div>\n' +
    '              <div>\n' +
    '                <md-button aria-label="Переказ" class="md-fab md-raised md-mini"\n' +
    '                           ng-click="headerCtrl.showExchangeDialog()">\n' +
    '                  <md-tooltip md-direction="bottom"\n' +
    '                              md-autohide="false">\n' +
    '                    Переказ\n' +
    '                  </md-tooltip>\n' +
    '                  <md-icon aria-label="Переказ">redo</md-icon>\n' +
    '                </md-button>\n' +
    '              </div>\n' +
    '            </md-fab-actions>\n' +
    '          </md-fab-speed-dial>\n' +
    '\n' +
    '          <!--mobile fab-->\n' +
    '          <md-fab-speed-dial md-direction="up" class="md-scale md-fab-bottom-right md-fab-bottom-right-nav" ng-if="headerCtrl.smallScreen">\n' +
    '\n' +
    '            <md-fab-trigger>\n' +
    '              <md-button aria-label="menu" class="md-fab md-warn">\n' +
    '                <md-tooltip md-direction="left" md-visible="tooltipVisible">додати транзакцію</md-tooltip>\n' +
    '                <md-icon aria-label="menu">add</md-icon>\n' +
    '              </md-button>\n' +
    '            </md-fab-trigger>\n' +
    '            <md-fab-actions>\n' +
    '              <div>\n' +
    '                <md-button aria-label="Дохід" class="md-fab md-raised md-mini"\n' +
    '                           ng-click="headerCtrl.showAddIncomeDialog()">\n' +
    '                  <md-tooltip md-direction="left"\n' +
    '                              md-autohide="false">\n' +
    '                    Дохід\n' +
    '                  </md-tooltip>\n' +
    '                  <md-icon aria-label="Дохід">playlist_add</md-icon>\n' +
    '                </md-button>\n' +
    '              </div>\n' +
    '              <div>\n' +
    '                <md-button aria-label="Витрати" class="md-fab md-raised md-mini"\n' +
    '                           ng-click="headerCtrl.showAddExpenseDialog()">\n' +
    '                  <md-tooltip md-direction="left"\n' +
    '                              md-autohide="false">\n' +
    '                    Витрати\n' +
    '                  </md-tooltip>\n' +
    '                  <md-icon aria-label="Витрати">remove</md-icon>\n' +
    '                </md-button>\n' +
    '              </div>\n' +
    '              <div>\n' +
    '                <md-button aria-label="Переказ" class="md-fab md-raised md-mini"\n' +
    '                           ng-click="headerCtrl.showExchangeDialog()">\n' +
    '                  <md-tooltip md-direction="left"\n' +
    '                              md-autohide="false">\n' +
    '                    Переказ\n' +
    '                  </md-tooltip>\n' +
    '                  <md-icon aria-label="Переказ">redo</md-icon>\n' +
    '                </md-button>\n' +
    '              </div>\n' +
    '            </md-fab-actions>\n' +
    '          </md-fab-speed-dial>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="site-header-layout__nav">\n' +
    '          <main-menu></main-menu>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/logined/menu/menu.directive.tpl.html',
    '<nav class="site-nav">\n' +
    '    <a class="site-nav__item site-nav__item_state_heading u-hidden-sm-gt" href="" ng-click="menuCtrl.toggleMenu()">\n' +
    '        <span layout="row" layout-align="none center" ng-repeat="item in menuCtrl.menuList" ng-if="menuCtrl.isActive(item.state)">\n' +
    '            <span flex>{{item.name}}</span>\n' +
    '            <i class="material-icons material-icons_more-nav">expand_more</i>\n' +
    '        </span>\n' +
    '    </a>\n' +
    '    <div class="site-nav__list" ng-class="{\'u-hidden-xs-lt\': !menuCtrl.isOpen}">\n' +
    '        <a class="site-nav__item"\n' +
    '           ng-class="menuCtrl.getClass(\'{{item.state}}\')"\n' +
    '           ng-href=\'{{menuCtrl.getRouteSref(item)}}\'\n' +
    '           ng-repeat="item in menuCtrl.menuList"\n' +
    '        >{{item.name}}</a>\n' +
    '    </div>\n' +
    '</nav>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('layouts/logined/subMenu/sub-menu.directive.tpl.html',
    '<div class="site-filterbar">\n' +
    '    <div class="container">\n' +
    '        <div layout-gt-xs layout-align="space-between center">\n' +
    '            <ul class="subnav">\n' +
    '                <li class="subnav__item" ng-repeat="subMenuItem in smCtrl.getSubMenuConfigByType().list">\n' +
    '                    <a class="subnav__link"\n' +
    '                       ng-href="#{{subMenuItem.url}}"\n' +
    '                       ng-class="smCtrl.getClass(\'{{subMenuItem.url}}\')"\n' +
    '\n' +
    '                            >\n' +
    '                        <span class="">{{subMenuItem.name}}</span>\n' +
    '                    </a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/auth/forgotPassword/forgot-password.tpl.html',
    '<div class="auth-block">\n' +
    '    <h3>Forgot your password?</h3>\n' +
    '    <form ng-submit="forgotCtrl.sendPassword()" name="forgotPasswordForm" method="post" novalidate layout="column">\n' +
    '        <md-input-container class="md-block" flex="100">\n' +
    '            <label>Email address</label>\n' +
    '            <input name="emailInput" type="email" ng-model="forgotCtrl.formData.email" required>\n' +
    '\n' +
    '            <div ng-messages="forgotPasswordForm.emailInput.$error" role="alert">\n' +
    '                <div ng-message="required">This is required</div>\n' +
    '                <div ng-message="email">Email is wrong</div>\n' +
    '            </div>\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button class="md-raised md-primary md-button_override" ng-disabled="forgotPasswordForm.$invalid"\n' +
    '                   aria-label="Send" type="submit">Send\n' +
    '        </md-button>\n' +
    '\n' +
    '        <p class="u-text-center u-margin-b-n">\n' +
    '            <a ui-sref="login">\n' +
    '                <small>Повернутись на логін сторінку</small>\n' +
    '            </a>\n' +
    '        </p>\n' +
    '    </form>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/auth/login/login.tpl.html',
    '<div class="auth-block">\n' +
    '    <form name="loginForm" novalidate layout="column" ng-submit="loginCtrl.signIn()">\n' +
    '        <md-input-container class="md-block" flex="100">\n' +
    '            <label>Email</label>\n' +
    '            <input type="email" ng-model="loginCtrl.user.email" required name="loginEmail">\n' +
    '            <div ng-messages="loginForm.loginEmail.$error" role="alert">\n' +
    '                <div ng-message="required">This is required</div>\n' +
    '                <div ng-message="email">Email is wrong</div>\n' +
    '            </div>\n' +
    '        </md-input-container>\n' +
    '        <md-input-container flex="100" class="u-margin-t-n">\n' +
    '            <label>Password</label>\n' +
    '            <input type="password" ng-model="loginCtrl.user.password" required name="loginPassword" ng-minlength="3">\n' +
    '            <div ng-messages="loginForm.loginPassword.$error" role="alert">\n' +
    '                <div ng-message="required">This is required</div>\n' +
    '                <div ng-message="minlength">Password should have 3 symbols at least</div>\n' +
    '            </div>\n' +
    '        </md-input-container>\n' +
    '        <md-button ng-disabled="loginForm.$invalid" class="md-raised md-warn md-button_override" type="submit">Log in\n' +
    '        </md-button>\n' +
    '        <md-button class="md-raised md-primary md-button_override" href="/user/auth/facebook">Facebook</md-button>\n' +
    '        <p class="u-text-center u-margin-b-n">\n' +
    '            <a ui-sref="forgot">\n' +
    '                <small>Forgot password?</small>\n' +
    '            </a>\n' +
    '        </p>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<p>\n' +
    '    Don\'t have an account?\n' +
    '    <a ui-sref="register">Реєстрація</a>\n' +
    '</p>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/auth/register/register.tpl.html',
    '<div class="auth-block">\n' +
    '    <form method="post" ng-submit="regCtrl.signUp()" novalidate layout="column" name="registerForm">\n' +
    '        <md-input-container class="md-block u-margin-b-n" flex="100">\n' +
    '            <label>Email</label>\n' +
    '            <input type="email" ng-model="regCtrl.user.email" required>\n' +
    '        </md-input-container>\n' +
    '        <md-input-container class="md-block u-margin-b-n" flex="100">\n' +
    '            <label>Password</label>\n' +
    '            <input type="password" ng-model="regCtrl.user.password" required>\n' +
    '        </md-input-container>\n' +
    '        <md-input-container class="md-block" flex="100">\n' +
    '            <label>Repeat password</label>\n' +
    '            <input type="password" ng-model="regCtrl.user.rePassword" required>\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button class="md-raised md-primary md-button_override" ng-disabled="registerForm.$invalid" type="submit">\n' +
    '            Зареєструватись\n' +
    '        </md-button>\n' +
    '    </form>\n' +
    '    <p class="u-text-center u-margin-b-n">\n' +
    '        <a ui-sref="login">\n' +
    '            <small>Повернутись на логін сторінку</small>\n' +
    '        </a>\n' +
    '    </p>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/chart/line/line-chart.tpl.html',
    '<div layout="column" ng-cloak class="chart-page">\n' +
    '    <md-toolbar class="md-info">\n' +
    '        <div class="md-toolbar-tools">\n' +
    '            <h2 class="md-flex">{{lineCtrl.title}}</h2>\n' +
    '        </div>\n' +
    '    </md-toolbar>\n' +
    '    <md-content flex layout-padding layout-align="center center">\n' +
    '        <div layout="row">\n' +
    '            <md-input-container flex="50%">\n' +
    '                <label>Year</label>\n' +
    '                <md-select ng-model="lineCtrl.currentYear" ng-change="lineCtrl.getData()">\n' +
    '                    <md-option ng-repeat="year in lineCtrl.years" value="{{year.id}}">\n' +
    '                        {{year.name}}\n' +
    '                    </md-option>\n' +
    '                </md-select>\n' +
    '            </md-input-container>\n' +
    '\n' +
    '            <md-input-container flex="50%">\n' +
    '                <label>Currency</label>\n' +
    '                <md-select ng-model="lineCtrl.currentCurrency" ng-change="lineCtrl.getData()">\n' +
    '                    <md-option ng-repeat="currency in lineCtrl.currencyCategory" value="{{currency.id}}">\n' +
    '                        {{currency.name}}\n' +
    '                    </md-option>\n' +
    '                </md-select>\n' +
    '            </md-input-container>\n' +
    '        </div>\n' +
    '        <canvas\n' +
    '                hide\n' +
    '                show-gt-sm\n' +
    '                flex\n' +
    '                class="chart chart-line"\n' +
    '                chart-data="lineCtrl.chartData.data"\n' +
    '                chart-series="lineCtrl.chartData.series"\n' +
    '                chart-labels="lineCtrl.chartData.labels"\n' +
    '                chart-colours="lineCtrl.chartData.colours"\n' +
    '                height="80"></canvas>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <table class="responsive-table"\n' +
    '                 hide-gt-sm\n' +
    '                 flex>\n' +
    '            <tr>\n' +
    '              <th>Місяць</th>\n' +
    '              <th>Приходи</th>\n' +
    '              <th>Витрати</th>\n' +
    '            </tr>\n' +
    '            <tr ng-repeat="month in lineCtrl.months track by $index">\n' +
    '              <td>{{month.name}}</td>\n' +
    '              <td>{{lineCtrl.chartData.data[0][$index]}}</td>\n' +
    '              <td>{{lineCtrl.chartData.data[1][$index]}}</td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '    </md-content>\n' +
    '</div>');
}]);
})();
