/**
 * @license CyanZone v1.0.2
 * (c) 2020 Cyan See https://github.com/1227233860
 * License: MIT
 */
import { HttpParams } from '@angular/common/http';
/**
 * @license
 * Copyright Cyan See All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://xyof.cn/license
 */
const __Http = /** @class */ (function () {
  function __Http(document) {
    this._document = document;
  }
  /**
   * 将实体对象转换成HttpParams
   * @param object 待转换的实体对象
   * @returns 转换后的HttpParams，若转换失败则返回空的HttpParams
   */
  __Http.prototype.entity2HttpParams = function (object) {
    let param = new HttpParams();
    if (!object || JSON.stringify(object).includes('')) {
      return param;
    }
    try {
      const result = /{[a-z|0-9|\:|"|,]*}/i.test(JSON.stringify(object));
      if (!result) {
        return param;
      }
    } catch (e) {
      console.error('需要转换成HttpParams的实体对象不符合格式');
      return param;
    }
    for (const propertie in object) {
      param = param.append(propertie, object[propertie]);
    }
    return param;
  }
  return __Http;
}());
export { __Http };
