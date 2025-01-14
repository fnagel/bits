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
 * Last modified: 2021.03.19 at 13:23
 */

import {AbstractBit, Data, html} from '@labor-digital/bits';

export class HtmlBinding extends AbstractBit
{
    @Data()
    protected count: number = 0;
    
    protected onClick(): void
    {
        this.count++;
    }
    
    public mounted()
    {
        this.$html(() => html`
            <div>
                <button class="btn btn-primary" @click="${this.onClick}">Click me</button>
                <strong>${this.count}</strong>
            </div>`);
    }
}