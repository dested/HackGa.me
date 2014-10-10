(function() {
	'use strict';
	var $asm = {};
	global.HackGame = global.HackGame || {};
	global.HackGame.Client = global.HackGame.Client || {};
	global.HackGame.Client.Directives = global.HackGame.Client.Directives || {};
	global.HackGame.Client.Directives.Canvas = global.HackGame.Client.Directives.Canvas || {};
	global.HackGame.Client.Filters = global.HackGame.Client.Filters || {};
	global.HackGame.Client.Level = global.HackGame.Client.Level || {};
	global.HackGame.Client.Scope = global.HackGame.Client.Scope || {};
	global.HackGame.Client.Scope.Controller = global.HackGame.Client.Scope.Controller || {};
	global.HackGame.Client.Scope.Directive = global.HackGame.Client.Scope.Directive || {};
	global.HackGame.Client.Scope.Directive.Canvas = global.HackGame.Client.Scope.Directive.Canvas || {};
	global.HackGame.Client.Services = global.HackGame.Client.Services || {};
	global.HackGame.Client.Utils = global.HackGame.Client.Utils || {};
	ss.initAssembly($asm, 'HackGame.Client');
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.BuildAngular
	var $HackGame_Client_BuildAngular = function() {
		$HackGame_Client_BuildAngular.setup();
	};
	$HackGame_Client_BuildAngular.__typeName = 'HackGame.Client.BuildAngular';
	$HackGame_Client_BuildAngular.setup = function() {
		var module = angular.module('HackGame', ['ui.utils', 'ui.codemirror', 'ui.bootstrap']).config(['$httpProvider', $HackGame_Client_BuildAngular.$buildHttpProvider]).controller($HackGame_Client_Controllers_$LevelSelectorController.$name, [$HackGame_Client_BuildAngular.$scopeName, $HackGame_Client_Services_CreateUIService.name$1, function(scope, createUIService) {
			return new $HackGame_Client_Controllers_$LevelSelectorController(scope, createUIService);
		}]).service($HackGame_Client_Services_CreateUIService.name$1, [$HackGame_Client_BuildAngular.$compileName, $HackGame_Client_BuildAngular.$rootScopeName, function(compileService, rootScopeService) {
			return new $HackGame_Client_Services_CreateUIService(compileService, rootScopeService);
		}]).directive($HackGame_Client_Directives_FancyListDirective.name$1, [function() {
			return new $HackGame_Client_Directives_FancyListDirective();
		}]).directive($HackGame_Client_Directives_FancyListIndexDirective.name$1, [function() {
			return new $HackGame_Client_Directives_FancyListIndexDirective();
		}]).directive($HackGame_Client_Directives_FancyHorizontalListDirective.name$1, [function() {
			return new $HackGame_Client_Directives_FancyHorizontalListDirective();
		}]).directive($HackGame_Client_Directives_FancyHorizontalListIndexDirective.name$1, [function() {
			return new $HackGame_Client_Directives_FancyHorizontalListIndexDirective();
		}]).directive($HackGame_Client_Directives_Canvas_CanvasAssetFrameDirective.name$1, [function() {
			return new $HackGame_Client_Directives_Canvas_CanvasAssetFrameDirective();
		}]).directive($HackGame_Client_Directives_DraggableDirective.name$1, [function() {
			return new $HackGame_Client_Directives_DraggableDirective();
		}]).directive($HackGame_Client_Directives_FloatingWindowDirective.name$1, [function() {
			return new $HackGame_Client_Directives_FloatingWindowDirective();
		}]).directive($HackGame_Client_Directives_ForNextDirective.name$1, [function() {
			return new $HackGame_Client_Directives_ForNextDirective();
		}]).filter($HackGame_Client_Filters_RoundFilter.name$1, [function() {
			var $t1 = new $HackGame_Client_Filters_RoundFilter();
			return ss.mkdel($t1, $t1.filter);
		}]).filter($HackGame_Client_Filters_SwitchFilter.name$1, [function() {
			var $t2 = new $HackGame_Client_Filters_SwitchFilter();
			return ss.mkdel($t2, $t2.filter);
		}]).run([$HackGame_Client_BuildAngular.$http, $HackGame_Client_BuildAngular.$templateCache, $HackGame_Client_Services_CreateUIService.name$1, function(http, templateCache, createUIService1) {
			$HackGame_Client_BuildAngular.$buildCache(http, templateCache);
			createUIService1.create($HackGame_Client_Controllers_$LevelSelectorController.$view);
		}]);
		//            MinimizeController.Register(module);
		angular.bootstrap(window.document, ['HackGame']);
	};
	$HackGame_Client_BuildAngular.$buildCache = function(http, templateCache) {
		var uis = [$HackGame_Client_Controllers_$LevelSelectorController.$view];
		for (var index = 0; index < uis.length; index++) {
			var ui = { $: ss.formatString('{1}partials/UIs/{0}.html', uis[index], $HackGame_Client_Utils_Constants.contentAddress) };
			http.get(ui.$, null).success(ss.mkdel({ ui: ui }, function(a) {
				return templateCache.put(this.ui.$, a);
			}));
		}
	};
	$HackGame_Client_BuildAngular.$buildHttpProvider = function(httpProvider) {
		httpProvider.defaults.useXDomain = true;
		delete httpProvider.defaults.headers.common['X-Requested-With'];
	};
	global.HackGame.Client.BuildAngular = $HackGame_Client_BuildAngular;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Program
	var $HackGame_Client_Program = function() {
		this.manager = null;
		this.manager = new $HackGame_Client_Level_Manager();
		$(ss.mkdel(this, function() {
			this.manager.init();
			//                BuildAngular.Setup();
		}));
	};
	$HackGame_Client_Program.__typeName = 'HackGame.Client.Program';
	$HackGame_Client_Program.main = function() {
		new $HackGame_Client_Program();
	};
	global.HackGame.Client.Program = $HackGame_Client_Program;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Controllers.LevelSelectorController
	var $HackGame_Client_Controllers_$LevelSelectorController = function(scope, createUIService) {
		this.$scope = null;
		this.$createUIService = null;
		this.$scope = scope;
		this.$scope.visible = true;
		this.$createUIService = createUIService;
		this.$scope.model = $HackGame_Client_Scope_Controller_LevelSelectorScopeModel.$ctor();
		this.$scope.callback = $HackGame_Client_Scope_Controller_LevelSelectorScopeCallback.$ctor();
		scope.model.loadingStatus = 'Level Not Loaded';
		this.$scope.callback.windowClosed = function() {
		};
		//scope.SwingAway(SwingDirection.Left, false, null);
		scope.$watch('model.selectedLevel', ss.mkdel(this, function() {
			if (ss.isValue(this.$scope.model.selectedLevel)) {
				this.$scope.callback.loadLevel(this.$scope.model.selectedLevel);
			}
		}));
	};
	$HackGame_Client_Controllers_$LevelSelectorController.__typeName = 'HackGame.Client.Controllers.$LevelSelectorController';
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Directives.DraggableDirective
	var $HackGame_Client_Directives_DraggableDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$HackGame_Client_Directives_DraggableDirective.__typeName = 'HackGame.Client.Directives.DraggableDirective';
	global.HackGame.Client.Directives.DraggableDirective = $HackGame_Client_Directives_DraggableDirective;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Directives.FancyHorizontalListDirective
	var $HackGame_Client_Directives_FancyHorizontalListDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyHorizontalList.html', $HackGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bind: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$HackGame_Client_Directives_FancyHorizontalListDirective.__typeName = 'HackGame.Client.Directives.FancyHorizontalListDirective';
	global.HackGame.Client.Directives.FancyHorizontalListDirective = $HackGame_Client_Directives_FancyHorizontalListDirective;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Directives.FancyHorizontalListIndexDirective
	var $HackGame_Client_Directives_FancyHorizontalListIndexDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyHorizontalListIndex.html', $HackGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bindIndex: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$HackGame_Client_Directives_FancyHorizontalListIndexDirective.__typeName = 'HackGame.Client.Directives.FancyHorizontalListIndexDirective';
	global.HackGame.Client.Directives.FancyHorizontalListIndexDirective = $HackGame_Client_Directives_FancyHorizontalListIndexDirective;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Directives.FancyListDirective
	var $HackGame_Client_Directives_FancyListDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyList.html', $HackGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bind: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$HackGame_Client_Directives_FancyListDirective.__typeName = 'HackGame.Client.Directives.FancyListDirective';
	global.HackGame.Client.Directives.FancyListDirective = $HackGame_Client_Directives_FancyListDirective;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Directives.FancyListIndexDirective
	var $HackGame_Client_Directives_FancyListIndexDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyListIndex.html', $HackGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bindIndex: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$HackGame_Client_Directives_FancyListIndexDirective.__typeName = 'HackGame.Client.Directives.FancyListIndexDirective';
	global.HackGame.Client.Directives.FancyListIndexDirective = $HackGame_Client_Directives_FancyListIndexDirective;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Directives.FloatingWindowDirective
	var $HackGame_Client_Directives_FloatingWindowDirective = function() {
		this.link = null;
		this.$myElement = null;
		this.$myScope = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		//            myUIManagerService = uiManagerService;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/floatingWindow.html', $HackGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { width: '=', height: '=', left: '=', top: '=', windowTitle: '=', visible: '=', onclose: '&' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$HackGame_Client_Directives_FloatingWindowDirective.__typeName = 'HackGame.Client.Directives.FloatingWindowDirective';
	global.HackGame.Client.Directives.FloatingWindowDirective = $HackGame_Client_Directives_FloatingWindowDirective;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Directives.ForNextDirective
	var $HackGame_Client_Directives_ForNextDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$HackGame_Client_Directives_ForNextDirective.__typeName = 'HackGame.Client.Directives.ForNextDirective';
	global.HackGame.Client.Directives.ForNextDirective = $HackGame_Client_Directives_ForNextDirective;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Directives.Canvas.CanvasAssetFrameDirective
	var $HackGame_Client_Directives_Canvas_CanvasAssetFrameDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.template = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.template = '<canvas></canvas>';
		this.replace = true;
		this.transclude = true;
		this.scope = { frame: '=', width: '=', height: '=', inline: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$HackGame_Client_Directives_Canvas_CanvasAssetFrameDirective.__typeName = 'HackGame.Client.Directives.Canvas.CanvasAssetFrameDirective';
	global.HackGame.Client.Directives.Canvas.CanvasAssetFrameDirective = $HackGame_Client_Directives_Canvas_CanvasAssetFrameDirective;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Filters.RoundFilter
	var $HackGame_Client_Filters_RoundFilter = function() {
	};
	$HackGame_Client_Filters_RoundFilter.__typeName = 'HackGame.Client.Filters.RoundFilter';
	global.HackGame.Client.Filters.RoundFilter = $HackGame_Client_Filters_RoundFilter;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Filters.SwitchFilter
	var $HackGame_Client_Filters_SwitchFilter = function() {
	};
	$HackGame_Client_Filters_SwitchFilter.__typeName = 'HackGame.Client.Filters.SwitchFilter';
	global.HackGame.Client.Filters.SwitchFilter = $HackGame_Client_Filters_SwitchFilter;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.Board
	var $HackGame_Client_Level_Board = function() {
	};
	$HackGame_Client_Level_Board.__typeName = 'HackGame.Client.Level.Board';
	global.HackGame.Client.Level.Board = $HackGame_Client_Level_Board;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.Character
	var $HackGame_Client_Level_Character = function(startingState) {
		this.$1$LimbsField = null;
		this.$1$StateField = null;
		this.set_state(startingState);
		this.set_limbs(new $HackGame_Client_Level_CharacterBody());
		var standingSchema = new $HackGame_Client_Level_CharacterBodySchema();
		standingSchema.init();
		this.get_limbs().applySchema(standingSchema);
	};
	$HackGame_Client_Level_Character.__typeName = 'HackGame.Client.Level.Character';
	global.HackGame.Client.Level.Character = $HackGame_Client_Level_Character;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.CharacterBody
	var $HackGame_Client_Level_CharacterBody = function() {
		this.$1$LeftLegField = null;
		this.$1$RightLegField = null;
		this.$1$LeftArmField = null;
		this.$1$RightArmField = null;
		this.$1$HeadField = null;
		this.$1$BodyField = null;
		this.$1$TickCharacterField = null;
	};
	$HackGame_Client_Level_CharacterBody.__typeName = 'HackGame.Client.Level.CharacterBody';
	global.HackGame.Client.Level.CharacterBody = $HackGame_Client_Level_CharacterBody;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.CharacterBodyPart
	var $HackGame_Client_Level_CharacterBodyPart = function() {
		this.$1$ImageField = null;
		this.$1$OffsetField = null;
	};
	$HackGame_Client_Level_CharacterBodyPart.__typeName = 'HackGame.Client.Level.CharacterBodyPart';
	global.HackGame.Client.Level.CharacterBodyPart = $HackGame_Client_Level_CharacterBodyPart;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.CharacterBodySchema
	var $HackGame_Client_Level_CharacterBodySchema = function() {
		this.$1$LeftLegField = null;
		this.$1$RightLegField = null;
		this.$1$LeftArmField = null;
		this.$1$RightArmField = null;
		this.$1$HeadField = null;
		this.$1$BodyField = null;
	};
	$HackGame_Client_Level_CharacterBodySchema.__typeName = 'HackGame.Client.Level.CharacterBodySchema';
	global.HackGame.Client.Level.CharacterBodySchema = $HackGame_Client_Level_CharacterBodySchema;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.CharacterState
	var $HackGame_Client_Level_CharacterState = function() {
		this.$1$LocationField = null;
	};
	$HackGame_Client_Level_CharacterState.__typeName = 'HackGame.Client.Level.CharacterState';
	global.HackGame.Client.Level.CharacterState = $HackGame_Client_Level_CharacterState;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.ImageUtil
	var $HackGame_Client_Level_ImageUtil = function() {
	};
	$HackGame_Client_Level_ImageUtil.__typeName = 'HackGame.Client.Level.ImageUtil';
	$HackGame_Client_Level_ImageUtil.loadImage = function(imageSrc) {
		var $t1 = document.createElement('img');
		var image = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'IMG'));
		image.src = imageSrc;
		return image;
	};
	global.HackGame.Client.Level.ImageUtil = $HackGame_Client_Level_ImageUtil;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.Manager
	var $HackGame_Client_Level_Manager = function() {
		this.$canvas = null;
		this.$1$CharacterField = null;
	};
	$HackGame_Client_Level_Manager.__typeName = 'HackGame.Client.Level.Manager';
	global.HackGame.Client.Level.Manager = $HackGame_Client_Level_Manager;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Level.Point
	var $HackGame_Client_Level_Point = function(x, y) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.set_x(x);
		this.set_y(y);
	};
	$HackGame_Client_Level_Point.__typeName = 'HackGame.Client.Level.Point';
	global.HackGame.Client.Level.Point = $HackGame_Client_Level_Point;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope._KeepBaseScopeAlive
	var $HackGame_Client_Scope__KeepBaseScopeAlive = function() {
	};
	$HackGame_Client_Scope__KeepBaseScopeAlive.__typeName = 'HackGame.Client.Scope._KeepBaseScopeAlive';
	global.HackGame.Client.Scope._KeepBaseScopeAlive = $HackGame_Client_Scope__KeepBaseScopeAlive;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Controller.LevelModel
	var $HackGame_Client_Scope_Controller_LevelModel = function() {
	};
	$HackGame_Client_Scope_Controller_LevelModel.__typeName = 'HackGame.Client.Scope.Controller.LevelModel';
	$HackGame_Client_Scope_Controller_LevelModel.createInstance = function() {
		return $HackGame_Client_Scope_Controller_LevelModel.$ctor();
	};
	$HackGame_Client_Scope_Controller_LevelModel.$ctor = function() {
		var $this = {};
		$this.name = null;
		return $this;
	};
	global.HackGame.Client.Scope.Controller.LevelModel = $HackGame_Client_Scope_Controller_LevelModel;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Controller.LevelSelectorScope
	var $HackGame_Client_Scope_Controller_LevelSelectorScope = function() {
		this.model = null;
		this.callback = null;
		$HackGame_Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$HackGame_Client_Scope_Controller_LevelSelectorScope.__typeName = 'HackGame.Client.Scope.Controller.LevelSelectorScope';
	global.HackGame.Client.Scope.Controller.LevelSelectorScope = $HackGame_Client_Scope_Controller_LevelSelectorScope;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Controller.LevelSelectorScopeCallback
	var $HackGame_Client_Scope_Controller_LevelSelectorScopeCallback = function() {
	};
	$HackGame_Client_Scope_Controller_LevelSelectorScopeCallback.__typeName = 'HackGame.Client.Scope.Controller.LevelSelectorScopeCallback';
	$HackGame_Client_Scope_Controller_LevelSelectorScopeCallback.createInstance = function() {
		return $HackGame_Client_Scope_Controller_LevelSelectorScopeCallback.$ctor();
	};
	$HackGame_Client_Scope_Controller_LevelSelectorScopeCallback.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.loadLevel = null;
		return $this;
	};
	global.HackGame.Client.Scope.Controller.LevelSelectorScopeCallback = $HackGame_Client_Scope_Controller_LevelSelectorScopeCallback;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Controller.LevelSelectorScopeModel
	var $HackGame_Client_Scope_Controller_LevelSelectorScopeModel = function() {
	};
	$HackGame_Client_Scope_Controller_LevelSelectorScopeModel.__typeName = 'HackGame.Client.Scope.Controller.LevelSelectorScopeModel';
	$HackGame_Client_Scope_Controller_LevelSelectorScopeModel.createInstance = function() {
		return $HackGame_Client_Scope_Controller_LevelSelectorScopeModel.$ctor();
	};
	$HackGame_Client_Scope_Controller_LevelSelectorScopeModel.$ctor = function() {
		var $this = {};
		$this.selectedLevel = null;
		$this.loadingStatus = null;
		$this.levels = null;
		return $this;
	};
	global.HackGame.Client.Scope.Controller.LevelSelectorScopeModel = $HackGame_Client_Scope_Controller_LevelSelectorScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Directive.FloatingWindowBaseScope
	var $HackGame_Client_Scope_Directive_FloatingWindowBaseScope = function() {
		this.swingAway = null;
		this.swingBack = null;
		this.minimize = null;
		this.visible = false;
		this.minimized = false;
		this.onClose = null;
		this.onReady = null;
		this.destroyWindow = null;
		$HackGame_Client_Services_ManagedScope.call(this);
	};
	$HackGame_Client_Scope_Directive_FloatingWindowBaseScope.__typeName = 'HackGame.Client.Scope.Directive.FloatingWindowBaseScope';
	global.HackGame.Client.Scope.Directive.FloatingWindowBaseScope = $HackGame_Client_Scope_Directive_FloatingWindowBaseScope;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Directive.FloatingWindowPosition
	var $HackGame_Client_Scope_Directive_FloatingWindowPosition = function() {
	};
	$HackGame_Client_Scope_Directive_FloatingWindowPosition.__typeName = 'HackGame.Client.Scope.Directive.FloatingWindowPosition';
	$HackGame_Client_Scope_Directive_FloatingWindowPosition.createInstance = function() {
		return $HackGame_Client_Scope_Directive_FloatingWindowPosition.$ctor();
	};
	$HackGame_Client_Scope_Directive_FloatingWindowPosition.$ctor = function() {
		var $this = {};
		$this.display = null;
		$this.left = null;
		$this.top = null;
		$this.marginLeft = null;
		$this.marginTop = null;
		$this.zIndex = 0;
		return $this;
	};
	global.HackGame.Client.Scope.Directive.FloatingWindowPosition = $HackGame_Client_Scope_Directive_FloatingWindowPosition;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Directive.FloatingWindowScope
	var $HackGame_Client_Scope_Directive_FloatingWindowScope = function() {
		this.$parent = null;
		this.visible = false;
		this.width = null;
		this.height = null;
		this.left = null;
		this.top = null;
		this.sizeStyle = null;
		this.lastSizeStyle = null;
		this.positionStyles = null;
		this.lastPositionStyles = null;
		this.windowTitle = null;
		this.onclose = null;
		this.close = null;
		this.minimize = null;
		this.maximize = null;
		this.restore = null;
		this.isMaximized = false;
		HackGame.Client.Scope.BaseScope.call(this);
	};
	$HackGame_Client_Scope_Directive_FloatingWindowScope.__typeName = 'HackGame.Client.Scope.Directive.FloatingWindowScope';
	global.HackGame.Client.Scope.Directive.FloatingWindowScope = $HackGame_Client_Scope_Directive_FloatingWindowScope;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Directive.Size
	var $HackGame_Client_Scope_Directive_Size = function() {
	};
	$HackGame_Client_Scope_Directive_Size.__typeName = 'HackGame.Client.Scope.Directive.Size';
	$HackGame_Client_Scope_Directive_Size.createInstance = function() {
		return $HackGame_Client_Scope_Directive_Size.$ctor();
	};
	$HackGame_Client_Scope_Directive_Size.$ctor = function() {
		var $this = {};
		$this.width = null;
		$this.height = null;
		return $this;
	};
	global.HackGame.Client.Scope.Directive.Size = $HackGame_Client_Scope_Directive_Size;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Directive.SwingDirection
	var $HackGame_Client_Scope_Directive_SwingDirection = function() {
	};
	$HackGame_Client_Scope_Directive_SwingDirection.__typeName = 'HackGame.Client.Scope.Directive.SwingDirection';
	global.HackGame.Client.Scope.Directive.SwingDirection = $HackGame_Client_Scope_Directive_SwingDirection;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Scope.Directive.Canvas.CanvasAssetFrameScope
	var $HackGame_Client_Scope_Directive_Canvas_CanvasAssetFrameScope = function() {
		this.inline = false;
		this.width = 0;
		this.height = 0;
		$HackGame_Client_Services_ManagedScope.call(this);
	};
	$HackGame_Client_Scope_Directive_Canvas_CanvasAssetFrameScope.__typeName = 'HackGame.Client.Scope.Directive.Canvas.CanvasAssetFrameScope';
	global.HackGame.Client.Scope.Directive.Canvas.CanvasAssetFrameScope = $HackGame_Client_Scope_Directive_Canvas_CanvasAssetFrameScope;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Services.CreatedUI
	var $HackGame_Client_Services_CreatedUI$1 = function(T) {
		var $type = function(scope, element) {
			this.scope = null;
			this.element = null;
			this.scope = scope;
			this.element = element;
		};
		ss.registerGenericClassInstance($type, $HackGame_Client_Services_CreatedUI$1, [T], {
			destroy: function() {
				if (!ss.staticEquals(this.scope.onDestroy, null)) {
					this.scope.onDestroy();
				}
				this.scope.$destroy();
				this.element.remove();
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$HackGame_Client_Services_CreatedUI$1.__typeName = 'HackGame.Client.Services.CreatedUI$1';
	ss.initGenericClass($HackGame_Client_Services_CreatedUI$1, $asm, 1);
	global.HackGame.Client.Services.CreatedUI$1 = $HackGame_Client_Services_CreatedUI$1;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Services.CreateUIService
	var $HackGame_Client_Services_CreateUIService = function(compileService, rootScopeService) {
		this.$myCompileService = null;
		this.$myRootScopeService = null;
		this.$singltons = {};
		this.$myCompileService = compileService;
		this.$myRootScopeService = rootScopeService;
	};
	$HackGame_Client_Services_CreateUIService.__typeName = 'HackGame.Client.Services.CreateUIService';
	global.HackGame.Client.Services.CreateUIService = $HackGame_Client_Services_CreateUIService;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Services.ManagedScope
	var $HackGame_Client_Services_ManagedScope = function() {
		this.onDestroy = null;
		HackGame.Client.Scope.BaseScope.call(this);
	};
	$HackGame_Client_Services_ManagedScope.__typeName = 'HackGame.Client.Services.ManagedScope';
	global.HackGame.Client.Services.ManagedScope = $HackGame_Client_Services_ManagedScope;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Utils.CanvasInformation
	var $HackGame_Client_Utils_CanvasInformation = function(ele) {
		this.context = null;
		this.jElement = null;
		this.element = null;
		this.context = ss.cast(ss.cast(ele, ss.isValue(ele) && (ss.isInstanceOfType(ele, Element) && ele.tagName === 'CANVAS')).getContext('2d'), CanvasRenderingContext2D);
		this.jElement = $(ele);
		this.element = ss.cast(ele, ss.isValue(ele) && (ss.isInstanceOfType(ele, Element) && ele.tagName === 'CANVAS'));
	};
	$HackGame_Client_Utils_CanvasInformation.__typeName = 'HackGame.Client.Utils.CanvasInformation';
	$HackGame_Client_Utils_CanvasInformation.$ctor1 = function(context, jElement) {
		this.context = null;
		this.jElement = null;
		this.element = null;
		this.context = context;
		this.jElement = jElement;
		var $t1 = jElement[0];
		this.element = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS'));
	};
	$HackGame_Client_Utils_CanvasInformation.get_blackPixel = function() {
		if (ss.isNullOrUndefined($HackGame_Client_Utils_CanvasInformation.$blackPixel)) {
			var m = $HackGame_Client_Utils_CanvasInformation.create(0, 0, false);
			m.context.fillStyle = 'black';
			m.context.fillRect(0, 0, 1, 1);
			$HackGame_Client_Utils_CanvasInformation.$blackPixel = m.element;
		}
		return $HackGame_Client_Utils_CanvasInformation.$blackPixel;
	};
	$HackGame_Client_Utils_CanvasInformation.create = function(w, h, pixelated) {
		var $t1 = document.createElement('canvas');
		var canvas = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS'));
		return $HackGame_Client_Utils_CanvasInformation.create$1(canvas, w, h, pixelated);
	};
	$HackGame_Client_Utils_CanvasInformation.create$1 = function(canvas, w, h, pixelated) {
		if (w === 0) {
			w = 1;
		}
		if (h === 0) {
			h = 1;
		}
		canvas.width = w;
		canvas.height = h;
		var ctx = ss.cast(canvas.getContext('2d'), CanvasRenderingContext2D);
		if (pixelated) {
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false;
		}
		return new $HackGame_Client_Utils_CanvasInformation.$ctor1(ctx, $(canvas));
	};
	global.HackGame.Client.Utils.CanvasInformation = $HackGame_Client_Utils_CanvasInformation;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Utils.Constants
	var $HackGame_Client_Utils_Constants = function() {
	};
	$HackGame_Client_Utils_Constants.__typeName = 'HackGame.Client.Utils.Constants';
	global.HackGame.Client.Utils.Constants = $HackGame_Client_Utils_Constants;
	////////////////////////////////////////////////////////////////////////////////
	// HackGame.Client.Utils.Extensions
	var $HackGame_Client_Utils_Extensions = function() {
	};
	$HackGame_Client_Utils_Extensions.__typeName = 'HackGame.Client.Utils.Extensions';
	global.HackGame.Client.Utils.Extensions = $HackGame_Client_Utils_Extensions;
	ss.initClass($HackGame_Client_BuildAngular, $asm, {});
	ss.initClass($HackGame_Client_Program, $asm, {});
	ss.initClass($HackGame_Client_Controllers_$LevelSelectorController, $asm, {});
	ss.initClass($HackGame_Client_Directives_DraggableDirective, $asm, {
		$linkFn: function(scope, element, attrs) {
			element.draggable({ cancel: '.window .inner-window' });
		}
	});
	ss.initClass($HackGame_Client_Directives_FancyHorizontalListDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(item) {
				scope.bind = item;
			};
			scope.currentClass = function(item1) {
				return (!!ss.referenceEquals(item1, scope.bind) ? 'fancy-horizontal-list-item fancy-horizontal-list-item-selected' : 'fancy-horizontal-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($HackGame_Client_Directives_FancyHorizontalListIndexDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(index) {
				scope.bindIndex = index;
			};
			scope.currentClass = function(index1) {
				return (!!ss.referenceEquals(index1, scope.bindIndex) ? 'fancy-horizontal-list-item fancy-horizontal-list-item-selected' : 'fancy-horizontal-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($HackGame_Client_Directives_FancyListDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(item) {
				scope.bind = item;
			};
			scope.currentClass = function(item1) {
				return (!!ss.referenceEquals(item1, scope.bind) ? 'fancy-list-item fancy-list-item-selected' : 'fancy-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($HackGame_Client_Directives_FancyListIndexDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(index) {
				scope.bindIndex = index;
			};
			scope.currentClass = function(index1) {
				return (!!ss.referenceEquals(index1, scope.bindIndex) ? 'fancy-list-item fancy-list-item-selected' : 'fancy-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($HackGame_Client_Directives_FloatingWindowDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			this.$myElement = element;
			this.$myScope = scope;
			$HackGame_Client_Directives_FloatingWindowDirective.$items.add(element, scope);
			element.click(ss.thisFix(ss.mkdel(this, function(elem, event) {
				this.$focus();
			})));
			scope.$parent.swingAway = ss.mkdel(this, function(a, b, c) {
				this.swingAway(a, b, element, c);
			});
			scope.$parent.swingBack = ss.mkdel(this, function(c1) {
				this.swingBack(scope, element, c1);
			});
			scope.$parent.minimize = function() {
				scope.$parent.minimized = true;
				scope.minimize();
			};
			scope.$parent.destroyWindow = function() {
				scope.$destroy();
				element.remove();
			};
			var $t1 = $HackGame_Client_Scope_Directive_FloatingWindowPosition.$ctor();
			$t1.left = scope.left;
			$t1.top = scope.top;
			$t1.display = 'block';
			scope.positionStyles = $t1;
			scope.positionStyles.zIndex = 10000;
			if (scope.left.indexOf('%') !== -1) {
				scope.positionStyles.marginLeft = -ss.Int32.div(parseInt(ss.replaceAllString(scope.width, 'px', '')), 2) + 'px';
			}
			if (scope.top.indexOf('%') !== -1) {
				scope.positionStyles.marginTop = -ss.Int32.div(parseInt(ss.replaceAllString(scope.height, 'px', '')), 2) + 'px';
			}
			var $t2 = $HackGame_Client_Scope_Directive_Size.$ctor();
			$t2.width = scope.width;
			$t2.height = scope.height;
			scope.sizeStyle = $t2;
			scope.maximize = function() {
				if (!scope.isMaximized) {
					scope.lastPositionStyles = scope.positionStyles;
					scope.lastSizeStyle = scope.sizeStyle;
					var $t3 = $HackGame_Client_Scope_Directive_FloatingWindowPosition.$ctor();
					$t3.left = '0';
					$t3.top = '0';
					$t3.display = 'block';
					scope.positionStyles = $t3;
					var $t4 = $HackGame_Client_Scope_Directive_Size.$ctor();
					$t4.width = '100%';
					$t4.height = '100%';
					scope.sizeStyle = $t4;
				}
				else {
					scope.positionStyles = scope.lastPositionStyles;
					scope.sizeStyle = scope.lastSizeStyle;
					scope.lastPositionStyles = null;
					scope.lastSizeStyle = null;
				}
				scope.isMaximized = !scope.isMaximized;
			};
			scope.close = function() {
				if (!ss.staticEquals(scope.onclose, null)) {
					scope.onclose();
				}
				if (!ss.staticEquals(scope.$parent.onClose, null)) {
					scope.$parent.onClose();
				}
				//todo destroy
				scope.positionStyles.display = 'none';
			};
			scope.minimize = function() {
				//                myUIManagerService.OnMinimize(scope);
				scope.$parent.swingAway(5, false, function() {
					scope.positionStyles.display = 'none';
				});
			};
			scope.restore = function() {
				scope.$parent.swingBack(null);
				scope.positionStyles.display = 'block';
			};
			this.$focus();
			if (!ss.staticEquals(scope.$parent.onReady, null)) {
				scope.$parent.onReady();
			}
		},
		$focus: function() {
			var $t1 = $HackGame_Client_Directives_FloatingWindowDirective.$items.getEnumerator();
			try {
				while ($t1.moveNext()) {
					var floatingWindowScope = $t1.current();
					floatingWindowScope.value.positionStyles.zIndex = 10000;
				}
			}
			finally {
				$t1.dispose();
			}
			if ($HackGame_Client_Directives_FloatingWindowDirective.$items.containsKey(this.$myElement)) {
				$HackGame_Client_Directives_FloatingWindowDirective.$items.get_item(this.$myElement).positionStyles.zIndex = 10001;
				if (ss.isNullOrUndefined(this.$myScope.$root.$$phase)) {
					this.$myScope.$apply();
				}
			}
		},
		swingBack: function(scope, element, callback) {
			window.setTimeout(function() {
				var js = {};
				js['left'] = scope.left;
				js['top'] = scope.top;
				element.css('display', 'block');
				element.animate(js, 'fast', 'swing', callback);
			}, 1);
		},
		swingAway: function(direction, simulate, element, callback) {
			var js = {};
			var distance = '3000';
			switch (direction) {
				case 0: {
					js['left'] = '-' + distance + 'px';
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 1: {
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 2: {
					js['left'] = distance + 'px';
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 3: {
					js['left'] = distance + 'px';
					break;
				}
				case 4: {
					js['left'] = distance + 'px';
					js['top'] = distance + 'px';
					break;
				}
				case 5: {
					js['top'] = distance + 'px';
					break;
				}
				case 6: {
					js['left'] = '-' + distance + 'px';
					js['top'] = distance + 'px';
					break;
				}
				case 7: {
					js['left'] = distance + 'px';
					break;
				}
			}
			if (simulate) {
				element.css(js);
				element.css('display', 'none');
				if (!ss.staticEquals(callback, null)) {
					callback();
				}
			}
			else {
				element.animate(js, 'slow', 'swing', function() {
					element.css('display', 'none');
					if (!ss.staticEquals(callback, null)) {
						callback();
					}
				});
			}
		}
	});
	ss.initClass($HackGame_Client_Directives_ForNextDirective, $asm, {
		$linkFn: function(scope, element, attrs) {
			$HackGame_Client_Directives_ForNextDirective.$forCounter++;
			var next = element.next();
			var id = next.attr('id');
			if (ss.isNullOrUndefined(id)) {
				id = 'forLink' + $HackGame_Client_Directives_ForNextDirective.$forCounter;
				next.attr('id', id);
			}
			element.attr('for', id);
		}
	});
	ss.initClass($HackGame_Client_Directives_Canvas_CanvasAssetFrameDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			element.width(scope.width);
			element.height(scope.height);
			element[0].style.display = (scope.inline ? 'inline-block' : 'block');
			var $t1 = element[0];
			var context = ss.cast(ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS')).getContext('2d'), CanvasRenderingContext2D);
			var updateFrame = function() {
				context.canvas.width = context.canvas.width;
				context.webkitImageSmoothingEnabled = false;
				context.mozImageSmoothingEnabled = false;
				context.imageSmoothingEnabled = false;
			};
			scope.$watch('frame', updateFrame);
			scope.$watch('frame.width', updateFrame);
			scope.$watch('frame.height', updateFrame);
		}
	});
	ss.initClass($HackGame_Client_Filters_RoundFilter, $asm, {
		filter: function(input) {
			return parseInt(input.toString());
		}
	});
	ss.initClass($HackGame_Client_Filters_SwitchFilter, $asm, {
		filter: function(val, on, off) {
			return (val ? on : off);
		}
	});
	ss.initClass($HackGame_Client_Level_Board, $asm, {});
	ss.initClass($HackGame_Client_Level_Character, $asm, {
		get_limbs: function() {
			return this.$1$LimbsField;
		},
		set_limbs: function(value) {
			this.$1$LimbsField = value;
		},
		get_state: function() {
			return this.$1$StateField;
		},
		set_state: function(value) {
			this.$1$StateField = value;
		},
		tick: function(updateTime) {
			this.$tickPhysics(updateTime);
			this.get_limbs().tick(updateTime, this.get_state());
		},
		$tickPhysics: function(updateTime) {
			var $t1 = this.get_state().get_location();
			$t1.set_x($t1.get_x() + 1);
		},
		render: function(context, updateTime) {
			context.save();
			context.translate(this.get_state().get_location().get_x(), this.get_state().get_location().get_y());
			context.save();
			context.translate(ss.Int32.div(-this.get_limbs().get_head().get_image().width, 2), ss.Int32.div(-this.get_limbs().get_head().get_image().height, 2));
			context.drawImage(this.get_limbs().get_head().get_image(), this.get_limbs().get_head().get_offset().get_x(), this.get_limbs().get_head().get_offset().get_y());
			context.restore();
			context.save();
			context.translate(ss.Int32.div(-this.get_limbs().get_body().get_image().width, 2), ss.Int32.div(-this.get_limbs().get_body().get_image().height, 2));
			context.drawImage(this.get_limbs().get_body().get_image(), this.get_limbs().get_body().get_offset().get_x(), this.get_limbs().get_body().get_offset().get_y());
			context.restore();
			context.save();
			context.translate(ss.Int32.div(-this.get_limbs().get_leftArm().get_image().width, 2), ss.Int32.div(-this.get_limbs().get_leftArm().get_image().height, 2));
			context.drawImage(this.get_limbs().get_leftArm().get_image(), this.get_limbs().get_leftArm().get_offset().get_x(), this.get_limbs().get_leftArm().get_offset().get_y());
			context.restore();
			context.save();
			context.translate(ss.Int32.div(-this.get_limbs().get_rightArm().get_image().width, 2), ss.Int32.div(-this.get_limbs().get_rightArm().get_image().height, 2));
			context.drawImage(this.get_limbs().get_rightArm().get_image(), this.get_limbs().get_rightArm().get_offset().get_x(), this.get_limbs().get_rightArm().get_offset().get_y());
			context.restore();
			context.save();
			context.translate(ss.Int32.div(-this.get_limbs().get_leftLeg().get_image().width, 2), ss.Int32.div(-this.get_limbs().get_leftLeg().get_image().height, 2));
			context.drawImage(this.get_limbs().get_leftLeg().get_image(), this.get_limbs().get_leftLeg().get_offset().get_x(), this.get_limbs().get_leftLeg().get_offset().get_y());
			context.restore();
			context.save();
			context.translate(ss.Int32.div(-this.get_limbs().get_rightLeg().get_image().width, 2), ss.Int32.div(-this.get_limbs().get_rightLeg().get_image().height, 2));
			context.drawImage(this.get_limbs().get_rightLeg().get_image(), this.get_limbs().get_rightLeg().get_offset().get_x(), this.get_limbs().get_rightLeg().get_offset().get_y());
			context.restore();
			context.restore();
		}
	});
	ss.initClass($HackGame_Client_Level_CharacterBody, $asm, {
		get_leftLeg: function() {
			return this.$1$LeftLegField;
		},
		set_leftLeg: function(value) {
			this.$1$LeftLegField = value;
		},
		get_rightLeg: function() {
			return this.$1$RightLegField;
		},
		set_rightLeg: function(value) {
			this.$1$RightLegField = value;
		},
		get_leftArm: function() {
			return this.$1$LeftArmField;
		},
		set_leftArm: function(value) {
			this.$1$LeftArmField = value;
		},
		get_rightArm: function() {
			return this.$1$RightArmField;
		},
		set_rightArm: function(value) {
			this.$1$RightArmField = value;
		},
		get_head: function() {
			return this.$1$HeadField;
		},
		set_head: function(value) {
			this.$1$HeadField = value;
		},
		get_body: function() {
			return this.$1$BodyField;
		},
		set_body: function(value) {
			this.$1$BodyField = value;
		},
		get_tickCharacter: function() {
			return this.$1$TickCharacterField;
		},
		set_tickCharacter: function(value) {
			this.$1$TickCharacterField = value;
		},
		applySchema: function(schema) {
			this.set_leftLeg(schema.get_leftLeg());
			this.set_rightLeg(schema.get_rightLeg());
			this.set_leftArm(schema.get_leftArm());
			this.set_rightArm(schema.get_rightArm());
			this.set_head(schema.get_head());
			this.set_body(schema.get_body());
			this.set_tickCharacter(ss.mkdel(schema, schema.tickCharacter));
		},
		tick: function(updateTime, characterState) {
			this.get_tickCharacter()(updateTime, characterState);
		}
	});
	ss.initClass($HackGame_Client_Level_CharacterBodyPart, $asm, {
		get_image: function() {
			return this.$1$ImageField;
		},
		set_image: function(value) {
			this.$1$ImageField = value;
		},
		get_offset: function() {
			return this.$1$OffsetField;
		},
		set_offset: function(value) {
			this.$1$OffsetField = value;
		}
	});
	ss.initClass($HackGame_Client_Level_CharacterBodySchema, $asm, {
		get_leftLeg: function() {
			return this.$1$LeftLegField;
		},
		set_leftLeg: function(value) {
			this.$1$LeftLegField = value;
		},
		get_rightLeg: function() {
			return this.$1$RightLegField;
		},
		set_rightLeg: function(value) {
			this.$1$RightLegField = value;
		},
		get_leftArm: function() {
			return this.$1$LeftArmField;
		},
		set_leftArm: function(value) {
			this.$1$LeftArmField = value;
		},
		get_rightArm: function() {
			return this.$1$RightArmField;
		},
		set_rightArm: function(value) {
			this.$1$RightArmField = value;
		},
		get_head: function() {
			return this.$1$HeadField;
		},
		set_head: function(value) {
			this.$1$HeadField = value;
		},
		get_body: function() {
			return this.$1$BodyField;
		},
		set_body: function(value) {
			this.$1$BodyField = value;
		},
		init: function() {
			var $t1 = new $HackGame_Client_Level_CharacterBodyPart();
			$t1.set_image($HackGame_Client_Level_ImageUtil.loadImage('/images/character/leftLeg.png'));
			$t1.set_offset(new $HackGame_Client_Level_Point(-15, 40));
			this.set_leftLeg($t1);
			var $t2 = new $HackGame_Client_Level_CharacterBodyPart();
			$t2.set_image($HackGame_Client_Level_ImageUtil.loadImage('/images/character/rightLeg.png'));
			$t2.set_offset(new $HackGame_Client_Level_Point(20, 40));
			this.set_rightLeg($t2);
			var $t3 = new $HackGame_Client_Level_CharacterBodyPart();
			$t3.set_image($HackGame_Client_Level_ImageUtil.loadImage('/images/character/leftArm.png'));
			$t3.set_offset(new $HackGame_Client_Level_Point(-15, -10));
			this.set_leftArm($t3);
			var $t4 = new $HackGame_Client_Level_CharacterBodyPart();
			$t4.set_image($HackGame_Client_Level_ImageUtil.loadImage('/images/character/rightArm.png'));
			$t4.set_offset(new $HackGame_Client_Level_Point(25, -10));
			this.set_rightArm($t4);
			var $t5 = new $HackGame_Client_Level_CharacterBodyPart();
			$t5.set_image($HackGame_Client_Level_ImageUtil.loadImage('/images/character/head.png'));
			$t5.set_offset(new $HackGame_Client_Level_Point(0, -40));
			this.set_head($t5);
			var $t6 = new $HackGame_Client_Level_CharacterBodyPart();
			$t6.set_image($HackGame_Client_Level_ImageUtil.loadImage('/images/character/body.png'));
			$t6.set_offset(new $HackGame_Client_Level_Point(0, 0));
			this.set_body($t6);
		},
		tickCharacter: function(updateTime, characterState) {
		}
	});
	ss.initClass($HackGame_Client_Level_CharacterState, $asm, {
		get_location: function() {
			return this.$1$LocationField;
		},
		set_location: function(value) {
			this.$1$LocationField = value;
		}
	});
	ss.initClass($HackGame_Client_Level_ImageUtil, $asm, {});
	ss.initClass($HackGame_Client_Level_Manager, $asm, {
		init: function() {
			this.$canvas = new $HackGame_Client_Utils_CanvasInformation(document.getElementById('board'));
			window.addEventListener('resize', ss.mkdel(this, function(e) {
				this.resizeCanvas(true);
			}));
			$(document).resize(ss.mkdel(this, function(e1) {
				this.resizeCanvas(true);
			}));
			window.setInterval(ss.mkdel(this, this.tick), 16);
			window.setInterval(ss.mkdel(this, this.render), 16);
			this.resizeCanvas(true);
			var $t1 = new $HackGame_Client_Level_CharacterState();
			$t1.set_location(new $HackGame_Client_Level_Point(50, 200));
			this.set_character(new $HackGame_Client_Level_Character($t1));
		},
		get_character: function() {
			return this.$1$CharacterField;
		},
		set_character: function(value) {
			this.$1$CharacterField = value;
		},
		resizeCanvas: function(resetOverride) {
			var canvasWidth = $(window).width();
			var canvasHeight = $(window).height();
			this.$canvas.jElement.attr('width', canvasWidth.toString());
			this.$canvas.jElement.attr('height', canvasHeight.toString());
		},
		tick: function() {
			this.get_character().tick(new ss.TimeSpan(0));
		},
		render: function() {
			this.$canvas.clear();
			this.get_character().render(this.$canvas.context, new ss.TimeSpan(0));
		}
	});
	ss.initClass($HackGame_Client_Level_Point, $asm, {
		get_x: function() {
			return this.$1$XField;
		},
		set_x: function(value) {
			this.$1$XField = value;
		},
		get_y: function() {
			return this.$1$YField;
		},
		set_y: function(value) {
			this.$1$YField = value;
		}
	});
	ss.initClass($HackGame_Client_Scope__KeepBaseScopeAlive, $asm, {});
	ss.initClass($HackGame_Client_Scope_Controller_LevelModel, $asm, {});
	ss.initClass($HackGame_Client_Services_ManagedScope, $asm, {}, HackGame.Client.Scope.BaseScope);
	ss.initClass($HackGame_Client_Scope_Directive_FloatingWindowBaseScope, $asm, {}, $HackGame_Client_Services_ManagedScope);
	ss.initClass($HackGame_Client_Scope_Controller_LevelSelectorScope, $asm, {}, $HackGame_Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($HackGame_Client_Scope_Controller_LevelSelectorScopeCallback, $asm, {});
	ss.initClass($HackGame_Client_Scope_Controller_LevelSelectorScopeModel, $asm, {});
	ss.initClass($HackGame_Client_Scope_Directive_FloatingWindowPosition, $asm, {});
	ss.initClass($HackGame_Client_Scope_Directive_FloatingWindowScope, $asm, {}, HackGame.Client.Scope.BaseScope);
	ss.initClass($HackGame_Client_Scope_Directive_Size, $asm, {});
	ss.initEnum($HackGame_Client_Scope_Directive_SwingDirection, $asm, { topLeft: 0, top: 1, topRight: 2, right: 3, bottomRight: 4, bottom: 5, bottomLeft: 6, left: 7 });
	ss.initClass($HackGame_Client_Scope_Directive_Canvas_CanvasAssetFrameScope, $asm, {}, $HackGame_Client_Services_ManagedScope);
	ss.initClass($HackGame_Client_Services_CreateUIService, $asm, {
		create$1: function(T) {
			return function(ui) {
				return this.create$3(T).call(this, ui, function(a, b) {
				});
			};
		},
		create$3: function(T) {
			return function(ui, populateScope) {
				var scope = this.$myRootScopeService.$new();
				var html = $(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $HackGame_Client_Utils_Constants.contentAddress));
				populateScope(scope, html);
				var item = this.$myCompileService(html)(scope);
				item.appendTo(window.document.body);
				if (ss.isNullOrUndefined(scope.$$phase)) {
					scope.$apply();
				}
				scope = angular.element(item.children()[0]).scope() || scope;
				return new (ss.makeGenericType($HackGame_Client_Services_CreatedUI$1, [T]))(scope, item);
			};
		},
		createSingleton: function(ui) {
			return this.createSingleton$1($HackGame_Client_Services_ManagedScope).call(this, ui);
		},
		createSingleton$1: function(T) {
			return function(ui) {
				return this.createSingleton$2(T).call(this, ui, function(a, b) {
				});
			};
		},
		createSingleton$2: function(T) {
			return function(ui, populateScope) {
				var scope;
				if (ss.keyExists(this.$singltons, ui)) {
					var html = this.$singltons[ui];
					if (html.parent().length === 0) {
						delete this.$singltons[ui];
					}
				}
				if (ss.keyExists(this.$singltons, ui)) {
					var html1 = this.$singltons[ui];
					if (html1[0].nodeType === 8) {
						this.$singltons[ui] = html1 = html1.next();
					}
					scope = this.$myRootScopeService.$new();
					populateScope(scope, html1);
					var item = this.$myCompileService(html1)(scope);
					if (ss.isNullOrUndefined(scope.$$phase)) {
						scope.$apply();
					}
					scope = angular.element(item.children()[0]).scope() || scope;
					return new (ss.makeGenericType($HackGame_Client_Services_CreatedUI$1, [T]))(scope, html1);
				}
				else {
					scope = this.$myRootScopeService.$new();
					var html2 = $(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $HackGame_Client_Utils_Constants.contentAddress));
					populateScope(scope, html2);
					var item1 = this.$myCompileService(html2)(scope);
					item1.appendTo(window.document.body);
					if (ss.isNullOrUndefined(scope.$$phase)) {
						scope.$apply();
					}
					scope = angular.element(item1.children()[0]).scope() || scope;
					this.$singltons[ui] = item1;
					return new (ss.makeGenericType($HackGame_Client_Services_CreatedUI$1, [T]))(scope, item1);
				}
			};
		},
		create: function(ui) {
			var scope = this.$myRootScopeService.$new();
			var item = this.$myCompileService($(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $HackGame_Client_Utils_Constants.contentAddress)))(scope);
			item.appendTo(window.document.body);
			if (ss.isNullOrUndefined(scope.$$phase)) {
				scope.$apply();
			}
			scope = angular.element(item.children()[0]).scope() || scope;
			return new (ss.makeGenericType($HackGame_Client_Services_CreatedUI$1, [$HackGame_Client_Services_ManagedScope]))(scope, item);
		},
		create$2: function(ui, scope) {
			var item = this.$myCompileService($(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $HackGame_Client_Utils_Constants.contentAddress)))(scope);
			item.appendTo(window.document.body);
			if (ss.isNullOrUndefined(scope.$$phase)) {
				scope.$apply();
			}
			scope = angular.element(item.children()[0]).scope() || scope;
			return new (ss.makeGenericType($HackGame_Client_Services_CreatedUI$1, [$HackGame_Client_Services_ManagedScope]))(scope, item);
		}
	});
	ss.initClass($HackGame_Client_Utils_CanvasInformation, $asm, {
		clear: function() {
			this.element.width = this.element.width;
		}
	});
	$HackGame_Client_Utils_CanvasInformation.$ctor1.prototype = $HackGame_Client_Utils_CanvasInformation.prototype;
	ss.initClass($HackGame_Client_Utils_Constants, $asm, {});
	ss.initClass($HackGame_Client_Utils_Extensions, $asm, {});
	$HackGame_Client_Controllers_$LevelSelectorController.$name = 'LevelSelectorController';
	$HackGame_Client_Controllers_$LevelSelectorController.$view = 'LevelSelector';
	$HackGame_Client_Utils_Constants.contentAddress = '';
	$HackGame_Client_Services_CreateUIService.name$1 = 'CreateUIService';
	$HackGame_Client_Directives_FancyListDirective.name$1 = 'fancyList';
	$HackGame_Client_Directives_FancyListIndexDirective.name$1 = 'fancyListIndex';
	$HackGame_Client_Directives_FancyHorizontalListDirective.name$1 = 'fancyHorizontalList';
	$HackGame_Client_Directives_FancyHorizontalListIndexDirective.name$1 = 'fancyHorizontalListIndex';
	$HackGame_Client_Directives_Canvas_CanvasAssetFrameDirective.name$1 = 'canvasAssetFrame';
	$HackGame_Client_Directives_DraggableDirective.name$1 = 'draggable';
	$HackGame_Client_Directives_FloatingWindowDirective.name$1 = 'floatingWindow';
	$HackGame_Client_Directives_FloatingWindowDirective.$items = new (ss.makeGenericType(ss.Dictionary$2, [Object, $HackGame_Client_Scope_Directive_FloatingWindowScope]))();
	$HackGame_Client_Directives_ForNextDirective.name$1 = 'forNext';
	$HackGame_Client_Directives_ForNextDirective.$forCounter = 0;
	$HackGame_Client_Filters_RoundFilter.name$1 = 'round';
	$HackGame_Client_Filters_SwitchFilter.name$1 = 'switch';
	$HackGame_Client_BuildAngular.$scopeName = '$scope';
	$HackGame_Client_BuildAngular.$rootScopeName = '$rootScope';
	$HackGame_Client_BuildAngular.$compileName = '$compile';
	$HackGame_Client_BuildAngular.$http = '$http';
	$HackGame_Client_BuildAngular.$templateCache = '$templateCache';
	$HackGame_Client_Utils_CanvasInformation.$blackPixel = null;
	$HackGame_Client_Program.main();
})();
