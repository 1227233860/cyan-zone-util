/**
 * @license CyanZone
 * (c) 2020 Cyan See https://github.com/1227233860/cyan-zone-util
 * License: MIT
 */
import { HttpParams } from '@angular/common/http';
const __Http = /** @class */ (function () {
  function __Http(document) {
    this._document = document;
  }
  const __http = new __Http();
  /**
   * 将实体对象转换成HttpParams
   * @param object 待转换的实体对象
   * @returns 转换后的HttpParams，若转换失败则返回空的HttpParams
   */
  __Http.prototype.entity2HttpParams = function (object) {
    let param = new HttpParams();
    if (!object) {
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
  return __http;
}());
export { __Http };
