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
 * Last modified: 2021.03.11 at 01:15
 */

import {AbstractBit, Listener} from '@labor-digital/bits';

export class Parent extends AbstractBit
{
    @Listener('click', '@addChild')
    onAddChildClick()
    {
        const tpl = this.$tpl('childTpl');
        this.$find('@childList')?.appendChild(tpl);
    }
    
    public domChanged()
    {
        this.$emit('showMessage', {message: '[Lifecycle] Parent executed: domChanged()'});
    }
}