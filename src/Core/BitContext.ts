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
 * Last modified: 2021.03.09 at 13:39
 */

import {ComponentProxy} from '@labor-digital/helferlein';
import {runInAction} from 'mobx';
import type {Binder} from '../Binding/Binder';
import type {Provider} from '../Reactivity/Provider';
import type {BitApp} from './BitApp';
import type {DiContainer} from './Di/DiContainer';
import type {Mount} from './Mount/Mount';
import type {Translator} from './Translator/Translator';

export class BitContext
{
    protected _mount: Mount;
    protected _di: DiContainer;
    protected _react: Provider;
    protected _binder: Binder;
    protected _proxy?: ComponentProxy;
    protected _translator?: Translator;
    
    constructor(mount: Mount, di: DiContainer, react: Provider, binder: Binder)
    {
        this._mount = mount;
        this._di = di;
        this._react = react;
        this._binder = binder;
    }
    
    /**
     * Returns the reference of the mount point
     */
    public get mount(): Mount
    {
        return this._mount;
    }
    
    /**
     * Returns the tag of the bit mount component
     * @deprecated will be removed without replacement in the next major release
     */
    public get tag(): string
    {
        return this.app.mountTag;
    }
    
    /**
     * Returns the di container instance of the application
     */
    public get di(): DiContainer
    {
        return this._di;
    }
    
    /**
     * Returns the instance of the bit app this context is linked to
     * @deprecated removed in the next major release - use di.app instead
     */
    public get app(): BitApp
    {
        return this._di.app;
    }
    
    /**
     * Returns the reactivity provider for this bit
     */
    public get reactivityProvider(): Provider
    {
        return this._react;
    }
    
    /**
     * Returns the dom binding service for this bit
     */
    public get binder(): Binder
    {
        return this._binder;
    }
    
    /**
     * Returns the instance of the component proxy.
     * The instance is lazy and only created when it was first requested
     */
    public get proxy(): ComponentProxy
    {
        if (!this._proxy) {
            this._proxy = new ComponentProxy(this._mount.bit, (f) => {
                runInAction(() => f());
            });
        }
        return this._proxy;
    }
    
    /**
     * Returns the translator instance for this bit
     */
    public get translator(): Translator
    {
        if (!this._translator) {
            this._translator = this._di.translatorFactory.requireTranslator(
                this._mount.el ?? document.documentElement as any);
        }
        
        return this._translator;
    }
    
    /**
     * Completely destroys the context instance, by calling the nested destroy methods and unlinking
     * all references for garbage collection
     */
    public destroy(): void
    {
        if (this._proxy) {
            this._proxy.destroy();
        }
        
        this._binder.destroy();
        this._react.destroy();
        
        delete this._translator;
        delete this._proxy;
        
        this._react = null as any;
        this._binder = null as any;
        this._di = null as any;
        this._mount = null as any;
    }
}