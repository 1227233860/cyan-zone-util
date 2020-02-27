/**
 * @license CyanZone v1.0.2
 * (c) 2020 Cyan See https://github.com/1227233860
 * License: MIT
 */
export declare class __Array {
  /**
   * 判断数组中是否包含某个目标
   * @param source 被检测的数据源
   * @param target 待检测的对象
   * ```
   * const source = [{name: 'Cyan', age: 24}, {name: 'Lily', age: 23}];
   * let target = {name: 'Lily', age: 23};
   * const arrUtil = new __Array();
   * console.log(arrUtil.isExist(source, target)) // true
   * target = {age: 23, name: 'Lily'}; // 调换属性的位置
   * console.log(arrUtil.isExist(source, target)) // false
   * ```
   */
    isExist(source: any[], target: any): boolean;
}
