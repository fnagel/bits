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
 * Last modified: 2021.03.15 at 00:19
 */

import {AbstractBit, Data, Watch} from '@labor-digital/bits';

export class ReactivityWatcher extends AbstractBit
{
    @Data()
    protected value: string = '';
    
    @Watch('value')
    protected staticWatcher(newValue: string, oldValue: string)
    {
        const msg = 'Static watcher, new value: "' + newValue + '", old value: "' + oldValue + '"';
        this.$emit('showMessage', {message: msg});
        console.log(msg);
    }
    
    public mounted()
    {
        this.$watch('value', (newValue: string, oldValue: string) => {
            const msg = 'Watcher in "mounted", new value: "' + newValue + '", old value: "' + oldValue + '"';
            this.$emit('showMessage', {message: msg});
            console.log(msg);
        });
    }
}