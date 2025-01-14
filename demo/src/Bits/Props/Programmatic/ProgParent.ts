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
 * Last modified: 2021.04.14 at 18:03
 */

import {AbstractBit, Data, Hot, Watch} from '@labor-digital/bits';

@Hot(module)
export class ProgParent extends AbstractBit
{
    @Data()
    protected model: string = '';
    
    @Watch('model')
    protected onModelChange(n: any, o: any)
    {
        console.log('[Parent], Model changed!', n, o);
    }
    
    public mounted()
    {
        this.$autoRun(() => {
            console.log('Model value is', this.model);
        });
    }
}