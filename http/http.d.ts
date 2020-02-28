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
export declare class __Http {
  /**
   * 将实体对象转换成HttpParams
   * @param object 待转换的实体对象
   * @returns 转换后的HttpParams，若转换失败则返回空的HttpParams
   */
  static entity2HttpParams(params: any): HttpParams;
}
