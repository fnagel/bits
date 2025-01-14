/*
 * Copyright 2021 LABOR.digital
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Last modified: 2021.03.10 at 23:06
 */

import {isBrowser, isFunction} from '@labor-digital/helferlein';

let state: boolean | null = null;

/**
 * Check if the current browser supports es 6 features
 */
export function canUseEs6Features(): boolean
{
    if (state !== null) {
        return state;
    }
    
    if (!isBrowser()) {
        return state = true;
    }
    
    if (!window.customElements || !isFunction(window.customElements.define)) {
        return state = false;
    }
    
    try {
        eval('new class{}');
        return state = true;
    } catch (e) {
        console.log('ERROR');
        return state = false;
    }
    
}