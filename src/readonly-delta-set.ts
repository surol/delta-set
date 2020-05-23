/**
 * @packageDocumentation
 * @module @proc7ts/delta-set
 */
import { DeltaSet } from './delta-set';

/**
 * Read-only view of `Set` that represents a delta of changes made to original set.
 *
 * @typeparam T  A type of elements of delta set.
 */
export interface ReadonlyDeltaSet<T> extends ReadonlySet<T> {

  /**
   * Replays the changes made to original set in target receiver.
   *
   * @param receiver  A receiver of changes delta. E.g. another `Set`.
   *
   * @returns `this` delta set.
   */
  redelta(receiver: DeltaSet.DeltaReceiver<T>): this;

}