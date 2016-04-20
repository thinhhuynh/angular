'use strict';"use strict";
var compile_metadata_1 = require('./compile_metadata');
var view_1 = require('angular2/src/core/linker/view');
var debug_context_1 = require('angular2/src/core/linker/debug_context');
var view_utils_1 = require('angular2/src/core/linker/view_utils');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var element_1 = require('angular2/src/core/linker/element');
var element_ref_1 = require('angular2/src/core/linker/element_ref');
var view_container_ref_1 = require('angular2/src/core/linker/view_container_ref');
var api_1 = require('angular2/src/core/render/api');
var view_2 = require('angular2/src/core/metadata/view');
var view_type_1 = require('angular2/src/core/linker/view_type');
var linker_1 = require('angular2/src/core/linker');
var injector_1 = require('angular2/src/core/di/injector');
var template_ref_1 = require('angular2/src/core/linker/template_ref');
var util_1 = require('./util');
var APP_VIEW_MODULE_URL = 'asset:angular2/lib/src/core/linker/view' + util_1.MODULE_SUFFIX;
var VIEW_UTILS_MODULE_URL = 'asset:angular2/lib/src/core/linker/view_utils' + util_1.MODULE_SUFFIX;
var CD_MODULE_URL = 'asset:angular2/lib/src/core/change_detection/change_detection' + util_1.MODULE_SUFFIX;
// Reassign the imports to different variables so we can
// define static variables with the name of the import.
// (only needed for Dart).
var impViewUtils = view_utils_1.ViewUtils;
var impAppView = view_1.AppView;
var impDebugContext = debug_context_1.DebugContext;
var impAppElement = element_1.AppElement;
var impElementRef = element_ref_1.ElementRef;
var impViewContainerRef = view_container_ref_1.ViewContainerRef;
var impChangeDetectorRef = change_detection_1.ChangeDetectorRef;
var impRenderComponentType = api_1.RenderComponentType;
var impQueryList = linker_1.QueryList;
var impTemplateRef = template_ref_1.TemplateRef;
var impTemplateRef_ = template_ref_1.TemplateRef_;
var impValueUnwrapper = change_detection_1.ValueUnwrapper;
var impInjector = injector_1.Injector;
var impViewEncapsulation = view_2.ViewEncapsulation;
var impViewType = view_type_1.ViewType;
var impChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
var impStaticNodeDebugInfo = debug_context_1.StaticNodeDebugInfo;
var impRenderer = api_1.Renderer;
var impSimpleChange = change_detection_1.SimpleChange;
var impUninitialized = change_detection_1.uninitialized;
var impChangeDetectorState = change_detection_1.ChangeDetectorState;
var impFlattenNestedViewRenderNodes = view_utils_1.flattenNestedViewRenderNodes;
var impDevModeEqual = change_detection_1.devModeEqual;
var impInterpolate = view_utils_1.interpolate;
var impCheckBinding = view_utils_1.checkBinding;
var Identifiers = (function () {
    function Identifiers() {
    }
    Identifiers.ViewUtils = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ViewUtils',
        moduleUrl: 'asset:angular2/lib/src/core/linker/view_utils' + util_1.MODULE_SUFFIX,
        runtime: impViewUtils
    });
    Identifiers.AppView = new compile_metadata_1.CompileIdentifierMetadata({ name: 'AppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impAppView });
    Identifiers.AppElement = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'AppElement',
        moduleUrl: 'asset:angular2/lib/src/core/linker/element' + util_1.MODULE_SUFFIX,
        runtime: impAppElement
    });
    Identifiers.ElementRef = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ElementRef',
        moduleUrl: 'asset:angular2/lib/src/core/linker/element_ref' + util_1.MODULE_SUFFIX,
        runtime: impElementRef
    });
    Identifiers.ViewContainerRef = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ViewContainerRef',
        moduleUrl: 'asset:angular2/lib/src/core/linker/view_container_ref' + util_1.MODULE_SUFFIX,
        runtime: impViewContainerRef
    });
    Identifiers.ChangeDetectorRef = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ChangeDetectorRef',
        moduleUrl: 'asset:angular2/lib/src/core/change_detection/change_detector_ref' + util_1.MODULE_SUFFIX,
        runtime: impChangeDetectorRef
    });
    Identifiers.RenderComponentType = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'RenderComponentType',
        moduleUrl: 'asset:angular2/lib/src/core/render/api' + util_1.MODULE_SUFFIX,
        runtime: impRenderComponentType
    });
    Identifiers.QueryList = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'QueryList',
        moduleUrl: 'asset:angular2/lib/src/core/linker/query_list' + util_1.MODULE_SUFFIX,
        runtime: impQueryList
    });
    Identifiers.TemplateRef = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'TemplateRef',
        moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + util_1.MODULE_SUFFIX,
        runtime: impTemplateRef
    });
    Identifiers.TemplateRef_ = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'TemplateRef_',
        moduleUrl: 'asset:angular2/lib/src/core/linker/template_ref' + util_1.MODULE_SUFFIX,
        runtime: impTemplateRef_
    });
    Identifiers.ValueUnwrapper = new compile_metadata_1.CompileIdentifierMetadata({ name: 'ValueUnwrapper', moduleUrl: CD_MODULE_URL, runtime: impValueUnwrapper });
    Identifiers.Injector = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'Injector',
        moduleUrl: "asset:angular2/lib/src/core/di/injector" + util_1.MODULE_SUFFIX,
        runtime: impInjector
    });
    Identifiers.ViewEncapsulation = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ViewEncapsulation',
        moduleUrl: 'asset:angular2/lib/src/core/metadata/view' + util_1.MODULE_SUFFIX,
        runtime: impViewEncapsulation
    });
    Identifiers.ViewType = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ViewType',
        moduleUrl: "asset:angular2/lib/src/core/linker/view_type" + util_1.MODULE_SUFFIX,
        runtime: impViewType
    });
    Identifiers.ChangeDetectionStrategy = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'ChangeDetectionStrategy',
        moduleUrl: CD_MODULE_URL,
        runtime: impChangeDetectionStrategy
    });
    Identifiers.StaticNodeDebugInfo = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'StaticNodeDebugInfo',
        moduleUrl: "asset:angular2/lib/src/core/linker/debug_context" + util_1.MODULE_SUFFIX,
        runtime: impStaticNodeDebugInfo
    });
    Identifiers.DebugContext = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'DebugContext',
        moduleUrl: "asset:angular2/lib/src/core/linker/debug_context" + util_1.MODULE_SUFFIX,
        runtime: impDebugContext
    });
    Identifiers.Renderer = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'Renderer',
        moduleUrl: 'asset:angular2/lib/src/core/render/api' + util_1.MODULE_SUFFIX,
        runtime: impRenderer
    });
    Identifiers.SimpleChange = new compile_metadata_1.CompileIdentifierMetadata({ name: 'SimpleChange', moduleUrl: CD_MODULE_URL, runtime: impSimpleChange });
    Identifiers.uninitialized = new compile_metadata_1.CompileIdentifierMetadata({ name: 'uninitialized', moduleUrl: CD_MODULE_URL, runtime: impUninitialized });
    Identifiers.ChangeDetectorState = new compile_metadata_1.CompileIdentifierMetadata({ name: 'ChangeDetectorState', moduleUrl: CD_MODULE_URL, runtime: impChangeDetectorState });
    Identifiers.checkBinding = new compile_metadata_1.CompileIdentifierMetadata({ name: 'checkBinding', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCheckBinding });
    Identifiers.flattenNestedViewRenderNodes = new compile_metadata_1.CompileIdentifierMetadata({
        name: 'flattenNestedViewRenderNodes',
        moduleUrl: VIEW_UTILS_MODULE_URL,
        runtime: impFlattenNestedViewRenderNodes
    });
    Identifiers.devModeEqual = new compile_metadata_1.CompileIdentifierMetadata({ name: 'devModeEqual', moduleUrl: CD_MODULE_URL, runtime: impDevModeEqual });
    Identifiers.interpolate = new compile_metadata_1.CompileIdentifierMetadata({ name: 'interpolate', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impInterpolate });
    return Identifiers;
}());
exports.Identifiers = Identifiers;
function identifierToken(identifier) {
    return new compile_metadata_1.CompileTokenMetadata({ identifier: identifier });
}
exports.identifierToken = identifierToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTVVVkZUZjA1LnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUE4RCxvQkFBb0IsQ0FBQyxDQUFBO0FBQ25GLHFCQUFzQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQ3RELDhCQUFnRCx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3pGLDJCQUtPLHFDQUFxQyxDQUFDLENBQUE7QUFDN0MsaUNBUU8scURBQXFELENBQUMsQ0FBQTtBQUM3RCx3QkFBeUIsa0NBQWtDLENBQUMsQ0FBQTtBQUM1RCw0QkFBeUIsc0NBQXNDLENBQUMsQ0FBQTtBQUNoRSxtQ0FBK0IsNkNBQTZDLENBQUMsQ0FBQTtBQUM3RSxvQkFBNkQsOEJBQThCLENBQUMsQ0FBQTtBQUM1RixxQkFBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSwwQkFBdUIsb0NBQW9DLENBQUMsQ0FBQTtBQUM1RCx1QkFBd0IsMEJBQTBCLENBQUMsQ0FBQTtBQUNuRCx5QkFBdUIsK0JBQStCLENBQUMsQ0FBQTtBQUN2RCw2QkFBd0MsdUNBQXVDLENBQUMsQ0FBQTtBQUNoRixxQkFBNEIsUUFBUSxDQUFDLENBQUE7QUFFckMsSUFBSSxtQkFBbUIsR0FBRyx5Q0FBeUMsR0FBRyxvQkFBYSxDQUFDO0FBQ3BGLElBQUkscUJBQXFCLEdBQUcsK0NBQStDLEdBQUcsb0JBQWEsQ0FBQztBQUM1RixJQUFJLGFBQWEsR0FBRywrREFBK0QsR0FBRyxvQkFBYSxDQUFDO0FBRXBHLHdEQUF3RDtBQUN4RCx1REFBdUQ7QUFDdkQsMEJBQTBCO0FBQzFCLElBQUksWUFBWSxHQUFHLHNCQUFTLENBQUM7QUFDN0IsSUFBSSxVQUFVLEdBQUcsY0FBTyxDQUFDO0FBQ3pCLElBQUksZUFBZSxHQUFHLDRCQUFZLENBQUM7QUFDbkMsSUFB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RUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUM7SUFDekUsdUJBQVcsR0FBRyxJQUFJLDRDQUF5QixDQUM5QyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO0lBQ3hGLGtCQUFDO0FBQUQsQ0FBQyxBQXRHRCxJQXNHQztBQXRHWSxtQkFBVyxjQXNHdkIsQ0FBQTtBQUVELHlCQUFnQyxVQUFxQztJQUNuRSxNQUFNLENBQUMsSUFBSSx1Q0FBb0IsQ0FBQyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFGZSx1QkFBZSxrQkFFOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0FwcFZpZXd9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3JztcbmltcG9ydCB7U3RhdGljTm9kZURlYnVnSW5mbywgRGVidWdDb250ZXh0fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZGVidWdfY29udGV4dCc7XG5pbXBvcnQge1xuICBWaWV3VXRpbHMsXG4gIGZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXMsXG4gIGludGVycG9sYXRlLFxuICBjaGVja0JpbmRpbmdcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdXRpbHMnO1xuaW1wb3J0IHtcbiAgdW5pbml0aWFsaXplZCxcbiAgZGV2TW9kZUVxdWFsLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZhbHVlVW53cmFwcGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JTdGF0ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7QXBwRWxlbWVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnQnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZWxlbWVudF9yZWYnO1xuaW1wb3J0IHtWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld19jb250YWluZXJfcmVmJztcbmltcG9ydCB7UmVuZGVyZXIsIFJlbmRlckNvbXBvbmVudFR5cGUsIFJlbmRlckRlYnVnSW5mb30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaSc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7Vmlld1R5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X3R5cGUnO1xuaW1wb3J0IHtRdWVyeUxpc3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlcic7XG5pbXBvcnQge0luamVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaS9pbmplY3Rvcic7XG5pbXBvcnQge1RlbXBsYXRlUmVmLCBUZW1wbGF0ZVJlZl99IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci90ZW1wbGF0ZV9yZWYnO1xuaW1wb3J0IHtNT0RVTEVfU1VGRklYfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgQVBQX1ZJRVdfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXcnICsgTU9EVUxFX1NVRkZJWDtcbnZhciBWSUVXX1VUSUxTX01PRFVMRV9VUkwgPSAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X3V0aWxzJyArIE1PRFVMRV9TVUZGSVg7XG52YXIgQ0RfTU9EVUxFX1VSTCA9ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJyArIE1PRFVMRV9TVUZGSVg7XG5cbi8vIFJlYXNzaWduIHRoZSBpbXBvcnRzIHRvIGRpZmZlcmVudCB2YXJpYWJsZXMgc28gd2UgY2FuXG4vLyBkZWZpbmUgc3RhdGljIHZhcmlhYmxlcyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBpbXBvcnQuXG4vLyAob25seSBuZWVkZWQgZm9yIERhcnQpLlxudmFyIGltcFZpZXdVdGlscyA9IFZpZXdVdGlscztcbnZhciBpbXBBcHBWaWV3ID0gQXBwVmlldztcbnZhciBpbXBEZWJ1Z0NvbnRleHQgPSBEZWJ1Z0NvbnRleHQ7XG52YXIgaW1wQXBwRWxlbWVudCA9IEFwcEVsZW1lbnQ7XG52YXIgaW1wRWxlbWVudFJlZiA9IEVsZW1lbnRSZWY7XG52YXIgaW1wVmlld0NvbnRhaW5lclJlZiA9IFZpZXdDb250YWluZXJSZWY7XG52YXIgaW1wQ2hhbmdlRGV0ZWN0b3JSZWYgPSBDaGFuZ2VEZXRlY3RvclJlZjtcbnZhciBpbXBSZW5kZXJDb21wb25lbnRUeXBlID0gUmVuZGVyQ29tcG9uZW50VHlwZTtcbnZhciBpbXBRdWVyeUxpc3QgPSBRdWVyeUxpc3Q7XG52YXIgaW1wVGVtcGxhdGVSZWYgPSBUZW1wbGF0ZVJlZjtcbnZhciBpbXBUZW1wbGF0ZVJlZl8gPSBUZW1wbGF0ZVJlZl87XG52YXIgaW1wVmFsdWVVbndyYXBwZXIgPSBWYWx1ZVVud3JhcHBlcjtcbnZhciBpbXBJbmplY3RvciA9IEluamVjdG9yO1xudmFyIGltcFZpZXdFbmNhcHN1bGF0aW9uID0gVmlld0VuY2Fwc3VsYXRpb247XG52YXIgaW1wVmlld1R5cGUgPSBWaWV3VHlwZTtcbnZhciBpbXBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSA9IENoYW5nZURldGVjdGlvblN0cmF0ZWd5O1xudmFyIGltcFN0YXRpY05vZGVEZWJ1Z0luZm8gPSBTdGF0aWNOb2RlRGVidWdJbmZvO1xudmFyIGltcFJlbmRlcmVyID0gUmVuZGVyZXI7XG52YXIgaW1wU2ltcGxlQ2hhbmdlID0gU2ltcGxlQ2hhbmdlO1xudmFyIGltcFVuaW5pdGlhbGl6ZWQgPSB1bmluaXRpYWxpemVkO1xudmFyIGltcENoYW5nZURldGVjdG9yU3RhdGUgPSBDaGFuZ2VEZXRlY3RvclN0YXRlO1xudmFyIGltcEZsYXR0ZW5OZXN0ZWRWaWV3UmVuZGVyTm9kZXMgPSBmbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzO1xudmFyIGltcERldk1vZGVFcXVhbCA9IGRldk1vZGVFcXVhbDtcbnZhciBpbXBJbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xudmFyIGltcENoZWNrQmluZGluZyA9IGNoZWNrQmluZGluZztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJzIHtcbiAgc3RhdGljIFZpZXdVdGlscyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVmlld1V0aWxzJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfdXRpbHMnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3VXRpbHNcbiAgfSk7XG4gIHN0YXRpYyBBcHBWaWV3ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ0FwcFZpZXcnLCBtb2R1bGVVcmw6IEFQUF9WSUVXX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcEFwcFZpZXd9KTtcbiAgc3RhdGljIEFwcEVsZW1lbnQgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0FwcEVsZW1lbnQnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvZWxlbWVudCcgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcEFwcEVsZW1lbnRcbiAgfSk7XG4gIHN0YXRpYyBFbGVtZW50UmVmID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdFbGVtZW50UmVmJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnRfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wRWxlbWVudFJlZlxuICB9KTtcbiAgc3RhdGljIFZpZXdDb250YWluZXJSZWYgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ1ZpZXdDb250YWluZXJSZWYnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvdmlld19jb250YWluZXJfcmVmJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wVmlld0NvbnRhaW5lclJlZlxuICB9KTtcbiAgc3RhdGljIENoYW5nZURldGVjdG9yUmVmID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDaGFuZ2VEZXRlY3RvclJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcENoYW5nZURldGVjdG9yUmVmXG4gIH0pO1xuICBzdGF0aWMgUmVuZGVyQ29tcG9uZW50VHlwZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnUmVuZGVyQ29tcG9uZW50VHlwZScsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL3JlbmRlci9hcGknICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBSZW5kZXJDb21wb25lbnRUeXBlXG4gIH0pO1xuICBzdGF0aWMgUXVlcnlMaXN0ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdRdWVyeUxpc3QnLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9saW5rZXIvcXVlcnlfbGlzdCcgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFF1ZXJ5TGlzdFxuICB9KTtcbiAgc3RhdGljIFRlbXBsYXRlUmVmID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdUZW1wbGF0ZVJlZicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci90ZW1wbGF0ZV9yZWYnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBUZW1wbGF0ZVJlZlxuICB9KTtcbiAgc3RhdGljIFRlbXBsYXRlUmVmXyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnVGVtcGxhdGVSZWZfJyxcbiAgICBtb2R1bGVVcmw6ICdhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL3RlbXBsYXRlX3JlZicgKyBNT0RVTEVfU1VGRklYLFxuICAgIHJ1bnRpbWU6IGltcFRlbXBsYXRlUmVmX1xuICB9KTtcbiAgc3RhdGljIFZhbHVlVW53cmFwcGVyID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoXG4gICAgICB7bmFtZTogJ1ZhbHVlVW53cmFwcGVyJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBWYWx1ZVVud3JhcHBlcn0pO1xuICBzdGF0aWMgSW5qZWN0b3IgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSh7XG4gICAgbmFtZTogJ0luamVjdG9yJyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvZGkvaW5qZWN0b3Ike01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBJbmplY3RvclxuICB9KTtcbiAgc3RhdGljIFZpZXdFbmNhcHN1bGF0aW9uID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3RW5jYXBzdWxhdGlvbicsXG4gICAgbW9kdWxlVXJsOiAnYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnICsgTU9EVUxFX1NVRkZJWCxcbiAgICBydW50aW1lOiBpbXBWaWV3RW5jYXBzdWxhdGlvblxuICB9KTtcbiAgc3RhdGljIFZpZXdUeXBlID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdWaWV3VHlwZScsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci92aWV3X3R5cGUke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBWaWV3VHlwZVxuICB9KTtcbiAgc3RhdGljIENoYW5nZURldGVjdGlvblN0cmF0ZWd5ID0gbmV3IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEoe1xuICAgIG5hbWU6ICdDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneScsXG4gICAgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLFxuICAgIHJ1bnRpbWU6IGltcENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG4gIH0pO1xuICBzdGF0aWMgU3RhdGljTm9kZURlYnVnSW5mbyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnU3RhdGljTm9kZURlYnVnSW5mbycsXG4gICAgbW9kdWxlVXJsOiBgYXNzZXQ6YW5ndWxhcjIvbGliL3NyYy9jb3JlL2xpbmtlci9kZWJ1Z19jb250ZXh0JHtNT0RVTEVfU1VGRklYfWAsXG4gICAgcnVudGltZTogaW1wU3RhdGljTm9kZURlYnVnSW5mb1xuICB9KTtcbiAgc3RhdGljIERlYnVnQ29udGV4dCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnRGVidWdDb250ZXh0JyxcbiAgICBtb2R1bGVVcmw6IGBhc3NldDphbmd1bGFyMi9saWIvc3JjL2NvcmUvbGlua2VyL2RlYnVnX2NvbnRleHQke01PRFVMRV9TVUZGSVh9YCxcbiAgICBydW50aW1lOiBpbXBEZWJ1Z0NvbnRleHRcbiAgfSk7XG4gIHN0YXRpYyBSZW5kZXJlciA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnUmVuZGVyZXInLFxuICAgIG1vZHVsZVVybDogJ2Fzc2V0OmFuZ3VsYXIyL2xpYi9zcmMvY29yZS9yZW5kZXIvYXBpJyArIE1PRFVMRV9TVUZGSVgsXG4gICAgcnVudGltZTogaW1wUmVuZGVyZXJcbiAgfSk7XG4gIHN0YXRpYyBTaW1wbGVDaGFuZ2UgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnU2ltcGxlQ2hhbmdlJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBTaW1wbGVDaGFuZ2V9KTtcbiAgc3RhdGljIHVuaW5pdGlhbGl6ZWQgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAndW5pbml0aWFsaXplZCcsIG1vZHVsZVVybDogQ0RfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wVW5pbml0aWFsaXplZH0pO1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JTdGF0ZSA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdDaGFuZ2VEZXRlY3RvclN0YXRlJywgbW9kdWxlVXJsOiBDRF9NT0RVTEVfVVJMLCBydW50aW1lOiBpbXBDaGFuZ2VEZXRlY3RvclN0YXRlfSk7XG4gIHN0YXRpYyBjaGVja0JpbmRpbmcgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnY2hlY2tCaW5kaW5nJywgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcENoZWNrQmluZGluZ30pO1xuICBzdGF0aWMgZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcyA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiAnZmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2RlcycsXG4gICAgbW9kdWxlVXJsOiBWSUVXX1VUSUxTX01PRFVMRV9VUkwsXG4gICAgcnVudGltZTogaW1wRmxhdHRlbk5lc3RlZFZpZXdSZW5kZXJOb2Rlc1xuICB9KTtcbiAgc3RhdGljIGRldk1vZGVFcXVhbCA9IG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKFxuICAgICAge25hbWU6ICdkZXZNb2RlRXF1YWwnLCBtb2R1bGVVcmw6IENEX01PRFVMRV9VUkwsIHJ1bnRpbWU6IGltcERldk1vZGVFcXVhbH0pO1xuICBzdGF0aWMgaW50ZXJwb2xhdGUgPSBuZXcgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YShcbiAgICAgIHtuYW1lOiAnaW50ZXJwb2xhdGUnLCBtb2R1bGVVcmw6IFZJRVdfVVRJTFNfTU9EVUxFX1VSTCwgcnVudGltZTogaW1wSW50ZXJwb2xhdGV9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXJUb2tlbihpZGVudGlmaWVyOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKTogQ29tcGlsZVRva2VuTWV0YWRhdGEge1xuICByZXR1cm4gbmV3IENvbXBpbGVUb2tlbk1ldGFkYXRhKHtpZGVudGlmaWVyOiBpZGVudGlmaWVyfSk7XG59XG4iXX0=