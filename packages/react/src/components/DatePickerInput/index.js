/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as FeatureFlags from '@carbon/feature-flags';
import { default as DatePickerInputNext } from './next/DatePickerInput';
import { default as DatePickerInputClassic } from './DatePickerInput';

const DatePickerInput = FeatureFlags.enabled('enable-v11-release')
  ? DatePickerInputNext
  : DatePickerInputClassic;

export default DatePickerInput;
