'use strict';"use strict";
var async_1 = require('angular2/src/facade/async');
var lang_1 = require('angular2/src/facade/lang');
var instruction_1 = require('../../instruction');
var SyncRouteHandler = (function () {
    function SyncRouteHandler(componentType, data) {
        this.componentType = componentType;
        /** @internal */
        this._resolvedComponent = null;
        this._resolvedComponent = async_1.PromiseWrapper.resolve(componentType);
        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
    }
    SyncRouteHandler.prototype.resolveComponentType = function () { return this._resolvedComponent; };
    return SyncRouteHandler;
}());
exports.SyncRouteHandler = SyncRouteHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luY19yb3V0ZV9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1MNmE0bERpRC50bXAvYW5ndWxhcjIvc3JjL3JvdXRlci9ydWxlcy9yb3V0ZV9oYW5kbGVycy9zeW5jX3JvdXRlX2hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNCQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELHFCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBR3pELDRCQUEwQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRzlEO0lBTUUsMEJBQW1CLGFBQW1CLEVBQUUsSUFBMkI7UUFBaEQsa0JBQWEsR0FBYixhQUFhLENBQU07UUFIdEMsZ0JBQWdCO1FBQ2hCLHVCQUFrQixHQUFpQixJQUFJLENBQUM7UUFHdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHNCQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLHVCQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsOEJBQWdCLENBQUM7SUFDdkUsQ0FBQztJQUVELCtDQUFvQixHQUFwQixjQUF1QyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMxRSx1QkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksd0JBQWdCLG1CQVk1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge2lzUHJlc2VudCwgVHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtSb3V0ZUhhbmRsZXJ9IGZyb20gJy4vcm91dGVfaGFuZGxlcic7XG5pbXBvcnQge1JvdXRlRGF0YSwgQkxBTktfUk9VVEVfREFUQX0gZnJvbSAnLi4vLi4vaW5zdHJ1Y3Rpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBTeW5jUm91dGVIYW5kbGVyIGltcGxlbWVudHMgUm91dGVIYW5kbGVyIHtcbiAgcHVibGljIGRhdGE6IFJvdXRlRGF0YTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9yZXNvbHZlZENvbXBvbmVudDogUHJvbWlzZTxhbnk+ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcG9uZW50VHlwZTogVHlwZSwgZGF0YT86IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gICAgdGhpcy5fcmVzb2x2ZWRDb21wb25lbnQgPSBQcm9taXNlV3JhcHBlci5yZXNvbHZlKGNvbXBvbmVudFR5cGUpO1xuICAgIHRoaXMuZGF0YSA9IGlzUHJlc2VudChkYXRhKSA/IG5ldyBSb3V0ZURhdGEoZGF0YSkgOiBCTEFOS19ST1VURV9EQVRBO1xuICB9XG5cbiAgcmVzb2x2ZUNvbXBvbmVudFR5cGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIHRoaXMuX3Jlc29sdmVkQ29tcG9uZW50OyB9XG59XG4iXX0=