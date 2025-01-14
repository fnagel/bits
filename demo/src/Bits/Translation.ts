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
 * Last modified: 2021.04.09 at 21:35
 */

import {AbstractBit} from '@labor-digital/bits';

export class Translation extends AbstractBit
{
    public mounted()
    {
        this.$find('@globalLabel')!.innerText = this.$t('globalString');
        this.$find('@localLabel')!.innerText = this.$t('translated.label', ['foo'], {count: 1});
        this.$find('@lang')!.innerText = this.$translator.lang;
    }
}