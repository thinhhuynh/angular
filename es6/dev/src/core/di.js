/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export { InjectMetadata, OptionalMetadata, InjectableMetadata, SelfMetadata, HostMetadata, SkipSelfMetadata, DependencyMetadata } from './di/metadata';
// we have to reexport * because Dart and TS export two different sets of types
export * from './di/decorators';
export { forwardRef, resolveForwardRef } from './di/forward_ref';
export { Injector } from './di/injector';
export { ReflectiveInjector } from './di/reflective_injector';
export { Binding, ProviderBuilder, bind, Provider, provide } from './di/provider';
export { ResolvedReflectiveFactory, ReflectiveDependency } from './di/reflective_provider';
export { ReflectiveKey } from './di/reflective_key';
export { NoProviderError, AbstractProviderError, CyclicDependencyError, InstantiationError, InvalidProviderError, NoAnnotationError, OutOfBoundsError } from './di/reflective_exceptions';
export { OpaqueToken } from './di/opaque_token';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTFTblRIT0ozLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsU0FDRSxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osWUFBWSxFQUNaLGdCQUFnQixFQUNoQixrQkFBa0IsUUFDYixlQUFlLENBQUM7QUFFdkIsK0VBQStFO0FBQy9FLGNBQWMsaUJBQWlCLENBQUM7QUFFaEMsU0FBUSxVQUFVLEVBQUUsaUJBQWlCLFFBQXFCLGtCQUFrQixDQUFDO0FBRTdFLFNBQVEsUUFBUSxRQUFPLGVBQWUsQ0FBQztBQUN2QyxTQUFRLGtCQUFrQixRQUFPLDBCQUEwQixDQUFDO0FBQzVELFNBQ0UsT0FBTyxFQUNQLGVBQWUsRUFDZixJQUFJLEVBRUosUUFBUSxFQUNSLE9BQU8sUUFDRixlQUFlLENBQUM7QUFDdkIsU0FFRSx5QkFBeUIsRUFDekIsb0JBQW9CLFFBR2YsMEJBQTBCLENBQUM7QUFDbEMsU0FBUSxhQUFhLFFBQU8scUJBQXFCLENBQUM7QUFDbEQsU0FDRSxlQUFlLEVBQ2YscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixnQkFBZ0IsUUFDWCw0QkFBNEIsQ0FBQztBQUNwQyxTQUFRLFdBQVcsUUFBTyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgYGRpYCBtb2R1bGUgcHJvdmlkZXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gY29udGFpbmVyIHNlcnZpY2VzLlxuICovXG5cbmV4cG9ydCB7XG4gIEluamVjdE1ldGFkYXRhLFxuICBPcHRpb25hbE1ldGFkYXRhLFxuICBJbmplY3RhYmxlTWV0YWRhdGEsXG4gIFNlbGZNZXRhZGF0YSxcbiAgSG9zdE1ldGFkYXRhLFxuICBTa2lwU2VsZk1ldGFkYXRhLFxuICBEZXBlbmRlbmN5TWV0YWRhdGFcbn0gZnJvbSAnLi9kaS9tZXRhZGF0YSc7XG5cbi8vIHdlIGhhdmUgdG8gcmVleHBvcnQgKiBiZWNhdXNlIERhcnQgYW5kIFRTIGV4cG9ydCB0d28gZGlmZmVyZW50IHNldHMgb2YgdHlwZXNcbmV4cG9ydCAqIGZyb20gJy4vZGkvZGVjb3JhdG9ycyc7XG5cbmV4cG9ydCB7Zm9yd2FyZFJlZiwgcmVzb2x2ZUZvcndhcmRSZWYsIEZvcndhcmRSZWZGbn0gZnJvbSAnLi9kaS9mb3J3YXJkX3JlZic7XG5cbmV4cG9ydCB7SW5qZWN0b3J9IGZyb20gJy4vZGkvaW5qZWN0b3InO1xuZXhwb3J0IHtSZWZsZWN0aXZlSW5qZWN0b3J9IGZyb20gJy4vZGkvcmVmbGVjdGl2ZV9pbmplY3Rvcic7XG5leHBvcnQge1xuICBCaW5kaW5nLFxuICBQcm92aWRlckJ1aWxkZXIsXG4gIGJpbmQsXG5cbiAgUHJvdmlkZXIsXG4gIHByb3ZpZGVcbn0gZnJvbSAnLi9kaS9wcm92aWRlcic7XG5leHBvcnQge1xuICBSZXNvbHZlZFJlZmxlY3RpdmVCaW5kaW5nLFxuICBSZXNvbHZlZFJlZmxlY3RpdmVGYWN0b3J5LFxuICBSZWZsZWN0aXZlRGVwZW5kZW5jeSxcblxuICBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlclxufSBmcm9tICcuL2RpL3JlZmxlY3RpdmVfcHJvdmlkZXInO1xuZXhwb3J0IHtSZWZsZWN0aXZlS2V5fSBmcm9tICcuL2RpL3JlZmxlY3RpdmVfa2V5JztcbmV4cG9ydCB7XG4gIE5vUHJvdmlkZXJFcnJvcixcbiAgQWJzdHJhY3RQcm92aWRlckVycm9yLFxuICBDeWNsaWNEZXBlbmRlbmN5RXJyb3IsXG4gIEluc3RhbnRpYXRpb25FcnJvcixcbiAgSW52YWxpZFByb3ZpZGVyRXJyb3IsXG4gIE5vQW5ub3RhdGlvbkVycm9yLFxuICBPdXRPZkJvdW5kc0Vycm9yXG59IGZyb20gJy4vZGkvcmVmbGVjdGl2ZV9leGNlcHRpb25zJztcbmV4cG9ydCB7T3BhcXVlVG9rZW59IGZyb20gJy4vZGkvb3BhcXVlX3Rva2VuJztcbiJdfQ==