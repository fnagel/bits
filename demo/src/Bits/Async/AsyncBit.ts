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
 * Last modified: 2021.03.03 at 21:47
 */

import {AbstractBit, html} from '@labor-digital/bits';

export class AsyncBit extends AbstractBit
{
    public mounted()
    {
        console.log(
            'The async bit was loaded using webpack\' dynamic import() feature! This allows you to separate code-heavy bits into their own webpack bundles which are loaded on the fly.');
        
        this.$html(() => html`
            <div class="card-body">I am lazy!</div>
        `);
    }
}